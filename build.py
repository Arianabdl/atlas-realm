"""Build Atlas Realm into one self-contained HTML page.

Demo build (default): src/world.js + src/personas.json -> dist/atlas_realm.html and docs/index.html.
Your own data: if src/world.local.js (from tools/sync_notion.py) or src/personas.local.json
(from tools/parse_personas.py) exist, they are used instead and the page goes to
dist/atlas_realm.local.html only. Local files are git-ignored, so your data never lands in the repo
or on the public demo page.

Optional config.json (copy config.example.json) fills the claude.ai live-sync data source IDs and views.
Also writes dist/check.js for `node --check dist/check.js`.
"""
import io
import json
import os

HERE = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(HERE, "src")
DIST = os.path.join(HERE, "dist")


def rd(path):
    with io.open(path, encoding="utf-8") as f:
        return f.read()


def wr(path, text):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with io.open(path, "w", encoding="utf-8") as f:
        f.write(text)


def pick(name, local_name):
    local = os.path.join(SRC, local_name)
    return (local, True) if os.path.exists(local) else (os.path.join(SRC, name), False)


world_path, local_world = pick("world.js", "world.local.js")
personas_path, local_personas = pick("personas.json", "personas.local.json")
local = local_world or local_personas

personas = json.loads(rd(personas_path))
for v in personas.values():
    v["identity"] = v["identity"].replace("\u00e2\u20ac\u201d", "\u2014").replace("\u00e2\u20ac\u201c", "\u2013")
personas.setdefault("hermes", {
    "persona": None, "memory": None, "memLines": None, "memDate": None,
    "identity": "Always-on agent on Atlas Server (Telegram, Notion capture, digests, reminders).",
    "workflow": [], "rules": [],
})

cfg_path = os.path.join(HERE, "config.json")
cfg = json.loads(rd(cfg_path)) if os.path.exists(cfg_path) else {}
claude_cfg = cfg.get("claude_ai", {})
views = json.loads(rd(os.path.join(SRC, "views.json")))
views.update({k: v for k, v in claude_cfg.get("views", {}).items() if v})

html = rd(os.path.join(SRC, "template.html"))
html = html.replace("/*__VIEWS__*/", json.dumps(views))
html = html.replace("/*__THEMES__*/", rd(os.path.join(SRC, "themes.js")))
html = html.replace("/*__WORLD__*/", rd(world_path).strip())
html = html.replace("/*__PERSONAS__*/", json.dumps(personas, ensure_ascii=False))
placeholders = {"projects": "YOUR-PROJECTS-DATA-SOURCE-ID", "notes": "YOUR-NOTES-DATA-SOURCE-ID",
                "tasks": "YOUR-TASKS-DATA-SOURCE-ID", "mailbox": "YOUR-MAILBOX-DATA-SOURCE-ID"}
for key, ph in placeholders.items():
    value = claude_cfg.get("data_sources", {}).get(key)
    if value:
        html = html.replace(ph, value.replace("collection://", ""))

if local:
    out = os.path.join(DIST, "atlas_realm.local.html")
    wr(out, html)
    print("built your private page:", out, "(not for publishing)")
else:
    wr(os.path.join(DIST, "atlas_realm.html"), html)
    wr(os.path.join(HERE, "docs", "index.html"), html)  # GitHub Pages demo
    print("built demo: dist/atlas_realm.html + docs/index.html,", len(html), "bytes")

start = html.index("<script>") + len("<script>")
wr(os.path.join(DIST, "check.js"), html[start:html.rindex("</script>")])
