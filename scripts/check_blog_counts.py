#!/usr/bin/env python3
import re, os
from collections import Counter

with open('src/lib/blog-data.ts') as f:
    content = f.read()

slugs = re.findall(r"slug:\s+'([^']+)'", content)
print(f'Total slugs from re.findall: {len(slugs)}')

dirs = [d for d in os.listdir('src/app/blog') if os.path.isdir(f'src/app/blog/{d}')]
print(f'Total blog directories: {len(dirs)}')

slug_set = set(slugs)
dir_set = set(dirs)

orphans = slug_set - dir_set
extras = dir_set - slug_set

print(f'Orphan slugs (no directory): {len(orphans)}')
for s in sorted(orphans):
    print(f'  MISSING: {s}')

print(f'Extra dirs (no slug in blog-data.ts): {len(extras)}')
for d in sorted(extras):
    print(f'  EXTRA: {d}')

# Check for duplicates
dupes = {k: v for k, v in Counter(slugs).items() if v > 1}
print(f'\nDuplicate slugs: {len(dupes)}')
for s, cnt in sorted(dupes.items()):
    print(f'  {s}: {cnt} times')
