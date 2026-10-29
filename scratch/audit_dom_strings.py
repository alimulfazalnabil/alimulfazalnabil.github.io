import sys
import re
from bs4 import BeautifulSoup

sys.stdout.reconfigure(encoding='utf-8')

def audit_html(filename):
    print(f"\n=================== Auditing {filename} ===================")
    with open(filename, 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f.read(), 'html.parser')

    sections = soup.find_all('section')
    print(f"Total sections: {len(sections)}")
    for i, sec in enumerate(sections):
        sec_id = sec.get('id', f'unnamed-{i}')
        # Get immediate or primary headings
        h1 = [h.get_text(" ", strip=True) for h in sec.find_all('h1')]
        h2 = [h.get_text(" ", strip=True) for h in sec.find_all('h2')]
        h3 = [h.get_text(" ", strip=True) for h in sec.find_all('h3')]
        eyebrow = [e.get_text(" ", strip=True) for e in sec.find_all(class_=re.compile(r'eyebrow|section-tag|label|badge'))]
        print(f"\n[{i+1}] Section id='{sec_id}'")
        if eyebrow:
            print(f"    Eyebrows: {eyebrow[:3]}")
        if h1:
            print(f"    H1: {h1[:2]}")
        if h2:
            print(f"    H2: {h2[:2]}")
        if h3:
            print(f"    H3: {h3[:2]}")

if __name__ == '__main__':
    audit_html('index.html')
    audit_html('portfolio.html')
