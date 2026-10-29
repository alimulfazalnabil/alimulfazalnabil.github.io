import os
import re
from bs4 import BeautifulSoup

base_dir = r"h:\Software Projects\alimulfazalnabil.github.io-main"
portfolio_path = os.path.join(base_dir, "portfolio.html")

with open(portfolio_path, "r", encoding="utf-8") as f:
    html = f.read()

soup = BeautifulSoup(html, "html.parser")
cards = soup.find_all("article", class_="archive-card")

def match_tech_from_chips(chips):
    matched = set()
    for chip in chips:
        c = chip.lower()
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
        if "rag" in c or "bm25" in c or "rerank" in c or "fusion" in c:
            matched.add("tech_rag")
        if "opencv" in c or "yolo" in c or "canny" in c or "hough" in c:
            matched.add("tech_opencv")
        if "carla" in c:
            matched.add("tech_carla")
        if "sumo" in c or "traci" in c:
            matched.add("tech_sumo")
        if "ros 2" in c or c == "ros":
            matched.add("tech_ros")
        if "scikit" in c or "logistic" in c or "random forest" in c or "clustering" in c:
            matched.add("tech_scikit")
        if "arduino" in c or "ardupilot" in c or "pixhawk" in c or "hc-05" in c or "embedded c" in c or "microcontroller" in c:
            matched.add("tech_arduino")
    return sorted(list(matched))

for card in cards:
    pid = card.get("data-id")
    title = card.find("h3", class_="archive-card-title").text.strip()
    chips = [chip.text.strip() for chip in card.find_all("span", class_="tech-chip")]
    techs = match_tech_from_chips(chips)
    print(f"[{pid}] {title[:32]}... -> {techs}")
