import os
import re

base_dir = r"h:\Software Projects\alimulfazalnabil.github.io-main"
portfolio_path = os.path.join(base_dir, "portfolio.html")

with open(portfolio_path, "r", encoding="utf-8") as f:
    html = f.read()

errors = []

# 1. Check Category Tabs
expected_cats = [
    ("all", 27),
    ("embedded", 7),
    ("vision", 4),
    ("aiml", 3),
    ("cloud-data", 4),
    ("automation", 2),
    ("hardware", 1),
    ("web", 3),
    ("smartcity", 2),
    ("cad", 1)
]

for slug, expected_count in expected_cats:
    pattern = rf'data-domain="{slug}"[^>]*>.*?<span class="filter-badge-count">(\d+)</span>'
    m = re.search(pattern, html, re.DOTALL)
    if not m:
        errors.append(f"Missing category tab for data-domain='{slug}'")
    elif int(m.group(1)) != expected_count:
        errors.append(f"Count mismatch for category tab '{slug}': expected {expected_count}, found {m.group(1)}")
    else:
        print(f"[PASS] Category tab '{slug}' verified with count {expected_count}")

# 2. Check Status Pills
expected_statuses = [
    ("all", None),
    ("academic", 6),
    ("prototype", 6),
    ("concept", 6),
    ("learning", 3),
    ("collection", 4),
    ("deployment", 2)
]

for slug, expected_count in expected_statuses:
    if expected_count is None:
        pattern = rf'data-status="{slug}"'
        if not re.search(pattern, html):
            errors.append("Missing 'All Statuses' pill")
        else:
            print("[PASS] Status pill 'all' verified")
    else:
        pattern = rf'data-status="{slug}"[^>]*>[^<]*\((\d+)\)'
        m = re.search(pattern, html)
        if not m:
            errors.append(f"Missing status pill for data-status='{slug}'")
        elif int(m.group(1)) != expected_count:
            errors.append(f"Count mismatch for status pill '{slug}': expected {expected_count}, found {m.group(1)}")
        else:
            print(f"[PASS] Status pill '{slug}' verified with count {expected_count}")

# 3. Check Card Attributes
card_pattern = r'<article class="archive-card" data-id="([^"]+)" data-domain="([^"]+)" data-status="([^"]+)"'
cards = re.findall(card_pattern, html)
print(f"\n[INFO] Found {len(cards)} project cards in portfolio.html")

if len(cards) != 27:
    errors.append(f"Expected 27 cards, found {len(cards)}")

cat_counts = {}
status_counts = {}
valid_cat_slugs = set(c[0] for c in expected_cats if c[0] != "all")
valid_status_slugs = set(s[0] for s in expected_statuses if s[0] != "all")

for pid, c_slug, s_slug in cards:
    if c_slug not in valid_cat_slugs:
        errors.append(f"Card {pid} has invalid domain slug: '{c_slug}'")
    if s_slug not in valid_status_slugs:
        errors.append(f"Card {pid} has invalid status slug: '{s_slug}'")
    cat_counts[c_slug] = cat_counts.get(c_slug, 0) + 1
    status_counts[s_slug] = status_counts.get(s_slug, 0) + 1

for slug, exp_count in expected_cats:
    if slug == "all": continue
    act = cat_counts.get(slug, 0)
    if act != exp_count:
        errors.append(f"Card domain count mismatch for '{slug}': expected {exp_count}, found {act}")
    else:
        print(f"[PASS] Exact {act} cards mapped to domain '{slug}'")

for slug, exp_count in expected_statuses:
    if slug == "all": continue
    act = status_counts.get(slug, 0)
    if act != exp_count:
        errors.append(f"Card status count mismatch for '{slug}': expected {exp_count}, found {act}")
    else:
        print(f"[PASS] Exact {act} cards mapped to status '{slug}'")

# 4. Check Private Repos
assert "PRJ-GENAI-002" in html and "PRJ-GENAI-003" in html
assert "AI Traffic Signal Coordination" in html
assert "badge-private-repo" in html
print("[PASS] Private repository tags verified for PRJ-GENAI-002 and PRJ-GENAI-003")

# 5. Check Case Study Links
for cs in ["case-studies/autonomous-lane-detection.html", "case-studies/heart-disease-prediction.html", "case-studies/enterprise-rag-platform.html", "case-studies/azure-terraform-cicd.html"]:
    cs_path = os.path.join(base_dir, cs)
    assert os.path.exists(cs_path), f"Missing case study file: {cs}"
    assert cs in html, f"Missing link to case study: {cs}"
    print(f"[PASS] Case study link verified: {cs}")

if errors:
    print("\n[FAIL] ERRORS ENCOUNTERED:")
    for e in errors:
        print("  -", e)
    exit(1)
else:
    print("\n[SUCCESS] ALL 9-CATEGORY & 6-STATUS ARCHIVE ASSERTIONS PASSED (100%)!")
    exit(0)
