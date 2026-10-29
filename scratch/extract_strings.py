import json
import re
from bs4 import BeautifulSoup

def extract_strings(filename):
    with open(filename, 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f.read(), 'html.parser')

    results = {}
    sections = soup.find_all('section')
    for sec in sections:
        sec_id = sec.get('id', 'unnamed')
        results[sec_id] = []
        for tag in sec.find_all(['h1', 'h2', 'h3', 'h4', 'p', 'span', 'a', 'button', 'label'], recursive=True):
            # check if it has direct text
            text = tag.get_text(" ", strip=True)
            classes = tag.get('class', [])
            if text and len(text) > 3 and not text.startswith('http') and not text.startswith('PRJ-'):
                results[sec_id].append({
                    'tag': tag.name,
                    'classes': classes,
                    'text': text[:120],
                    'id': tag.get('id', '')
                })

    with open('scratch/extracted_strings.json', 'w', encoding='utf-8') as out:
        json.dump(results, out, indent=2, ensure_ascii=False)
    print("Extracted strings written to scratch/extracted_strings.json")

if __name__ == '__main__':
    extract_strings('index.html')
