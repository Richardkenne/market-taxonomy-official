#!/usr/bin/env python3
"""
build-problems-json.py
----------------------
Reads all CSV files inside L3 PROBLEM CSV/<MARKET>/ subfolders
and merges them into content/problems-by-niche.json

CSV format expected:
  L1, L2, L3, Problem, Archetype_ID, Archetype_Name

Run:
  python3 build-problems-json.py
"""

import csv
import json
import os
import glob

CSV_ROOT = os.path.join(os.path.dirname(__file__), "L3 PROBLEM CSV")
OUTPUT   = os.path.join(os.path.dirname(__file__), "content", "problems-by-niche.json")

result = {}
total_files = 0
total_problems = 0

# Walk every subfolder inside L3 PROBLEM CSV/
for csv_path in sorted(glob.glob(os.path.join(CSV_ROOT, "**", "*.csv"), recursive=True)):
    market_folder = os.path.basename(os.path.dirname(csv_path))
    print(f"  Reading: {market_folder}/{os.path.basename(csv_path)}")

    with open(csv_path, encoding="utf-8") as f:
        reader = csv.DictReader(f)
        file_count = 0
        for row in reader:
            niche = row.get("L3", "").strip()
            problem = row.get("Problem", "").strip()
            archetype = row.get("Archetype_Name", "").strip()
            archetype_id_raw = row.get("Archetype_ID", "0").strip()

            if not niche or not problem:
                continue

            try:
                archetype_id = int(archetype_id_raw)
            except ValueError:
                archetype_id = 0

            if niche not in result:
                result[niche] = []

            result[niche].append({
                "problem":      problem,
                "archetype_id": archetype_id,
                "archetype":    archetype
            })
            file_count += 1

        total_files += 1
        total_problems += file_count

with open(OUTPUT, "w", encoding="utf-8") as f:
    json.dump(result, f, indent=2, ensure_ascii=False)

print(f"\nDone — {total_files} file(s), {len(result)} niches, {total_problems} problems")
print(f"Output: {OUTPUT}")
