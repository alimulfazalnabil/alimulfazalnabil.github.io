import os
import json
import re

base_dir = r"h:\Software Projects\alimulfazalnabil.github.io-main"
portfolio_path = os.path.join(base_dir, "portfolio.html")

# Read portfolio.html
with open(portfolio_path, "r", encoding="utf-8") as f:
    html = f.read()

# 1. 7 Domains
domains = [
    {"id": "dom_genai", "title": "Generative AI & RAG", "category": "domain", "domain": "genai", "color": "#a855f7", "radius": 24, "desc": "Enterprise RAG architectures, multi-tenant hybrid retrieval, LLM agents, and semantic intelligence."},
    {"id": "dom_vision", "title": "Computer Vision & Perception", "category": "domain", "domain": "vision", "color": "#38bdf8", "radius": 24, "desc": "Roadway edge perception, CARLA vehicle simulation, YOLO object tracking, and image analytics."},
    {"id": "dom_ml", "title": "Machine Learning & Analytics", "category": "domain", "domain": "ml", "color": "#10b981", "radius": 24, "desc": "Supervised classification, predictive modeling, FastAPI inference services, and MLOps gates."},
    {"id": "dom_cloud", "title": "Cloud Systems & DevOps", "category": "domain", "domain": "cloud", "color": "#3b82f6", "radius": 24, "desc": "Microsoft Azure cloud architectures, Terraform Infrastructure as Code, Kubernetes, and CI/CD."},
    {"id": "dom_data", "title": "Data Engineering & Pipelines", "category": "domain", "domain": "data", "color": "#f59e0b", "radius": 24, "desc": "PostgreSQL, PostGIS geospatial processing, industrial telemetry pipelines, and scalable ETL."},
    {"id": "dom_embedded", "title": "Robotics & Embedded IoT", "category": "domain", "domain": "embedded", "color": "#14b8a6", "radius": 24, "desc": "Microcontrollers (Arduino), servo kinematics, robotics feedback loops, and IoT telemetry."},
    {"id": "dom_research", "title": "Research & Engineering Design", "category": "domain", "domain": "research", "color": "#ec4899", "radius": 24, "desc": "Peer-reviewed scientific publications, IoT systems, CAD modeling, and empirical benchmarking."}
]

# 2. 5 Roles
roles = [
    {"id": "role_redi", "title": "ReDI School · AI & ML Instructor", "shortTitle": "ReDI School", "category": "role", "color": "#f43f5e", "radius": 18, "desc": "March 2026 – Present · Berlin / Remote. Teaches applied machine learning, scikit-learn, and hands-on Python AI workflows."},
    {"id": "role_movisabio", "title": "MoviSabio · CTO & Co-Founder", "shortTitle": "MoviSabio", "category": "role", "color": "#06b6d4", "radius": 18, "desc": "January 2026 – Present. Directs technical architecture and geospatial data strategy for intelligent traffic signal coordination."},
    {"id": "role_energy_cloud", "title": "Energy Crown · Infrastructure & Cloud Systems Engineer", "shortTitle": "Energy Crown (Cloud)", "category": "role", "color": "#6366f1", "radius": 18, "desc": "July 2023 – Present. Operates Microsoft Azure infrastructure, Terraform IaC, automated CI/CD pipelines, and telemetry."},
    {"id": "role_energy_it", "title": "Energy Crown · IT Support Engineer", "shortTitle": "Energy Crown (IT)", "category": "role", "color": "#8b5cf6", "radius": 18, "desc": "January 2019 – June 2023. Managed enterprise LAN/WAN networking, server administration, and foundational hardware diagnostics."},
    {"id": "role_cbiu", "title": "CBIU · Graduate Student Researcher", "shortTitle": "CBIU Research", "category": "role", "color": "#eab308", "radius": 18, "desc": "January 2022 – December 2022. Applied research in IoT architectures and embedded systems resulting in 2 peer-reviewed journal papers."}
]

# 3. 14 Technologies
technologies = [
    {"id": "tech_python", "title": "Python 3.12+", "category": "technology", "color": "#e0e7ff", "radius": 14, "desc": "Core engineering language for AI systems, APIs, machine learning, and automation."},
    {"id": "tech_fastapi", "title": "FastAPI", "category": "technology", "color": "#5eead4", "radius": 13, "desc": "High-throughput asynchronous REST API framework for RAG and ML inference endpoints."},
    {"id": "tech_pgvector", "title": "PostgreSQL & pgvector", "category": "technology", "color": "#93c5fd", "radius": 14, "desc": "Relational vector database for HNSW dense embeddings, structured metadata, and PostGIS spatial indexing."},
    {"id": "tech_rag", "title": "RAG & Hybrid Search", "category": "technology", "color": "#c084fc", "radius": 14, "desc": "Sparse BM25 + dense vector retrieval, Reciprocal Rank Fusion, and cross-encoder reranking."},
    {"id": "tech_azure", "title": "Microsoft Azure", "category": "technology", "color": "#60a5fa", "radius": 14, "desc": "Enterprise cloud platform: Azure Kubernetes Service (AKS), Key Vault, Virtual Networks, and Blob Storage."},
    {"id": "tech_terraform", "title": "Terraform (IaC)", "category": "technology", "color": "#a78bfa", "radius": 13, "desc": "Modular Infrastructure as Code for automated cloud provisioning and state management."},
    {"id": "tech_docker", "title": "Docker & Containers", "category": "technology", "color": "#38bdf8", "radius": 13, "desc": "Multi-stage container builds, microservices isolation, and reproducible deployments."},
    {"id": "tech_k8s", "title": "Kubernetes (AKS)", "category": "technology", "color": "#818cf8", "radius": 13, "desc": "Container orchestration, ingress controllers, pod scaling, and cloud-native deployments."},
    {"id": "tech_opencv", "title": "OpenCV", "category": "technology", "color": "#fdba74", "radius": 14, "desc": "Computer vision library for roadway edge detection, frame preprocessing, and YOLO object tracking."},
    {"id": "tech_carla", "title": "CARLA Simulator", "category": "technology", "color": "#f472b6", "radius": 13, "desc": "Unreal Engine-based autonomous driving simulation platform for camera sensor streaming and driverless testing."},
    {"id": "tech_sumo", "title": "SUMO / TraCI", "category": "technology", "color": "#fbbf24", "radius": 13, "desc": "Microscopic urban traffic simulation tool for dynamic traffic signal coordination."},
    {"id": "tech_ros", "title": "ROS 2", "category": "technology", "color": "#2dd4bf", "radius": 13, "desc": "Robot Operating System for autonomous mobile robot navigation nodes and sensor topics."},
    {"id": "tech_scikit", "title": "scikit-learn", "category": "technology", "color": "#4ade80", "radius": 13, "desc": "Machine learning algorithms, classification ensembles, calibration curves, and feature pipelines."},
    {"id": "tech_arduino", "title": "Embedded C / Arduino", "category": "technology", "color": "#34d399", "radius": 13, "desc": "Microcontroller firmware, PWM servo actuation, ultrasonic ranging, and sensor telemetry."}
]

dom_map = {
    "genai": "dom_genai",
    "vision": "dom_vision",
    "ml": "dom_ml",
    "cloud": "dom_cloud",
    "data": "dom_data",
    "embedded": "dom_embedded",
    "research": "dom_research"
}

# Grounded project-to-role mappings from TASK_2_MASTER_PROJECT_INVENTORY.md
project_to_role = {
    "PRJ-GENAI-002": "role_movisabio",       # Co-founder & CTO platform
    "PRJ-GENAI-004": "role_energy_cloud",    # Operational Log Analysis at Energy Crown Ltd
    "PRJ-ML-001": "role_redi",               # Educational reference for ReDI School teaching
    "PRJ-ML-002": "role_energy_cloud",       # Equipment telemetry anomaly forecasting at Energy Crown Ltd
    "PRJ-DATA-001": "role_energy_cloud",     # Azure data & AI analytics at Energy Crown Ltd
    "PRJ-DATA-002": "role_energy_cloud",     # Distributed data pipeline patterns at Energy Crown Ltd
    "PRJ-DATA-003": "role_energy_cloud",     # Digital-twin industrial energy concept at Energy Crown Ltd
    "PRJ-CLOUD-001": "role_energy_cloud",    # Azure Terraform IaC foundation at Energy Crown Ltd
    "PRJ-CLOUD-002": "role_energy_cloud",    # PGCB Engineers portal deployment at Energy Crown Ltd
    "PRJ-CLOUD-003": "role_energy_cloud",    # Enterprise automation tooling at Energy Crown Ltd
    "PRJ-CLOUD-004": "role_energy_it",       # Workstations & edge hardware diagnostics at Energy Crown Ltd
    "PRJ-EMB-001": "role_cbiu",              # Degree Capstone at Cox's Bazar International University
    "PRJ-EMB-002": "role_cbiu",              # Academic 4-axis arm prototype at CBIU
    "PRJ-EMB-003": "role_cbiu",              # Dual-axis solar tracking prototype at CBIU
    "PRJ-EMB-004": "role_cbiu",              # Line-follower competition robot at CBIU
    "PRJ-EMB-005": "role_cbiu",              # IoT Notice Board paper published at CBIU (IRJMETS 2022)
    "PRJ-EMB-006": "role_cbiu",              # Embedded robotics modules developed during CBIU studies
    "PRJ-ENG-001": "role_cbiu",              # SPAROO web architecture paper published at CBIU (IRJET 2022)
    "PRJ-ENG-002": "role_cbiu",              # Autonomous quadcopter aerial concept at CBIU
    "PRJ-ENG-003": "role_cbiu"               # 2D/3D CAD design portfolio during CBIU degree
}

# Fast string splitting to avoid catastrophic regex backtracking
raw_cards = html.split('<article class="archive-card"')
raw_cards = raw_cards[1:]  # skip before first card

card_matches = []
for c in raw_cards:
    c = c.split('</article>')[0]
    pid_m = re.search(r'data-id="(PRJ-[A-Z]+-[0-9]+)"', c)
    domain_m = re.search(r'data-domain="([^"]+)"', c)
    status_m = re.search(r'data-status="([^"]+)"', c)
    if pid_m and domain_m and status_m:
        card_matches.append((pid_m.group(1), domain_m.group(1), status_m.group(1), c))

def extract_tech_nodes_from_chips(chips):
    matched = set()
    for chip in chips:
        c = chip.lower().strip()
        if "terraform" in c:
            matched.add("tech_terraform")
        if "azure" in c:
            matched.add("tech_azure")
        if "docker" in c or "container" in c:
            matched.add("tech_docker")
        if "kubernetes" in c or "aks" in c:
            matched.add("tech_k8s")
        if "python" in c or "pyspark" in c or "pytorch" in c:
            matched.add("tech_python")
        if "fastapi" in c:
            matched.add("tech_fastapi")
        if "pgvector" in c or "postgres" in c or "postgis" in c:
            matched.add("tech_pgvector")
        if "bm25" in c or "rerank" in c or "rag" in c or "fusion" in c:
            matched.add("tech_rag")
        if "opencv" in c or "yolo" in c or "canny" in c or "hough" in c:
            matched.add("tech_opencv")
        if "carla" in c:
            matched.add("tech_carla")
        if "sumo" in c or "traci" in c:
            matched.add("tech_sumo")
        if "ros 2" in c or c == "ros":
            matched.add("tech_ros")
        if "scikit" in c or "logistic" in c or "random forest" in c or "ensemble" in c:
            matched.add("tech_scikit")
        if "arduino" in c or "ardupilot" in c or "pixhawk" in c or "hc-05" in c or "embedded c" in c or "microcontroller" in c:
            matched.add("tech_arduino")
    return sorted(list(matched))

projects = []
edges = []

for pid, domain_slug, status, card_body in card_matches:
    title_m = re.search(r'<h3 class="archive-card-title">(.*?)<\/h3>', card_body)
    title = title_m.group(1).replace("&amp;", "&").strip() if title_m else pid

    period_m = re.search(r'<div class="archive-card-period">(.*?)<\/div>', card_body)
    period = period_m.group(1).strip() if period_m else ""

    desc_m = re.search(r'<p class="archive-card-desc">(.*?)<\/p>', card_body)
    desc = desc_m.group(1).strip() if desc_m else ""

    contrib_m = re.search(r'<div class="archive-card-contribution">\s*<strong>Verified Contribution:<\/strong>(.*?)<\/div>', card_body, re.DOTALL)
    contrib = contrib_m.group(1).strip() if contrib_m else ""

    chips = re.findall(r'<span class="tech-chip">(.*?)<\/span>', card_body)

    case_study_m = re.search(r'href="(case-studies\/[^"]+)"', card_body)
    case_study_url = case_study_m.group(1) if case_study_m else None

    repo_m = re.search(r'href="(https:\/\/github\.com\/[^"]+)"', card_body)
    repo_url = repo_m.group(1) if repo_m else None

    dom_node = next(d for d in domains if d["domain"] == domain_slug)

    proj_node = {
        "id": pid,
        "title": title,
        "category": "project",
        "domain": domain_slug,
        "status": status,
        "period": period,
        "desc": desc,
        "contribution": contrib,
        "technologies": chips,
        "caseStudyUrl": case_study_url,
        "repoUrl": repo_url,
        "links": [],
        "color": dom_node["color"],
        "radius": 11
    }
    projects.append(proj_node)

    # Edge 1: Project -> Domain
    edges.append({
        "source": pid,
        "target": dom_map[domain_slug],
        "type": "domain",
        "label": "categorized_by"
    })

    # Edge 2: Project -> Role
    if pid in project_to_role:
        edges.append({
            "source": pid,
            "target": project_to_role[pid],
            "type": "role",
            "label": "developed_during"
        })

    # Edge 3: Project -> Tech (chips only)
    matched_tech_ids = extract_tech_nodes_from_chips(chips)
    for tid in matched_tech_ids:
        edges.append({
            "source": pid,
            "target": tid,
            "type": "tech",
            "label": "implements"
        })

all_nodes = domains + roles + technologies + projects
print(f"Nodes: {len(all_nodes)} | Edges: {len(edges)}")
print(f"Role edges: {len([e for e in edges if e['type'] == 'role'])}")
print(f"Tech edges: {len([e for e in edges if e['type'] == 'tech'])}")

graph_payload = {
    "nodes": all_nodes,
    "edges": edges
}

# Update scratch/graph_data.json
json_path = os.path.join(base_dir, "scratch", "graph_data.json")
with open(json_path, "w", encoding="utf-8") as f:
    json.dump(graph_payload, f, indent=2)

# Now update assets/js/career-graph.js
js_file = os.path.join(base_dir, "assets", "js", "career-graph.js")
with open(js_file, "r", encoding="utf-8") as f:
    js_content = f.read()

# Replace GRAPH_DATA using string slicing (0.001s, zero regex backtracking)
new_graph_data_str = json.dumps(graph_payload, indent=2)
start_marker = "const GRAPH_DATA = "
end_marker = ";\n\n  let initialized"

start_idx = js_content.find(start_marker)
end_idx = js_content.find(end_marker, start_idx)

if start_idx != -1 and end_idx != -1:
    new_js_content = js_content[:start_idx + len(start_marker)] + new_graph_data_str + js_content[end_idx:]
else:
    print("Error: Could not locate markers in career-graph.js")
    exit(1)

with open(js_file, "w", encoding="utf-8") as f:
    f.write(new_js_content)

print(f"Successfully updated {js_file} ({len(new_js_content):,} bytes)!")
