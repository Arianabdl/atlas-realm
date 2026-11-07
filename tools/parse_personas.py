"""Refresh src/personas.json from the agent persona and memory files in agent_workspace.

Run this after editing any *_persona.md / *_memory.md, then rebuild with build.py.
"""
import io, json, os, re, datetime

HERE = os.path.dirname(os.path.abspath(__file__))
WS = os.path.abspath(os.path.join(HERE, "..", "..", ".."))  # expects this repo inside agent_workspace/<folder>/atlas_realm
OUT = os.path.join(HERE, "..", "src", "personas.local.json")  # git-ignored

# agent id -> (persona path, memory path)
# Example layout: one folder per workstation. Edit to match your own agent_workspace.
AGENTS = {
    "atlas": ("root_persona.md", "global_memory.md"),
    "planner": ("planner/planner_persona.md", "planner/planner_memory.md"),
    "librarian": ("librarian/librarian_persona.md", "librarian/librarian_memory.md"),
    "notion_agent": ("notion_agent/notion_agent_persona.md", "notion_agent/notion_agent_memory.md"),
    "academic": ("academic/academic_persona.md", "academic/academic_memory.md"),
    "latex_builder": ("latex_builder/latex_builder_persona.md", "latex_builder/latex_builder_memory.md"),
    "slides_agent": ("slides_agent/slides_agent_persona.md", "slides_agent/slides_agent_memory.md"),
    "ai_engineer": ("ai_engineer/ai_engineer_persona.md", "ai_engineer/ai_engineer_memory.md"),
    "career": ("career/career_persona.md", "career/career_memory.md"),
    "resume": ("resume/resume_persona.md", "resume/resume_memory.md"),
    "research_editor": ("research_editor/research_editor_persona.md", "research_editor/research_editor_memory.md"),
    "architect": ("architect/architect_persona.md", "architect/architect_memory.md"),
    "maintenance": ("maintenance/maintenance_persona.md", "maintenance/maintenance_memory.md"),
    "github": ("github/github_persona.md", "github/github_memory.md"),
    "philosophy": ("philosophy/philosophy_persona.md", "philosophy/philosophy_memory.md"),
    "music": ("music/music_persona.md", "music/music_memory.md"),
    "drawing": ("drawing/drawing_persona.md", "drawing/drawing_memory.md"),
    "cooking": ("cooking/cooking_persona.md", "cooking/cooking_memory.md"),
    "sport": ("sport/sport_persona.md", "sport/sport_memory.md"),
    "spotify_dj": ("spotify_dj/spotify_dj_persona.md", "spotify_dj/spotify_dj_memory.md"),
    "voice_lab": ("voice_lab/voice_lab_persona.md", "voice_lab/voice_lab_memory.md"),
    "recruiter": ("recruiter/recruiter_persona.md", "recruiter/recruiter_memory.md"),
    "exam_prep": ("exam_prep/exam_prep_persona.md", "exam_prep/exam_prep_memory.md"),
    "plant_monitor": ("plant_monitor/plant_monitor_persona.md", "plant_monitor/plant_monitor_memory.md"),
    "thesis_helper": ("thesis_helper/thesis_helper_persona.md", "thesis_helper/thesis_helper_memory.md"),
    "apply": ("apply/apply_persona.md", "apply/apply_memory.md"),
    "regulations_qa": ("regulations_qa/regulations_qa_persona.md", "regulations_qa/regulations_qa_memory.md"),
    "student_profile": ("student_profile/student_profile_persona.md", "student_profile/student_profile_memory.md"),
    "teaching_assistant": ("teaching_assistant/teaching_assistant_persona.md", "teaching_assistant/teaching_assistant_memory.md"),
}


def clean(s):
    s = s.replace("\\#", "#").replace("\\*", "*").replace("\\_", "_").replace("\\.", ".")
    s = re.sub(r"\[\[([^\]|]+)\|([^\]]+)\]\]", r"\2", s)
    s = re.sub(r"\[\[([^\]]+)\]\]", r"\1", s)
    return s


def section(lines, names):
    out, on = [], False
    for ln in lines:
        h = re.match(r"^\s*#{1,3}\s*(.+?)\s*$", ln)
        if h:
            title = h.group(1).lower()
            if any(n in title for n in names):
                on = True
                continue
            if on:
                break
        elif on:
            out.append(ln)
    return out


def strip_md(s):
    s = re.sub(r"\*\*(.+?)\*\*", r"\1", s)
    s = re.sub(r"`([^`]+)`", r"\1", s)
    return s.strip()


res = {}
for aid, (pp, mp) in AGENTS.items():
    p = os.path.join(WS, pp)
    if not os.path.exists(p):
        print("missing", aid, pp)
        continue
    with io.open(p, encoding="utf-8-sig") as f:
        lines = clean(f.read()).splitlines()
    ident = [l.strip() for l in section(lines, ["identity", "core identity"]) if l.strip() and not l.strip().startswith("---")]
    identity = strip_md(" ".join(l for l in ident if not l.startswith(("*", "-"))))[:420]
    if not identity:
        # first real paragraph
        body = [l.strip() for l in lines if l.strip() and not l.startswith(("#", "---", "aliases"))]
        identity = strip_md(body[0])[:420] if body else ""
    wf = []
    for l in section(lines, ["workflow"]):
        m = re.match(r"^\s*\d+[.)]\s*(.+)$", l)
        if m:
            t = strip_md(m.group(1))
            wf.append(t[:170])
    rules = []
    for l in section(lines, ["editorial rules", "execution rules", "rules"]):
        m = re.match(r"^\s*[*-]\s+(.+)$", l)
        if m:
            t = m.group(1)
            b = re.match(r"\*\*(.+?)[:：]?\*\*", t)
            rules.append(strip_md(b.group(1)) if b else strip_md(t)[:110])
    seen, rl = set(), []
    for r in rules:
        if r not in seen:
            seen.add(r)
            rl.append(r)
    mem = os.path.join(WS, mp)
    mem_lines, mem_date = None, None
    if os.path.exists(mem):
        with io.open(mem, encoding="utf-8-sig") as f:
            mem_lines = len(f.read().splitlines())
        mem_date = datetime.date.fromtimestamp(os.path.getmtime(mem)).isoformat()
    res[aid] = {
        "persona": pp.replace("\\", "/"),
        "memory": mp.replace("\\", "/") if mem_lines is not None else None,
        "memLines": mem_lines,
        "memDate": mem_date,
        "identity": identity,
        "workflow": wf[:6],
        "rules": rl[:6],
    }

with io.open(OUT, "w", encoding="utf-8") as f:
    json.dump(res, f, ensure_ascii=False, indent=1)
for k, v in res.items():
    print(k, "|", v["memLines"], v["memDate"], "| wf", len(v["workflow"]), "| rules", len(v["rules"]), "|", v["identity"][:90])
