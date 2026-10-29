import re
import os
import sys

if sys.platform == 'win32':
    try:
        sys.stdout.reconfigure(encoding='utf-8')
    except Exception:
        pass

for filename in ['index.html', 'portfolio.html', 'assets/js/main.js']:
    if os.path.exists(filename):
        with open(filename, 'r', encoding='utf-8') as f:
            content = f.read()
        matches = re.findall(r'data-i18n="([^"]+)"', content)
        print(f"=== {filename} ===")
        print(f"Total data-i18n occurrences: {len(matches)}")
        print(f"Unique keys: {len(set(matches))}")
        print("Keys:", sorted(set(matches)))
        print()
