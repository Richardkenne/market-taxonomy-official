# Problem Discovery — Flow Structure

## Architecture

The tool is divided into three sequential parts (A → B → C).

```
PART A — Market Navigation
PART B — Numbers + Problem Selection
PART C — Output Sheet
```

---

## Part A — Market Navigation

**What it is:** Taxonomic navigation through economic markets, from macro to specific segment.

**Levels:**
```
L0 — Macro Markets       (index.html / macro-markets.html)
  → L1 — Sub-markets     (MARKETS/{name}/L1/)
    → L2 — Segments      (MARKETS/{name}/L2/)
      → L3 — Niches      (MARKETS/{name}/L3/)
```

**CTA on L3:** "View Problem →" → saves context to localStorage → goes to Part B (problem-selection.html)

**localStorage output from Part A:**
- `selected_market` — e.g. `"Real Estate — Residential — Single-Family Residential"`
- `selected_l3` — e.g. `"Single Family Residential"`
- `suggested_primary` — pre-suggested problem from L3 keyword match
- `suggested_secondary` — optional secondary suggestion
- `problem_back_url` — URL of the L3 page (used by Part B back button)

---

## Part B — Numbers + Problem Selection

### B.1 — Numbers Page
**File:** `numbers.html`

**What it is:** Overview of taxonomy scale. Entry point to Part B from index.html.

**Shows:**
- L1: 230+ Sub-markets
- L2: 4,370+ Segments
- L3: 50,000+ Niches

**Numbers source:** `content/taxonomy-numbers.js` — update this file to change all numbers site-wide.

**CTA:** "Start Problem Analysis →" → `problem-selection.html`

### B.2 — Problem Selection
**File:** `problem-selection.html`

**What it is:** Selection of the core structural problem the product addresses.

**12 core problems:**
```
01 Time / Speed
02 Cost / Leakage
03 Coordination
04 Visibility / Information
05 Risk / Compliance
06 Capacity / Utilization
07 Access / Availability
08 Quality / Reliability
09 Trust / Verification
10 Pricing / Discovery
11 Incentives / Alignment
12 Automation / Scale
```

**Rules:**
- Max 2 selections (primary + optional secondary)
- Primary is mandatory to continue
- Pre-selected automatically from L3 context (if coming from Part A)

**Reference link:** "How to define a monetizable problem" → `how-to-define-problems.html`

**Back button:** Returns to L3 page (reads `problem_back_url` from localStorage)

**localStorage output from Part B:**
- `primary_problem` — e.g. `"Risk / Compliance"`
- `secondary_problem` — e.g. `"Coordination"` (optional)

**CTA:** "Continue with selected problem →" → `output-sheet.html`

---

## Part C — Output Sheet

**File:** `output-sheet.html`

**What it is:** Structured summary of user's selections.

**Displays:**
- Market (breadcrumb: L0 → L1 → L2 → L3)
- Scale (L1 / L2 / L3 counts from taxonomy-numbers.js)
- Problem (primary + optional secondary)

**localStorage inputs:**
- `selected_market`
- `primary_problem`
- `secondary_problem` (optional)

---

## Full Flow

```
[index.html]  ──────────── "Numbers" ──────────────────────────────────────┐
     │                                                                       │
     │  (browse)                                                             ▼
     ▼                                                               [numbers.html]
[macro-markets.html]                                                         │
     │                                                                       │
     ▼                                                                       │
[L1 Page]  ← PART A                                                         │
     │                                                                       │
     ▼                                                                       │
[L2 Page]                                                                    │
     │                                                                       │
     ▼                                                                       │
[L3 Page]  ── "View Problem →" ──────────────────────────────────────────┐  │
                                                                          │  │
                                                              ┌───────────┘  │
                                                              │              │
                                                              ▼              ▼
                                                     [problem-selection.html]  ← PART B
                                                              │
                                                              ▼
                                                      [output-sheet.html]  ← PART C
```

---

## Numbers — How to Update

All counts (L0/L1/L2/L3) are defined in **one file only:**

```
content/taxonomy-numbers.js
```

Edit that file. All pages (numbers.html, output-sheet.html, all L3 pages) load from it automatically.

To update from a CSV:
- CSV format: rows ordered L0 → L1 → L2 → L3
- Extract the count for each level
- Update the 4 values in `content/taxonomy-numbers.js`

---

## Notes

- All state is passed via `localStorage` (no backend)
- User can go back at any point
- Back button on problem-selection always returns to the L3 origin page
