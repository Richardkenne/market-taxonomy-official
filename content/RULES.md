# Market Taxonomy — Project Rules & Documentation

---

## What This Project Does

A personal research tool to identify **business problems** across 43 macro-markets.

The workflow:
```
Search a market (keyword or phrase)
        ↓
Navigate L0 → L1 → L2 → L3
        ↓
Select a sub-segment (L3 page)
        ↓
numbers.html — TAM of the selected L2 segment
        ↓
problem-selection.html — specific problems from CSV + 12 archetypes
        ↓
output-sheet.html — build your analysis
```

The goal is to **arrive at the specific problems as fast as possible**.

---

## Project Structure

```
index.html                  ← Homepage: search bar, flow mode toggle, AI prompt
app.js                      ← Wizard logic (steps, localStorage, sheet, export)
style.css                   ← All styles (mobile + iPad responsive included)
numbers.html                ← Part B step 1: TAM card for selected L2 (shared by all L3)
problem-selection.html      ← Part B step 2: specific problems + 12 archetypes
output-sheet.html           ← Part C: full analysis sheet
build-problems-json.py      ← Script: regenerates content/problems-by-niche.json from CSV
content/
  markets-keywords.json     ← L0 keyword index for search matching
  taxonomy-data.json        ← L0 → L1 → L2 structure (used for deep routing)
  taxonomy-numbers.js       ← L0/L1/L2/L3 counts (single source of truth)
  problems-by-niche.json    ← L3 sub-segment problems (auto-generated from CSV)
  en.json                   ← Translation strings
  RULES.md                  ← This file
  LEVEL-1-TEMPLATE.md       ← HTML template guide for L1 pages
  LEVEL-2-TEMPLATE.md       ← HTML template guide for L2 pages
  LEVEL-3-TEMPLATE.md       ← HTML template guide for L3 pages
L3 PROBLEM CSV/
  {MARKET}/
    *.csv                   ← Source CSV for problems per market
MARKETS/
  {Market}/
    L1/   ← Market overview (L1 sub-markets list)
    L2/   ← Sub-market page (L2 segments list)
    L3/   ← Sub-segment selector → routes to numbers.html
```

---

## Taxonomy Levels

| Level | Name | Example | Count |
|---|---|---|---|
| L0 | Macro Market | Real Estate | 43 |
| L1 | Category | Residential, Commercial | 230+ |
| L2 | Segment | Single-Family, Multi-Family | 4,370+ |
| L3 | Sub-segment | Small Buy-to-Rent Landlords | 50,000+ |

---

## Full Flow (page by page)

```
index.html
  → MARKETS/{Market}/L1/market-{m}.html          (L1 — list of categories)
  → MARKETS/{Market}/L2/market-{m}-{l1}.html     (L2 — list of segments)
  → MARKETS/{Market}/L3/market-{m}-{l1}-{l2}-l3.html   (L3 — sub-segment selector)
  → numbers.html                                 (TAM of selected L2)
  → problem-selection.html                       (specific problems + archetypes)
  → output-sheet.html                            (analysis output)
```

**Navigation rules:**
- Every page has `Home` link → `index.html`
- Every page has `Back` button → `history.back()` (browser history, not hardcoded)
- Auto-scroll: L1/L2/L3 pages scroll to content section on load

---

## File Naming Convention (critical)

```
L1:  MARKETS/{Market}/L1/market-{market-slug}.html
L2:  MARKETS/{Market}/L2/market-{market-slug}-{l1-slug}.html
L3:  MARKETS/{Market}/L3/market-{market-slug}-{l1-slug}-{l2-slug}-l3.html
```

Where `slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-')`

**⚠️ The L3 sub-segment names set in `selectNiche()` must match the CSV `L3` column exactly.**
If they don't match, `problem-selection.html` will show "No specific problems mapped yet."

---

## Adding Problems for a New Market

1. Create folder: `L3 PROBLEM CSV/{MARKET}/`
2. Add CSV with columns: `L1, L2, L3, Problem, Archetype_ID, Archetype_Name`
3. Run: `python3 build-problems-json.py`
4. `content/problems-by-niche.json` is regenerated automatically

The `L3` column in the CSV must match `selectNiche('...')` in the HTML files exactly.

---

## Adding a New Market (full steps)

1. Create folder: `MARKETS/{Market}/L1/`, `L2/`, `L3/`
2. Create L1 HTML following `LEVEL-1-TEMPLATE.md`
3. Create L2 HTML files for each L1 category
4. Create L3 HTML files for each L2 segment (use `selectNiche()` with CSV-matching names)
5. Update `content/taxonomy-data.json` with L1 → L2 structure
6. Update `content/markets-keywords.json` with L0 keywords
7. Add to `MARKET_HREFS` in `index.html`
8. Add TAM entry to `L2_TAM` lookup in `numbers.html`
9. Add problems CSV to `L3 PROBLEM CSV/{MARKET}/` and run `build-problems-json.py`

---

## numbers.html — TAM Display

- One shared page for all markets
- Reads `suggested_primary` + `suggested_secondary` from localStorage
- Looks up TAM in `L2_TAM` object and shows green card
- If no TAM found → card is hidden
- To add a new L2 TAM: add entry to `L2_TAM` in `numbers.html` using key `primary_secondary`

---

## problem-selection.html — Two Sections

**Part 1 (top) — Specific problems:**
- Loaded dynamically from `content/problems-by-niche.json`
- Key = `localStorage.getItem('selected_l3')` (set by L3 page `selectNiche()`)
- Select one problem → "Continue" activates → goes to `output-sheet.html`

**Part 2 (bottom) — 12 archetypes (reference):**
- Static framework cards, not selectable
- Visual reference only

---

## Search Rules

### Step by Step Mode
| Keywords | Behaviour |
|---|---|
| 1 | Show up to 3 markets with % match |
| 2 | Show up to 2 matches or navigate direct if gap ≥ 30 |
| 3 | Navigate directly to L1 |

### Auto Complete Mode
| Keywords | Behaviour |
|---|---|
| 1 | Dropdown up to 5 L0 markets |
| 2+, L0 only | Navigate to L1 |
| 2+, L0+L1 | Navigate to L2 |
| 2+, L0+L1+L2 ambiguous | L2 panel with % |
| 2+, L0+L1+L2 clear | Navigate directly to L3 |

---

## General Rules

- **Back button:** always `history.back()` — never hardcoded URL
- **Auto-scroll:** L1/L2/L3 pages scroll to first `section` on load
- **Mobile/iPad:** responsive breakpoints at 768px (tablet) and 480px (mobile)
- **XSS protection:** all user input HTML-escaped
- **Backups:** max 4 kept locally, oldest deleted automatically
- **Push:** accumulate changes locally, push only when explicitly requested

---

## Current Status (Feb 2026)

| Market | L1 | L2 | L3 | Problems CSV | taxonomy-data.json |
|---|---|---|---|---|---|
| Real Estate | ✅ | ✅ | ✅ | ✅ 57 niches | ✅ updated |
| Healthcare | ✅ | ❌ | ❌ | ❌ | ⚠️ partial |
| All others (41) | ❌ | ❌ | ❌ | ❌ | ⚠️ generic |

**Next step:** add L1 → L2 → L3 files for each market, add CSV, run `build-problems-json.py`.
