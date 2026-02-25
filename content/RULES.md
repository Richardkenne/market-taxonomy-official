# Market Taxonomy — Project Rules & Documentation

---

## UI / Visual Style Guide

This section defines the canonical design patterns used across ALL pages. Follow exactly when creating or editing any HTML file.

### Typography & Spacing
- **Font:** Inter (300, 400, 500, 600, 700) via Google Fonts
- **Body text:** `0.9rem` / `line-height: 1.75` / `color: #374151`
- **Card descriptions:** `0.8rem` / `line-height: 1.5` / `color: var(--text-secondary, #6b7280)`
- **Section labels:** `0.7rem`, `font-weight: 700`, uppercase, `letter-spacing: 0.1em`, `color: #9ca3af`
- **Headings h1:** `1.6rem`, `font-weight: 700`, `letter-spacing: -0.02em`
- **Headings h2 (doc pages):** `1.3rem`, `font-weight: 700`, `letter-spacing: -0.01em`

### Header Pattern (all taxonomy/detail pages)
```html
<header class="header" style="padding-bottom: 8px;">
    <div class="back-nav" style="margin-bottom: 16px;">
        <a href="../index.html" class="back-link">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M10 12L6 8l4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Back to [Page Name]
        </a>
    </div>
    <div style="text-align:center; margin-bottom: 6px;">
        <span class="part-badge" style="background:#eff6ff; color:#2563eb; border:1px solid #bfdbfe; border-radius:20px; padding:4px 14px; font-size:0.72rem; font-weight:700; letter-spacing:0.06em;">Part B — Business Systems</span>
    </div>
    <h1 style="font-size: 1.6rem; font-weight: 700; letter-spacing: -0.02em; margin-bottom: 12px;">Title</h1>
    <p class="subtitle" style="font-size: 0.875rem; color: var(--text-secondary); max-width: 520px; margin: 0 auto;">Subtitle.</p>
</header>
```

### Part Badge Colors
| Section | Background | Color | Border |
|---------|-----------|-------|--------|
| Part A — Market / Domains | `#ecfdf5` | `#059669` | `#6ee7b7` |
| Part B — Business Systems | `#eff6ff` | `#2563eb` | `#bfdbfe` |
| Part C — Delivery Models | `#f5f3ff` | `#7c3aed` | `#ddd6fe` |
| Foundation | same as parent section | — | — |

### Card Grid Pattern (taxonomy overview pages)
```css
/* Grid */
.xx-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: 16px;
    max-width: 960px;
    margin: 0 auto;
    padding: 24px 16px 48px;
}
/* Card */
.xx-card {
    background: var(--surface, #fff);
    border: 1px solid var(--border, #e5e7eb);
    border-radius: 12px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    transition: box-shadow 0.15s;
}
.xx-card:hover { box-shadow: 0 4px 16px rgba(0,0,0,0.08); }
/* Number tag */
.xx-number {
    font-size: 0.68rem; font-weight: 700;
    border-radius: 6px; padding: 2px 8px;
    width: fit-content; letter-spacing: 0.06em;
}
```

### Card Content Rules
- **Number tag format:** `01 — Name` (zero-padded, em-dash, short name)
- **Card title (h3):** `font-size: 1rem; font-weight: 600; margin: 0;`
- **Card description (p):** `font-size: 0.8rem; color: var(--text-secondary); margin: 0; line-height: 1.5;`
- **Description length:** 1–2 lines max. One observation + one example or consequence.
- **NO emojis** anywhere in the UI
- **NO long descriptions** on card grids — brevity is the rule

### Foundation / Why-Link Pattern
Used below the header, before the card grid, to link to explanatory "why" pages:
```html
<div class="why-row" style="margin-top: 24px;">
    <a href="xxx-why.html" class="why-link">
        <div class="why-link-left">
            <span class="why-link-tag">Foundation</span>
            <span class="why-link-title">Why There Are Exactly 12 [X]</span>
            <span class="why-link-sub">The theory, the sources, and why the number is not arbitrary.</span>
        </div>
        <span class="why-link-arrow">→</span>
    </a>
</div>
```
- `.why-link-tag` color matches section accent color
- `.why-link-arrow` color matches section accent color
- Hover border-color matches section accent color

### Section Labels
```html
<p class="section-label">Label text</p>
```
Used to group cards thematically. Keep labels short (2–4 words). Comes before each card grid block.

### "Why" / Foundation Document Pages
Detailed explanatory pages (e.g. `business-systems-why.html`). Pattern:
```css
.doc-body { max-width: 720px; margin: 0 auto; padding: 24px 24px 80px; }
.exec-statement { background: [accent-light]; border-left: 3px solid [accent]; border-radius: 0 8px 8px 0; padding: 16px 20px; }
.final-rule { background: #111; color: #fff; border-radius: 12px; padding: 24px; margin-top: 32px; }
```
- Uses `h2` and `h3` for structure
- Long-form prose is allowed here (unlike card grids)
- Ends with a `final-rule` dark box containing the key takeaway

### Color Palette per Section

**Business Systems (blue):**
- Each system has a unique pastel color pair (border-color + background)
- 01 blue, 02 green, 03 orange, 04 purple, 05 yellow, 06 pink, 07 teal, 08 sky, 09 red, 10 violet, 11 emerald, 12 slate

**Delivery Models (purple, `#7c3aed`):**
- Section accent: `#7c3aed` / `#f5f3ff` / `#ddd6fe`

**Business Domains (green, `#059669`):**
- Section accent: `#059669` / `#ecfdf5` / `#6ee7b7`

**Markets (green, `var(--green)`):**
- Section accent: `var(--green)` / `#f0fdf4` / `#bbf7d0`

### What NOT to do
- Do not use emojis in any page
- Do not write card descriptions longer than 2 sentences
- Do not create elaborate multi-section layouts with "What It Is / Why It Matters / Key Activities" headings on card pages — that pattern belongs only in Foundation/Why doc pages
- Do not add decorative elements (dividers, icons, ornaments) not already in the codebase
- Do not change fonts, weights, or spacing outside the values above
- Do not hardcode colors not in this palette

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
faq.html                    ← FAQ and general information
global-investors.html       ← Global investors and institutions database
how-tam-is-calculated.html  ← TAM calculation methodology
how-to-define-problems.html ← Problem definition framework
macro-markets.html          ← 43 Macro Markets overview
build-problems-json.py      ← Script: regenerates content/problems-by-niche.json from CSV
content/
  markets-keywords.json     ← L0 keyword index for search matching
  taxonomy-data.json        ← L0 → L1 → L2 structure (used for deep routing)
  taxonomy-numbers.js       ← L0/L1/L2/L3 counts (single source of truth)
  problems-by-niche.json    ← L3 sub-segment problems (auto-generated from CSV)
  en.json                   ← Translation strings (i18n)
  RULES.md                  ← This file
  LEVEL-1-TEMPLATE.md       ← HTML template guide for L1 pages
  LEVEL-2-TEMPLATE.md       ← HTML template guide for L2 pages
  LEVEL-3-TEMPLATE.md       ← HTML template guide for L3 pages
  BUSINESS-DOMAINS-TEMPLATE.md  ← Template guide for Business Domains framework
BUSINESS DOMAINS TAXONOMY/
  business-domains.html              ← Grid view of 12 Business Domains
  business-domains-detail.html       ← Detailed explanations with anchor links
BUSINESS SYSTEMS TAXONOMY/
  business.html                      ← 12 Business Systems framework
  business-systems-why.html          ← Why 12 Business Systems exist
  unit-economics-why.html            ← Unit Economics benchmarks explained
DELIVERY MODELS TAXONOMY/
  delivery.html                      ← 12 Delivery Models framework
  delivery-models-why.html           ← Why Delivery Models are universal
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

## markets-keywords.json — Search Index

**Purpose:** Enable fast keyword-based navigation to markets (L0) and categories (L1).

**Structure:**
```json
{
  "Real Estate": {
    "keywords": ["real estate", "property", "land", "real-estate"],
    "l1": {
      "Residential": ["residential", "house", "apartment", "home"],
      "Commercial": ["commercial", "office", "retail"],
      "Industrial": ["industrial", "warehouse", "logistics"]
    }
  }
}
```

**How it works:**
1. User types keyword in search bar
2. System matches against:
   - Market name (L0)
   - L0 keywords (broad market terms)
   - L1 keywords (category keywords within market)
3. Based on match level, router navigates directly to L1 or L2 (see Search Rules below)

**How to update keywords (with synonyms):**

1. **Export current keywords to CSV:**
   - File: `~/Desktop/keywords-complete.csv`
   - Columns: `# | MARKET (L0) | TYPE | CATEGORY (L1) | KEYWORDS | SINONIMI`

2. **Edit in Excel/Google Sheets:**
   - Each row = one L0 or one L1 category
   - KEYWORDS: semicolon-separated (`;`)
   - SINONIMI: add 3+ synonyms/variations separated by `|`
   - Examples:
     ```
     real estate        →  property; realty; real-estate
     single-family      →  single family; sf; sfr
     buy-to-rent        →  btr; landlord; rental
     ```

3. **Save CSV, then convert to JSON:**
   - Script: `build-keywords-json.py` (to be created)
   - Input: `keywords-complete.csv`
   - Output: `content/markets-keywords.json`
   - Run: `python3 build-keywords-json.py`

**Maintenance tips:**
- Add synonyms when adding new L1 categories
- Review search queries to discover missing keywords
- Keep keywords lowercase for consistent matching
- Use semicolons (`;`) to separate keywords, pipes (`|`) to separate synonym sets

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

## Project Sections

The project now has three integrated frameworks accessible from the homepage:

### Part A — Market Structure
- **43 Macro Markets** with L0 → L1 → L2 → L3 taxonomy
- **Business Domains** (12 functional areas organizing value flow)
- **Business Systems** (12 monetization mechanisms)
- **Delivery Models** (12 ways to reach customers)

### Part B — Wizard / Analysis
- Search markets by keyword or use auto-complete
- Step-by-step or auto-complete flow modes
- TAM calculation for selected market segments
- Problem selection with 12 archetypes

### Part C — Output Sheet
- Build and export analysis
- Save favorite markets and problems
- CSV export for external tools

---

## Current Status (Feb 2026)

| Component | Status | Coverage |
|---|---|---|
| Homepage & Navigation | ✅ | Complete |
| Business Domains | ✅ | 12/12 domains documented |
| Business Systems | ✅ | 12/12 systems documented |
| Delivery Models | ✅ | 12/12 models documented |
| Markets — Real Estate | ✅ | 57 L3 niches with problems |
| Markets — Healthcare | ⚠️ | L1 only, needs L2-L3 |
| Markets — Other (41) | ❌ | Placeholder L1 only |

**Next steps:**
1. Add L1 → L2 → L3 files for remaining markets
2. Add Problem CSV files and regenerate `problems-by-niche.json`
3. Run `python3 build-problems-json.py` for each new market
