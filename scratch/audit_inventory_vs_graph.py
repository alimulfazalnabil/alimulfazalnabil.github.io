import os
import re
import json

base_dir = r"h:\Software Projects\alimulfazalnabil.github.io-main"
js_file = os.path.join(base_dir, "assets", "js", "career-graph.js")
inventory_file = os.path.join(r"C:\Users\aflna\.gemini\antigravity\brain\23d4f3b8-436b-4aa7-b369-7a7455688628", "TASK_2_MASTER_PROJECT_INVENTORY.md")

with open(js_file, "r", encoding="utf-8") as f:
    code = f.read()

start_m = "const GRAPH_DATA = "
end_m = ";\n\n  let initialized"
sp = code.find(start_m)
ep = code.find(end_m, sp)
graph_data = json.loads(code[sp + len(start_m):ep].strip())

with open(inventory_file, "r", encoding="utf-8") as f:
    inv_text = f.read()

# Parse inventory master table rows
table_rows = re.findall(r"\|\s*`(PRJ-[A-Z]+-[0-9]+)`\s*\|\s*\*\*([^*]+)\*\*\s*\|\s*([^|]+)\|\s*([^|]+)\|\s*([^|]+)\|\s*([^|]+)\|\s*([^|]+)\|", inv_text)

print(f"Parsed {len(table_rows)} projects from Master Project Inventory table.")

graph_projects = {n["id"]: n for n in graph_data["nodes"] if n["category"] == "project"}

discrepancies = []

for pid, title, period, domain, status, repo, live in table_rows:
    title = title.strip()
    period = period.strip()
    domain = domain.strip()
    status = status.strip().lower()
    
    if pid not in graph_projects:
        discrepancies.append(f"Project ID {pid} in inventory but NOT in career-graph.js!")
        continue
        
    gp = graph_projects[pid]
    
    # Check status
    if gp.get("status") != status:
        discrepancies.append(f"Status mismatch for {pid}: inventory='{status}', graph='{gp.get('status')}'")

print(f"\nTotal inventory table discrepancies found: {len(discrepancies)}")
for d in discrepancies:
    print(" -", d)

# Check edges
edges = graph_data["edges"]
print(f"\nTotal edges in graph: {len(edges)}")
role_edges = [e for e in edges if e["type"] == "role"]
print(f"Role edges ({len(role_edges)}):")
for re_edge in role_edges:
    src_title = graph_projects[re_edge['source']]['title']
    print(f"  {re_edge['source']} ({src_title[:30]}...) -> {re_edge['target']}")
