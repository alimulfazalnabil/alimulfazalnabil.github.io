import os
import re
import json
from bs4 import BeautifulSoup

def extract_portfolio_projects():
    base_dir = r"h:\Software Projects\alimulfazalnabil.github.io-main"
    portfolio_path = os.path.join(base_dir, "portfolio.html")
    
    with open(portfolio_path, "r", encoding="utf-8") as f:
        html = f.read()

    soup = BeautifulSoup(html, "html.parser")
    cards = soup.find_all("article", class_="archive-card")
    
    projects = []
    for c in cards:
        pid = c.get("data-id")
        domain = c.get("data-domain")
        status = c.get("data-status")
        title = c.find("h3", class_="archive-card-title").text.strip()
        period = c.find("div", class_="archive-card-period").text.strip()
        desc = c.find("p", class_="archive-card-desc").text.strip()
        
        tech_chips = [chip.text.strip() for chip in c.find_all("span", class_="tech-chip")]
        
        links = []
        for a in c.find_all("a", href=True):
            links.append({"text": a.text.strip(), "href": a["href"]})
            
        projects.append({
            "id": pid,
            "title": title,
            "domain": domain,
            "status": status,
            "period": period,
            "desc": desc,
            "technologies": tech_chips,
            "links": links
        })
        
    print(f"Extracted {len(projects)} projects from portfolio.html")
    return projects

if __name__ == "__main__":
    projs = extract_portfolio_projects()
    print("Sample project:", json.dumps(projs[0], indent=2))
