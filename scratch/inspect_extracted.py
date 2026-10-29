import json

with open('scratch/extracted_strings.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

for sec, items in data.items():
    print(f"\n--- Section: {sec} ({len(items)} items) ---")
    for item in items[:6]:
        print(f"  [{item['tag']}] {item['text']}")
