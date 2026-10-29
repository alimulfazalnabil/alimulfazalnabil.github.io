import os
import re
import json

base_dir = r"h:\Software Projects\alimulfazalnabil.github.io-main"
js_file = os.path.join(base_dir, "assets", "js", "career-graph.js")

with open(js_file, "r", encoding="utf-8") as f:
    code = f.read()

start_m = "const GRAPH_DATA = "
end_m = ";\n\n  let initialized"
sp = code.find(start_m)
ep = code.find(end_m, sp)
if sp == -1 or ep == -1:
    print("Could not find GRAPH_DATA")
    exit(1)

data = json.loads(code[sp + len(start_m):ep].strip())
nodes = data["nodes"]
edges = data["edges"]

print(f"Total nodes: {len(nodes)}")
print(f"Total edges: {len(edges)}")

projects = [n for n in nodes if n["category"] == "project"]
print("\nPROJECT NODES (27):")
for p in projects:
    print(f"- {p['id']}: '{p['title']}' | Domain: {p.get('domain')} | Status: {p.get('status')} | Period: {p.get('period')}")
    if p.get('caseStudyUrl'):
        print(f"    Case Study: {p['caseStudyUrl']} (exists: {os.path.exists(os.path.join(base_dir, p['caseStudyUrl']))})")
    if p.get('repoUrl'):
        print(f"    Repo URL: {p['repoUrl']}")

roles = [n for n in nodes if n["category"] == "role"]
print("\nROLE NODES (5):")
for r in roles:
    print(f"- {r['id']}: '{r['title']}' | Period/Desc: {r.get('desc')}")

techs = [n for n in nodes if n["category"] == "technology"]
print(f"\nTECH NODES ({len(techs)}):")
for t in techs:
    print(f"- {t['id']}: '{t['title']}'")

domains = [n for n in nodes if n["category"] == "domain"]
print(f"\nDOMAIN NODES ({len(domains)}):")
for d in domains:
    print(f"- {d['id']}: '{d['title']}'")
