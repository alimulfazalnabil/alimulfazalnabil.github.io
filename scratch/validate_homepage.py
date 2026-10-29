import os
import re
from bs4 import BeautifulSoup

def validate_homepage():
    filepath = "index.html"
    assert os.path.exists(filepath), "index.html not found!"
    
    with open(filepath, "r", encoding="utf-8") as f:
        html = f.read()

    soup = BeautifulSoup(html, "html.parser")
    errors = []
    warnings = []

    # 1. Check title & meta
    title = soup.find("title")
    if not title or "Alimul Fazal Nabil" not in title.text:
        errors.append("Invalid or missing <title>")

    canonical = soup.find("link", rel="canonical")
    if not canonical or canonical.get("href") != "https://alimulfazalnabil.github.io/":
        errors.append("Canonical URL missing or incorrect")

    og_image = soup.find("meta", property="og:image")
    if not og_image or not og_image.get("content").startswith("https://alimulfazalnabil.github.io/"):
        errors.append("Absolute og:image missing or incorrect")

    # 2. Check Navigation links
    desktop_nav = soup.find("nav", class_="desktop-nav")
    mobile_nav = soup.find("nav", class_="mobile-nav")
    
    for nav_name, nav in [("desktop", desktop_nav), ("mobile", mobile_nav)]:
        if not nav:
            errors.append(f"Missing {nav_name} nav")
            continue
        archive_link = nav.find("a", href="portfolio.html")
        if not archive_link:
            errors.append(f"{nav_name} nav missing link to portfolio.html")

    # 3. Check Section Header CTA in #featured
    featured_section = soup.find("section", id="featured")
    if not featured_section:
        errors.append("Missing #featured section")
    else:
        cta = featured_section.find("a", href="portfolio.html")
        if not cta:
            errors.append("Missing Explore All Projects CTA to portfolio.html in #featured")

    # 4. Check Selected Projects Count
    featured_cards = featured_section.find_all("article", class_="featured-card")
    projects_section = soup.find("section", id="projects")
    gallery_cards = projects_section.find_all("article", class_="gallery-card")
    
    total_selected = len(featured_cards) + len(gallery_cards)
    print(f"Featured cards count: {len(featured_cards)}")
    print(f"Gallery cards count: {len(gallery_cards)}")
    print(f"Total homepage selected projects: {total_selected}")
    
    if total_selected < 3 or total_selected > 5:
        errors.append(f"Expected 3-5 selected projects on homepage, found {total_selected}")

    # 5. Check Case Study links in cards
    case_study_links = []
    for a in soup.find_all("a", href=True):
        href = a["href"]
        if "case-studies/" in href:
            case_study_links.append(href)
            # verify target file exists
            clean_href = href.split("?")[0].split("#")[0]
            if not os.path.exists(clean_href):
                errors.append(f"Dead case study link: {href}")

    print(f"Verified {len(case_study_links)} case study links from homepage")

    # 6. Check Local anchor links
    for a in soup.find_all("a", href=True):
        href = a["href"]
        if href.startswith("#") and href != "#" and href != "#main":
            target_id = href[1:]
            target = soup.find(id=target_id)
            if not target:
                errors.append(f"Broken anchor link: {href}")

    # 7. Check Credibility / Metric ungrounded percentages
    exp_section = soup.find("section", id="experience")
    if exp_section:
        text = exp_section.text
        suspicious_patterns = [r"45%", r"30%", r"30-min", r"99\.9%"]
        for pat in suspicious_patterns:
            if re.search(pat, text):
                warnings.append(f"Found potentially unverified metric pattern '{pat}' in #experience")

    if errors:
        print("\n[FAIL] VALIDATION ERRORS:")
        for e in errors:
            print("  -", e)
    else:
        print("\n[SUCCESS] ALL HOMEPAGE ASSERTIONS PASSED!")

    if warnings:
        print("\n[WARN] WARNINGS:")
        for w in warnings:
            print("  -", w)

    return len(errors) == 0

if __name__ == "__main__":
    success = validate_homepage()
    exit(0 if success else 1)
