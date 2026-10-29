import os
import json
import re
from bs4 import BeautifulSoup

def build_graph():
    base_dir = r"h:\Software Projects\alimulfazalnabil.github.io-main"
    portfolio_path = os.path.join(base_dir, "portfolio.html")
    
    with open(portfolio_path, "r", encoding="utf-8") as f:
        html = f.read()

    soup = BeautifulSoup(html, "html.parser")
    cards = soup.find_all("article", class_="archive-card")
    
    # 1. Domains (7)
    domains = [
        {"id": "dom_genai", "title": "Generative AI & RAG", "category": "domain", "domain": "genai", "color": "#a855f7", "radius": 24, "desc": "Enterprise RAG architectures, multi-tenant hybrid retrieval, LLM agents, and semantic intelligence."},
        {"id": "dom_vision", "title": "Computer Vision & Perception", "category": "domain", "domain": "vision", "color": "#38bdf8", "radius": 24, "desc": "Roadway edge perception, CARLA vehicle simulation, YOLO object tracking, and image analytics."},
        {"id": "dom_ml", "title": "Machine Learning & Analytics", "category": "domain", "domain": "ml", "color": "#10b981", "radius": 24, "desc": "Supervised classification, predictive modeling, FastAPI inference services, and MLOps gates."},
        {"id": "dom_cloud", "title": "Cloud Systems & DevOps", "category": "domain", "domain": "cloud", "color": "#3b82f6", "radius": 24, "desc": "Microsoft Azure cloud architectures, Terraform Infrastructure as Code, Kubernetes, and CI/CD."},
        {"id": "dom_data", "title": "Data Engineering & Pipelines", "category": "domain", "domain": "data", "color": "#f59e0b", "radius": 24, "desc": "PostgreSQL, PostGIS geospatial processing, industrial telemetry pipelines, and scalable ETL."},
        {"id": "dom_embedded", "title": "Robotics & Embedded IoT", "category": "domain", "domain": "embedded", "color": "#14b8a6", "radius": 24, "desc": "Microcontrollers (Arduino), servo kinematics, robotics feedback loops, and IoT telemetry."},
        {"id": "dom_research", "title": "Research & Engineering Design", "category": "domain", "domain": "research", "color": "#ec4899", "radius": 24, "desc": "Peer-reviewed scientific publications, IoT systems, CAD modeling, and empirical benchmarking."}
    ]

    # 2. Career Roles (5)
    roles = [
        {"id": "role_redi", "title": "ReDI School · AI & ML Instructor", "shortTitle": "ReDI School", "category": "role", "color": "#f43f5e", "radius": 18, "desc": "March 2026 – Present · Berlin / Remote. Teaches applied machine learning, scikit-learn, and hands-on Python AI workflows."},
        {"id": "role_movisabio", "title": "MoviSabio · CTO & Co-Founder", "shortTitle": "MoviSabio", "category": "role", "color": "#06b6d4", "radius": 18, "desc": "January 2026 – Present. Directs technical architecture and geospatial data strategy for intelligent traffic signal coordination."},
        {"id": "role_energy_cloud", "title": "Energy Crown · Infrastructure & Cloud Systems Engineer", "shortTitle": "Energy Crown (Cloud)", "category": "role", "color": "#6366f1", "radius": 18, "desc": "July 2023 – Present. Operates Microsoft Azure infrastructure, Terraform IaC, automated CI/CD pipelines, and telemetry."},
        {"id": "role_energy_it", "title": "Energy Crown · IT Support Engineer", "shortTitle": "Energy Crown (IT)", "category": "role", "color": "#8b5cf6", "radius": 18, "desc": "January 2019 – June 2023. Managed enterprise LAN/WAN networking, server administration, and foundational hardware diagnostics."},
        {"id": "role_cbiu", "title": "CBIU · Graduate Student Researcher", "shortTitle": "CBIU Research", "category": "role", "color": "#eab308", "radius": 18, "desc": "January 2022 – December 2022. Applied research in IoT architectures and embedded systems resulting in 2 peer-reviewed journal papers."}
    ]

    # 3. Core Technologies (14)
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

    # Map domain slug to domain node id
    dom_map = {
        "genai": "dom_genai",
        "vision": "dom_vision",
        "ml": "dom_ml",
        "cloud": "dom_cloud",
        "data": "dom_data",
        "embedded": "dom_embedded",
        "research": "dom_research"
    }

    # Map project IDs to associated Career Roles
    project_role_map = {
        "PRJ-GENAI-002": "role_movisabio",
        "PRJ-DATA-003": "role_movisabio",
        "PRJ-ML-001": "role_redi",
        "PRJ-CLOUD-001": "role_energy_cloud",
        "PRJ-CLOUD-002": "role_energy_cloud",
        "PRJ-DATA-002": "role_energy_cloud",
        "PRJ-EMB-004": "role_energy_it",
        "PRJ-EMB-001": "role_cbiu",
        "PRJ-RES-001": "role_cbiu",
        "PRJ-RES-002": "role_cbiu"
    }

    # Map tech keywords to tech node IDs
    tech_matcher = [
        (["python", "pytorch"], "tech_python"),
        (["fastapi"], "tech_fastapi"),
        (["pgvector", "postgres", "postgis"], "tech_pgvector"),
        (["rag", "bm25", "hybrid", "reciprocal rank fusion"], "tech_rag"),
        (["azure"], "tech_azure"),
        (["terraform"], "tech_terraform"),
        (["docker", "container"], "tech_docker"),
        (["kubernetes", "k8s"], "tech_k8s"),
        (["opencv", "yolo", "canny", "hough"], "tech_opencv"),
        (["carla"], "tech_carla"),
        (["sumo", "traci"], "tech_sumo"),
        (["ros 2", "ros"], "tech_ros"),
        (["scikit-learn", "logistic regression", "random forest"], "tech_scikit"),
        (["arduino", "embedded c", "microcontroller", "hc-05", "ldr", "ultrasonic", "servo"], "tech_arduino")
    ]

    # 4. Extract Projects
    projects = []
    edges = []

    for c in cards:
        pid = c.get("data-id")
        domain_slug = c.get("data-domain")
        status = c.get("data-status")
        title = c.find("h3", class_="archive-card-title").text.strip()
        period = c.find("div", class_="archive-card-period").text.strip()
        desc = c.find("p", class_="archive-card-desc").text.strip()
        
        contrib_div = c.find("div", class_="archive-card-contribution")
        contrib = contrib_div.text.replace("Verified Contribution:", "").strip() if contrib_div else ""
        
        tech_chips = [chip.text.strip() for chip in c.find_all("span", class_="tech-chip")]
        
        # Check links
        links = []
        case_study_url = None
        repo_url = None
        for a in c.find_all("a", href=True):
            href = a["href"]
            txt = a.text.strip()
            links.append({"text": txt, "href": href})
            if "case-studies/" in href:
                case_study_url = href
            elif "github.com" in href:
                repo_url = href

        # Domain color
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
            "technologies": tech_chips,
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

        # Edge 2: Project -> Role (if linked)
        if pid in project_role_map:
            edges.append({
                "source": pid,
                "target": project_role_map[pid],
                "type": "role",
                "label": "developed_during"
            })

        # Edge 3: Project -> Technologies
        matched_techs = set()
        text_corpus = (title + " " + desc + " " + contrib + " " + " ".join(tech_chips)).lower()
        for keywords, tech_id in tech_matcher:
            if any(kw in text_corpus for kw in keywords):
                matched_techs.add(tech_id)
                
        # Limit to 4 key tech links per project to keep graph clean
        for tid in sorted(list(matched_techs))[:4]:
            edges.append({
                "source": pid,
                "target": tid,
                "type": "tech",
                "label": "implements"
            })

    all_nodes = domains + roles + technologies + projects
    print(f"Total nodes: {len(all_nodes)} (Domains: {len(domains)}, Roles: {len(roles)}, Tech: {len(technologies)}, Projects: {len(projects)})")
    print(f"Total edges: {len(edges)}")

    graph_payload = {
        "nodes": all_nodes,
        "edges": edges
    }

    output_json = os.path.join(base_dir, "scratch", "graph_data.json")
    with open(output_json, "w", encoding="utf-8") as f:
        json.dump(graph_payload, f, indent=2)

    print("Saved graph payload to", output_json)
    return graph_payload

if __name__ == "__main__":
    build_graph()
