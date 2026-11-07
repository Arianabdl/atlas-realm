"""Pull your own Notion workspace into Atlas Realm, using your own integration token.

The token stays on your machine: it is read from .env and only used to call the Notion API.
It is never written into src/world.local.js or into the built page.

    cp .env.example .env                  # add NOTION_TOKEN
    cp config.example.json config.json    # add database IDs, check property names
    python tools/sync_notion.py           # writes src/world.local.js (git-ignored)
    python build.py                       # writes dist/atlas_realm.local.html, open it in a browser

Only the Python standard library is used.
"""
import datetime
import json
import os
import re
import sys
import urllib.error
import urllib.request

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
API = "https://api.notion.com/v1"
NOTION_VERSION = "2022-06-28"
MAX_TOWNS = 6


def load_env(path):
    if not os.path.exists(path):
        return
    for line in open(path, encoding="utf-8"):
        line = line.strip()
        if line and not line.startswith("#") and "=" in line:
            k, v = line.split("=", 1)
            os.environ.setdefault(k.strip(), v.strip().strip('"').strip("'"))


def query(db_id, token):
    """All pages of a database, following pagination."""
    pages, cursor = [], None
    while True:
        body = {"page_size": 100}
        if cursor:
            body["start_cursor"] = cursor
        req = urllib.request.Request(f"{API}/databases/{db_id}/query", data=json.dumps(body).encode(), method="POST", headers={
            "Authorization": f"Bearer {token}", "Notion-Version": NOTION_VERSION, "Content-Type": "application/json"})
        try:
            with urllib.request.urlopen(req, timeout=60) as r:
                data = json.load(r)
        except urllib.error.HTTPError as e:
            msg = e.read().decode(errors="replace")
            hint = " Share the database with your integration (... -> Connections)." if e.code in (403, 404) else ""
            sys.exit(f"Notion API error {e.code} for database {db_id}: {msg[:300]}{hint}")
        pages += data["results"]
        if not data.get("has_more"):
            return pages
        cursor = data["next_cursor"]


def nid(x):
    return (x or "").replace("-", "")


def prop(page, name):
    return page["properties"].get(name) if name else None


def text(p):
    if not p:
        return ""
    t = p["type"]
    if t in ("title", "rich_text"):
        return "".join(x.get("plain_text", "") for x in p[t]).strip()
    if t in ("select", "status"):
        return (p[t] or {}).get("name", "")
    if t == "formula":
        return str(p["formula"].get(p["formula"]["type"]) or "")
    return ""


def day(p):
    if not p:
        return None
    t = p["type"]
    if t == "date" and p["date"]:
        return p["date"]["start"][:10]
    if t in ("last_edited_time", "created_time"):
        return p[t][:10]
    return None


def rel(p):
    return [nid(r["id"]) for r in p["relation"]] if p and p["type"] == "relation" else []


def yes(p):
    return bool(p and p["type"] == "checkbox" and p["checkbox"])


def main():
    load_env(os.path.join(ROOT, ".env"))
    token = os.environ.get("NOTION_TOKEN")
    if not token:
        sys.exit("NOTION_TOKEN is missing: copy .env.example to .env and paste your integration secret.")
    cfg_path = os.path.join(ROOT, "config.json")
    if not os.path.exists(cfg_path):
        sys.exit("config.json is missing: copy config.example.json to config.json and add your database IDs.")
    cfg = json.load(open(cfg_path, encoding="utf-8"))
    dbs, arch = cfg["databases"], cfg.get("archive_property")
    sv, pv = cfg["status_values"], cfg["priority_values"]
    live = lambda pg: not (pg.get("archived") or pg.get("in_trash") or yes(prop(pg, arch)))

    # areas -> towns (first in "order" gets the big town)
    ac = cfg["areas"]
    area_pages = [pg for pg in query(nid(dbs["areas"]), token) if live(pg)]
    named = {text(prop(pg, ac["title"])): pg for pg in area_pages}
    pc = cfg["projects"]
    project_pages = [pg for pg in query(nid(dbs["projects"]), token) if live(pg)]
    # without an explicit order, the Area with the most projects gets the big town
    size = {n: sum(1 for pg in project_pages if nid(named[n]["id"]) in rel(prop(pg, pc.get("area")))) for n in named}
    rest = sorted((n for n in named if n not in ac.get("order", [])), key=lambda n: -size[n])
    order = [n for n in ac.get("order", []) if n in named] + rest
    if len(order) > MAX_TOWNS:
        print(f"note: the map has {MAX_TOWNS} towns; projects in these Areas go to Lost & Found: {order[MAX_TOWNS:]}")

    def short(name):
        s = re.split(r"\s+&\s+|\s*\(|\s+-\s+", name)[0].strip()
        return s if len(s) <= 14 else s.split()[0][:14]

    areas, area_of_page = [], {}
    for i, name in enumerate(order[:MAX_TOWNS]):
        aid = f"a{i + 1}"
        areas.append({"id": aid, "n": name, "sign": ac.get("short_names", {}).get(name, short(name)), "nid": nid(named[name]["id"])})
        area_of_page[nid(named[name]["id"])] = aid
    first_area = lambda ids: next((area_of_page[x] for x in ids if x in area_of_page), None)

    # projects
    keywords = [(re.compile(k, re.I), v) for k, v in cfg.get("agents_by_keyword", {}).items()]
    projects = []
    for pg in project_pages:
        name = text(prop(pg, pc["title"]))[:120] or "Untitled"
        st = text(prop(pg, pc.get("status")))
        ag = sorted({a for rx, agents in keywords if rx.search(name) for a in agents})
        x = {"id": nid(pg["id"]), "n": name, "st": "ip" if st in sv["in_progress"] else "done" if st in sv["done"] else "ns",
             "a": first_area(rel(prop(pg, pc.get("area")))), "tt": 0, "ag": ag}
        par = rel(prop(pg, pc.get("parent")))
        if par:
            x["par"] = par[0]
        if yes(prop(pg, pc.get("pinned"))):
            x["pin"] = True
        projects.append(x)
    by_id = {p["id"]: p for p in projects}
    for p in projects:  # same rules as the page's live sync
        if p.get("par") and p["par"] not in by_id:
            p.pop("par")
        if p.get("par") and not p["a"]:
            p["a"] = by_id[p["par"]]["a"]
    for p in projects:
        if p.get("par") and by_id[p["par"]]["a"] != p["a"]:
            p.pop("par")

    # tasks
    tc = cfg["tasks"]
    prio = {v: k for k, vals in pv.items() for v in vals}
    tasks = []
    for pg in query(nid(dbs["tasks"]), token):
        if not live(pg):
            continue
        st = text(prop(pg, tc.get("status")))
        proj = next((x for x in rel(prop(pg, tc.get("project"))) if x in by_id), None)
        x = {"id": nid(pg["id"]), "t": text(prop(pg, tc["title"])) or "Untitled", "p": proj,
             "pr": prio.get(text(prop(pg, tc.get("priority"))), "m")}
        if st in sv["in_progress"]:
            x["st"] = "ip"
        if st in sv["done"]:
            x["done"] = True
        for key, field in (("due", "due"), ("d", "planned")):
            v = day(prop(pg, tc.get(field)))
            if v:
                x[key] = v
        if not proj:
            x["a"] = first_area(rel(prop(pg, tc.get("area"))))
        else:
            by_id[proj]["tt"] += 1
        tasks.append(x)

    # notes (optional database)
    notes = []
    if dbs.get("notes"):
        ncfg = cfg["notes"]
        sensitive = re.compile(cfg.get("sensitive_title_regex") or r"(?!x)x", re.I)
        for pg in query(nid(dbs["notes"]), token):
            if not live(pg):
                continue
            proj = next((x for x in rel(prop(pg, ncfg.get("project"))) if x in by_id), None)
            if not proj:
                continue
            title = text(prop(pg, ncfg["title"]))[:140] or "Untitled"
            x = {"id": nid(pg["id"]), "t": title, "p": proj, "ed": day(prop(pg, ncfg.get("last_edited"))) or pg["last_edited_time"][:10]}
            par = rel(prop(pg, ncfg.get("parent")))
            if par:
                x["par"] = par[0]
            summary = text(prop(pg, ncfg.get("summary")))[:600]
            if summary:
                x["sum"] = summary
            if yes(prop(pg, ncfg.get("pinned"))):
                x["pin"] = True
            if text(prop(pg, ncfg.get("status"))) in sv["done"]:
                x["done"] = True
            if sensitive.search(title):
                x["sealed"] = True
            notes.append(x)
        by_note = {n["id"]: n for n in notes}
        changed = True
        while changed:  # children of sealed notes are sealed too
            changed = False
            for n in notes:
                if not n.get("sealed") and n.get("par") in by_note and by_note[n["par"]].get("sealed"):
                    n["sealed"] = changed = True
        notes = [{"id": n["id"], "p": n["p"], "par": n.get("par"), "sealed": True} if n.get("sealed") else n for n in notes]

    today = datetime.date.today().isoformat()
    world = {"asOf": today, "areas": areas, "projects": projects, "tasks": tasks, "notes": notes,
             "mailbox": {"lastServerLetter": today, "lastServerNote": "No server agent connected."}}
    out = os.path.join(ROOT, "src", "world.local.js")
    with open(out, "w", encoding="utf-8") as f:
        f.write(f"// Generated by tools/sync_notion.py on {today}. Your private data: git-ignored, do not publish.\n(")
        f.write(json.dumps(world, ensure_ascii=False, indent=1) + ")\n")
    print(f"wrote {out}: {len(areas)} towns, {len(projects)} projects, {len(tasks)} tasks, {len(notes)} notes")
    print("next: python build.py  ->  open dist/atlas_realm.local.html")


if __name__ == "__main__":
    main()
