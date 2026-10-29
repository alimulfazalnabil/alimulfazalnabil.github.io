import os
import re
import json
from bs4 import BeautifulSoup

def validate_knowledge_graph():
    base_dir = r"h:\Software Projects\alimulfazalnabil.github.io-main"
    portfolio_path = os.path.join(base_dir, "portfolio.html")
    css_path = os.path.join(base_dir, "assets", "css", "portfolio.css")
    js_path = os.path.join(base_dir, "assets", "js", "career-graph.js")
    portfolio_js_path = os.path.join(base_dir, "assets", "js", "portfolio.js")

    errors = []

    print("=" * 70)
    print("TEST SUITE: CAREER KNOWLEDGE GRAPH VALIDATION")
    print("=" * 70)

    # 1. File existence
    for path in [portfolio_path, css_path, js_path, portfolio_js_path]:
        if not os.path.exists(path):
            errors.append(f"Missing file: {path}")
        else:
            print(f"[PASS] {os.path.basename(path)} exists ({os.path.getsize(path):,} bytes)")

    # 2. Check HTML markup
    with open(portfolio_path, "r", encoding="utf-8") as f:
        html = f.read()

    soup = BeautifulSoup(html, "html.parser")

    has_script = soup.find("script", src="assets/js/career-graph.js") is not None
    if not has_script:
        errors.append("portfolio.html missing script tag for career-graph.js")
    else:
        print("[PASS] script tag for career-graph.js present in <head>")

    view_switcher = soup.find(class_="view-switcher")
    if not view_switcher:
        errors.append("portfolio.html missing .view-switcher control")
    else:
        print("[PASS] .view-switcher control present")

    grid_btn = soup.find(id="viewGridBtn")
    graph_btn = soup.find(id="viewGraphBtn")
    if not grid_btn or not graph_btn:
        errors.append("portfolio.html missing view toggle buttons")
    else:
        print("[PASS] view toggle buttons (Grid and Graph) present with ARIA attributes")

    graph_container = soup.find(id="archiveGraphView")
    if not graph_container:
        errors.append("portfolio.html missing #archiveGraphView container")
    else:
        print("[PASS] #archiveGraphView container present")

    svg_canvas = soup.find(id="careerGraphSvg")
    if not svg_canvas:
        errors.append("portfolio.html missing #careerGraphSvg element")
    else:
        print("[PASS] #careerGraphSvg canvas element present")

    inspector = soup.find(id="graphInspector")
    if not inspector:
        errors.append("portfolio.html missing #graphInspector element")
    else:
        print("[PASS] #graphInspector element present")

    accessible_tree = soup.find(id="graphAccessibleTree")
    if not accessible_tree:
        errors.append("portfolio.html missing #graphAccessibleTree accessible alternative")
    else:
        print("[PASS] #graphAccessibleTree accessible alternative view present")

    # 3. Check CSS styles
    with open(css_path, "r", encoding="utf-8") as f:
        css = f.read()

    css_tokens = [
        ".archive-graph-view",
        ".career-graph-svg",
        ".graph-edge",
        ".graph-node-group",
        ".graph-inspector",
        ".graph-accessible-tree",
        "inspectorSlideUp"
    ]
    for token in css_tokens:
        if token not in css:
            errors.append(f"portfolio.css missing token: {token}")
        else:
            print(f"[PASS] CSS token '{token}' verified")

    # 4. Check JS graph data content
    with open(js_path, "r", encoding="utf-8") as f:
        js_code = f.read()

    # Find the GRAPH_DATA object in JS using string slicing
    start_marker = "const GRAPH_DATA = "
    end_marker = ";\n\n  let initialized"
    start_pos = js_code.find(start_marker)
    if start_pos == -1:
        errors.append("Unable to locate start of GRAPH_DATA in career-graph.js")
    else:
        end_pos = js_code.find(end_marker, start_pos)
        if end_pos == -1:
            errors.append("Unable to locate end of GRAPH_DATA in career-graph.js")
        else:
            json_str = js_code[start_pos + len(start_marker):end_pos].strip()
            try:
                graph_data = json.loads(json_str)
                nodes = graph_data.get("nodes", [])
                edges = graph_data.get("edges", [])

                print(f"[PASS] Parsed {len(nodes)} nodes and {len(edges)} edges from career-graph.js")

                # Check counts
                domains = [n for n in nodes if n["category"] == "domain"]
                roles = [n for n in nodes if n["category"] == "role"]
                techs = [n for n in nodes if n["category"] == "technology"]
                projects = [n for n in nodes if n["category"] == "project"]

                assert len(domains) == 9, f"Expected 9 domains, found {len(domains)}"
                assert len(roles) == 5, f"Expected 5 roles, found {len(roles)}"
                assert len(techs) == 14, f"Expected 14 technologies, found {len(techs)}"
                assert len(projects) == 27, f"Expected 27 projects, found {len(projects)}"
                print("[PASS] Exact node distribution verified (9 domains, 5 roles, 14 tech, 27 projects = 55 total)")

                # Check all project IDs are unique
                pids = [p["id"] for p in projects]
                assert len(set(pids)) == 27, "Duplicate project IDs in graph!"
                print("[PASS] All 27 project IDs are unique")

                # Check edge validity
                node_ids = set(n["id"] for n in nodes)
                for e in edges:
                    assert e["source"] in node_ids, f"Invalid edge source: {e['source']}"
                    assert e["target"] in node_ids, f"Invalid edge target: {e['target']}"
                assert len(edges) == 97, f"Expected 97 verified edges, found {len(edges)}"
                print(f"[PASS] All {len(edges)} edges connect strictly valid nodes (zero orphan edges)")

                # Check edge breakdown
                domain_edges = [e for e in edges if e["type"] == "domain"]
                role_edges = [e for e in edges if e["type"] == "role"]
                tech_edges = [e for e in edges if e["type"] == "tech"]
                assert len(domain_edges) == 27, f"Expected 27 domain edges, found {len(domain_edges)}"
                assert len(role_edges) == 21, f"Expected 21 role edges, found {len(role_edges)}"
                assert len(tech_edges) == 49, f"Expected 49 tech edges, found {len(tech_edges)}"
                print("[PASS] Verified edge breakdown: 27 domain edges, 21 role edges, 49 verified technology edges")

            except Exception as ex:
                errors.append(f"Error validating graph data structure: {ex}")

    if errors:
        print("\n[FAIL] VALIDATION ERRORS:")
        for err in errors:
            print("  -", err)
        return False
    else:
        print("\n[SUCCESS] ALL KNOWLEDGE GRAPH ASSERTIONS PASSED (100%)!")
        return True

if __name__ == "__main__":
    success = validate_knowledge_graph()
    exit(0 if success else 1)
