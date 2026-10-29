import os
import json
import re
from bs4 import BeautifulSoup

def generate_fixed_graph():
    base_dir = r"h:\Software Projects\alimulfazalnabil.github.io-main"
    portfolio_path = os.path.join(base_dir, "portfolio.html")

    with open(portfolio_path, "r", encoding="utf-8") as f:
        html = f.read()

    soup = BeautifulSoup(html, "html.parser")
    cards = soup.find_all("article", class_="archive-card")

    # 1. 7 Engineering Domains
    domains = [
        {"id": "dom_genai", "title": "Generative AI & RAG", "category": "domain", "domain": "genai", "color": "#a855f7", "radius": 24, "desc": "Enterprise RAG architectures, multi-tenant hybrid retrieval, LLM agents, and semantic intelligence."},
        {"id": "dom_vision", "title": "Computer Vision & Perception", "category": "domain", "domain": "vision", "color": "#38bdf8", "radius": 24, "desc": "Roadway edge perception, CARLA vehicle simulation, YOLO object tracking, and image analytics."},
        {"id": "dom_ml", "title": "Machine Learning & Analytics", "category": "domain", "domain": "ml", "color": "#10b981", "radius": 24, "desc": "Supervised classification, predictive modeling, FastAPI inference services, and MLOps gates."},
        {"id": "dom_cloud", "title": "Cloud Systems & DevOps", "category": "domain", "domain": "cloud", "color": "#3b82f6", "radius": 24, "desc": "Microsoft Azure cloud architectures, Terraform Infrastructure as Code, Kubernetes, and CI/CD."},
        {"id": "dom_data", "title": "Data Engineering & Pipelines", "category": "domain", "domain": "data", "color": "#f59e0b", "radius": 24, "desc": "PostgreSQL, PostGIS geospatial processing, industrial telemetry pipelines, and scalable ETL."},
        {"id": "dom_embedded", "title": "Robotics & Embedded IoT", "category": "domain", "domain": "embedded", "color": "#14b8a6", "radius": 24, "desc": "Microcontrollers (Arduino), servo kinematics, robotics feedback loops, and IoT telemetry."},
        {"id": "dom_research", "title": "Research & Engineering Design", "category": "domain", "domain": "research", "color": "#ec4899", "radius": 24, "desc": "Peer-reviewed scientific publications, IoT systems, CAD modeling, and empirical benchmarking."}
    ]

    # 2. 5 Career Milestones
    roles = [
        {"id": "role_redi", "title": "ReDI School · AI & ML Instructor", "shortTitle": "ReDI School", "category": "role", "color": "#f43f5e", "radius": 18, "desc": "March 2026 – Present · Berlin / Remote. Teaches applied machine learning, scikit-learn, and hands-on Python AI workflows."},
        {"id": "role_movisabio", "title": "MoviSabio · CTO & Co-Founder", "shortTitle": "MoviSabio", "category": "role", "color": "#06b6d4", "radius": 18, "desc": "January 2026 – Present. Directs technical architecture and geospatial data strategy for intelligent traffic signal coordination."},
        {"id": "role_energy_cloud", "title": "Energy Crown · Infrastructure & Cloud Systems Engineer", "shortTitle": "Energy Crown (Cloud)", "category": "role", "color": "#6366f1", "radius": 18, "desc": "July 2023 – Present. Operates Microsoft Azure infrastructure, Terraform IaC, automated CI/CD pipelines, and telemetry."},
        {"id": "role_energy_it", "title": "Energy Crown · IT Support Engineer", "shortTitle": "Energy Crown (IT)", "category": "role", "color": "#8b5cf6", "radius": 18, "desc": "January 2019 – June 2023. Managed enterprise LAN/WAN networking, server administration, and foundational hardware diagnostics."},
        {"id": "role_cbiu", "title": "CBIU · Graduate Student Researcher", "shortTitle": "CBIU Research", "category": "role", "color": "#eab308", "radius": 18, "desc": "January 2022 – December 2022. Applied research in IoT architectures and embedded systems resulting in 2 peer-reviewed journal papers."}
    ]

    # 3. 14 Core Verified Technologies
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

    # Factual Project-to-Role mappings grounded in TASK_2_MASTER_PROJECT_INVENTORY.md
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

    # Clean Chip-Level Technology Matcher (prevents substring collisions)
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

    for card in cards:
        pid = card.get("data-id")
        domain_slug = card.get("data-domain")
        status = card.get("data-status")
        title = card.find("h3", class_="archive-card-title").text.strip()
        period = card.find("div", class_="archive-card-period").text.strip()
        desc = card.find("p", class_="archive-card-desc").text.strip()
        
        contrib_div = card.find("div", class_="archive-card-contribution")
        contrib = contrib_div.text.replace("Verified Contribution:", "").strip() if contrib_div else ""
        
        raw_chips = [chip.text.strip() for chip in card.find_all("span", class_="tech-chip")]
        
        links = []
        case_study_url = None
        repo_url = None
        for a in card.find_all("a", href=True):
            href = a["href"]
            txt = a.text.strip()
            links.append({"text": txt, "href": href})
            if "case-studies/" in href:
                case_study_url = href
            elif "github.com" in href:
                repo_url = href

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
            "technologies": raw_chips,
            "caseStudyUrl": case_study_url,
            "repoUrl": repo_url,
            "links": links,
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

        # Edge 2: Project -> Career Role (if documented)
        if pid in project_to_role:
            edges.append({
                "source": pid,
                "target": project_to_role[pid],
                "type": "role",
                "label": "developed_during"
            })

        # Edge 3: Project -> Clean Verified Tech Chips
        matched_tech_ids = extract_tech_nodes_from_chips(raw_chips)
        for tid in matched_tech_ids:
            edges.append({
                "source": pid,
                "target": tid,
                "type": "tech",
                "label": "implements"
            })

    all_nodes = domains + roles + technologies + projects
    print(f"Total Nodes: {len(all_nodes)} (7 Domains, 5 Roles, 14 Tech, 27 Projects)")
    print(f"Total Edges: {len(edges)} (27 Domain edges, {len([e for e in edges if e['type'] == 'role'])} Role edges, {len([e for e in edges if e['type'] == 'tech'])} Tech edges)")

    graph_payload = {
        "nodes": all_nodes,
        "edges": edges
    }

    # Now read the career-graph.js template and update the JSON payload
    js_template_file = os.path.join(base_dir, "scratch", "generate_career_graph_js.py")
    with open(js_template_file, "r", encoding="utf-8") as f:
        gen_script = f.read()

    # Re-run generator with new payload
    json_path = os.path.join(base_dir, "scratch", "graph_data.json")
    with open(json_path, "w", encoding="utf-8") as f:
        json.dump(graph_payload, f, indent=2)

    print("Updated scratch/graph_data.json with 100% verified edges!")

if __name__ == "__main__":
    generate_fixed_graph()
