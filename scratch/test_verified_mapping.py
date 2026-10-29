import os
import re
import json
from bs4 import BeautifulSoup

def test_verified_mapping():
    base_dir = r"h:\Software Projects\alimulfazalnabil.github.io-main"
    portfolio_path = os.path.join(base_dir, "portfolio.html")

    with open(portfolio_path, "r", encoding="utf-8") as f:
        html = f.read()

    soup = BeautifulSoup(html, "html.parser")
    cards = soup.find_all("article", class_="archive-card")

    # Explicit technology dictionary mapping chip labels to canonical technology IDs
    chip_to_tech = {
        # Python
        "python": "tech_python",
        "python 3.12+": "tech_python",
        "pytorch": "tech_python",
        # FastAPI
        "fastapi": "tech_fastapi",
        "fastapi (asynchronous)": "tech_fastapi",
        # pgvector / PostgreSQL / PostGIS
        "postgresql / pgvector": "tech_pgvector",
        "postgresql": "tech_pgvector",
        "postgis": "tech_pgvector",
        "postgresql (pgvector)": "tech_pgvector",
        "mysql/postgresql": "tech_pgvector",
        # RAG
        "bm25 hybrid search": "tech_rag",
        "hybrid search (bm25 + dense)": "tech_rag",
        "rag architecture": "tech_rag",
        "reciprocal rank fusion": "tech_rag",
        "cross-encoder reranking": "tech_rag",
        # Azure
        "microsoft azure": "tech_azure",
        "azure blob storage": "tech_azure",
        "azure": "tech_azure",
        "azure data factory": "tech_azure",
        "azure synapse": "tech_azure",
        # Terraform
        "terraform": "tech_terraform",
        "terraform iac": "tech_terraform",
        # Docker
        "docker": "tech_docker",
        "docker containerization": "tech_docker",
        "containers": "tech_docker",
        # Kubernetes
        "kubernetes": "tech_k8s",
        "kubernetes (aks)": "tech_k8s",
        "aks": "tech_k8s",
        # OpenCV
        "opencv": "tech_opencv",
        "yolov8": "tech_opencv",
        "canny edge detection": "tech_opencv",
        "hough transform": "tech_opencv",
        # CARLA
        "carla simulator": "tech_carla",
        "carla": "tech_carla",
        # SUMO
        "sumo": "tech_sumo",
        "sumo / traci": "tech_sumo",
        "traci": "tech_sumo",
        # ROS 2
        "ros 2": "tech_ros",
        "ros 2 humble": "tech_ros",
        # scikit-learn
        "scikit-learn": "tech_scikit",
        "logistic regression": "tech_scikit",
        "random forest": "tech_scikit",
        # Arduino / Embedded
        "arduino": "tech_arduino",
        "arduino mega 2560": "tech_arduino",
        "embedded c/c++": "tech_arduino",
        "embedded c": "tech_arduino",
        "ardupilot": "tech_arduino",
        "pixhawk flight controller": "tech_arduino",
        "hc-05 bluetooth module": "tech_arduino",
        "microcontroller (arduino)": "tech_arduino",
    }

    # Explicit verified project-to-role mappings
    project_to_role = {
        "PRJ-GENAI-002": "role_movisabio",
        "PRJ-GENAI-004": "role_energy_cloud",
        "PRJ-ML-001": "role_redi",
        "PRJ-ML-002": "role_energy_cloud",
        "PRJ-DATA-001": "role_energy_cloud",
        "PRJ-DATA-002": "role_energy_cloud",
        "PRJ-DATA-003": "role_energy_cloud",
        "PRJ-CLOUD-001": "role_energy_cloud",
        "PRJ-CLOUD-002": "role_energy_cloud",
        "PRJ-CLOUD-003": "role_energy_cloud",
        "PRJ-CLOUD-004": "role_energy_it",
        "PRJ-EMB-001": "role_cbiu",
        "PRJ-EMB-002": "role_cbiu",
        "PRJ-EMB-003": "role_cbiu",
        "PRJ-EMB-004": "role_cbiu",
        "PRJ-EMB-005": "role_cbiu",
        "PRJ-EMB-006": "role_cbiu",
        "PRJ-ENG-001": "role_cbiu",
        "PRJ-ENG-002": "role_cbiu",
        "PRJ-ENG-003": "role_cbiu"
    }

    print("CHECKING CHIP-BASED TECH MATCHING:")
    for c in cards:
        pid = c.get("data-id")
        title = c.find("h3", class_="archive-card-title").text.strip()
        chips = [chip.text.strip().lower() for chip in c.find_all("span", class_="tech-chip")]
        
        matched_techs = set()
        for chip in chips:
            if chip in chip_to_tech:
                matched_techs.add(chip_to_tech[chip])
                
        # Also check role
        role = project_to_role.get(pid, "None (Independent)")
        print(f"[{pid}] {title[:32]}... -> Role: {role} | Tech: {list(matched_techs)}")

if __name__ == "__main__":
    test_verified_mapping()
