import os
import re
import json

base_dir = r"h:\Software Projects\alimulfazalnabil.github.io-main"
js_file = os.path.join(base_dir, "assets", "js", "career-graph.js")

with open(js_file, "r", encoding="utf-8") as f:
    code = f.read()

match = re.search(r"const GRAPH_DATA = ({.*?});\s+let initialized", code, re.DOTALL)
graph_data = json.loads(match.group(1))

nodes = {n["id"]: n for n in graph_data["nodes"]}
edges = graph_data["edges"]

tech_edges = [e for e in edges if e["type"] == "tech"]
print(f"Total tech edges: {len(tech_edges)}")

# Group by project
proj_techs = {}
for e in tech_edges:
    pid = e["source"]
    tid = e["target"]
    if pid not in proj_techs:
        proj_techs[pid] = []
    proj_techs[pid].append(nodes[tid]["title"])

for pid, tlist in sorted(proj_techs.items()):
    p_title = nodes[pid]["title"]
    print(f"- {pid} ({p_title[:32]}...): {', '.join(tlist)}")
