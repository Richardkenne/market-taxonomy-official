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
Read the problems of that sub-segment (L3 page)
        ↓
Find an interesting problem
        ↓
Build a solution / product around it
```

The goal is not to browse — it's to **arrive at the problems page (L3) as fast as possible**.

---

## Project Structure

```
index.html              ← Homepage: search bar, flow mode toggle, AI prompt
app.js                  ← Wizard logic (steps, localStorage, sheet, export)
style.css               ← All styles
i18n.js                 ← Internationalisation loader
content/
  markets-keywords.json ← L0 keyword index for search matching
  taxonomy-data.json    ← L0 → L1 → L2 structure (used for deep routing)
  RULES.md              ← This file
  en.json               ← Translation strings
MARKETS/
  {Market}/
    L1/   ← Market overview page (5-6 sub-markets)
    L2/   ← Sub-market page
    L2.1/ ← Sub-market detail (optional)
    L3/   ← Problems page ← FINAL DESTINATION
```

### Taxonomy levels:
| Level | What it is | Example |
|---|---|---|
| L0 | Macro market (43 total) | Real Estate |
| L1 | Sector within market | Residential |
| L2 | Sub-sector | Single-Family |
| L3 | Problems page — the goal | market-real-estate-residential-single-family-l3.html |

---

## File Naming Convention (critical)

All files must follow this exact pattern:

```
L1:  MARKETS/{Market}/L1/market-{market-slug}.html
L2:  MARKETS/{Market}/L2/market-{market-slug}-{l1-slug}.html
L3:  MARKETS/{Market}/L3/market-{market-slug}-{l1-slug}-{l2-slug}-l3.html
```

Where `slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-')`

Examples:
```
L1:  MARKETS/Real Estate/L1/market-real-estate.html
L2:  MARKETS/Real Estate/L2/market-real-estate-residential.html
L3:  MARKETS/Real Estate/L3/market-real-estate-residential-single-family-l3.html
```

**⚠️ Important:** The L2 names in `taxonomy-data.json` must match the L3 filenames exactly (after slugify). If they don't match, the deep routing will not find the file.

---

## taxonomy-data.json — How to Add a New Market

When you add L2/L3 files for a new market, update `taxonomy-data.json`:

```json
"Healthcare": {
  "source": "WHO; OECD Health Statistics; ...",
  "l1": {
    "Hospitals": [
      "Public Hospitals",
      "Private Clinics",
      "Specialist Centers"
    ],
    "Digital Health": [
      "Telemedicine",
      "Health Apps",
      "Remote Monitoring"
    ]
  }
}
```

The L2 values (e.g. `"Public Hospitals"`) must match the slug in the L3 filename:
`market-healthcare-hospitals-public-hospitals-l3.html`

---

## Rule 1 — Step by Step Mode

**Trigger:** User selects "Step by Step" toggle, types a keyword, and presses Search.

### Behaviour by keyword count:

| Keywords typed | Max results shown | Navigation |
|---|---|---|
| 1 keyword | Up to 3 market matches | Show panel with %, user picks |
| 2 keywords | Up to 2 market matches | Show panel, or navigate direct if gap ≥ 30 |
| 3 keywords | 1 best match | Navigate directly to L1 |

### Matching rules:
- Uses **word boundary matching** — "ai" must appear as a standalone word (NOT inside "airbnb", "haircare", etc.)
- Scoring: exact match (100) > prefix match (70) > word boundary (40)
- Market name match scores higher than keyword match
- Single result or score gap ≥ 30 → navigate directly to L1

### Step panel UI:
- Up to 3 markets, each with a **% match badge** (green, relative to top = 100%)
- Example: `01 Technology 100% →` / `02 Software 72% →`
- Header: "Step 1 — Choose a market" (1 kw) or "Step 1 — Confirm your market" (2+ kw)
- 0 results → "No markets found — try different keywords"

---

## Rule 2 — Auto Complete Mode

**Trigger:** User selects "Auto Complete" toggle (default), types keywords or phrase (max 6 words), presses Search.

### Deep routing (L0 → L1 → L2 → L3):

| Input | System behaviour |
|---|---|
| 1 keyword | Dropdown with up to 5 L0 markets |
| 2+ keywords, L0 match only | Navigate to L1 page |
| 2+ keywords, L0 + L1 matched | Navigate to L2 listing page |
| 2+ keywords, L0+L1 matched, L2 ambiguous | **L2 panel with % match** (max 3), user picks |
| 2+ keywords, L0+L1+L2 all matched | Navigate directly to **L3 problems page** |

### URL construction (automatic):
- Built dynamically via `slugify()` — no manual mapping needed
- Adding new HTML files works automatically as long as naming convention is followed
- Pattern: `MARKETS/{Market}/L3/market-{m}-{l1}-{l2}-l3.html`

### L2 panel (when L2 is ambiguous):
- Header: "Step 2 — Confirm sub-market" with breadcrumb `Market › L1`
- Up to 3 options with % match
- Clicking navigates to the L3 problems page

---

## Rule 3 — Search Bar AI (Prompt)

**Trigger:** User types a natural language sentence in the **Prompt (AI)** field and presses Go or Enter.

### Flow:
1. Sentence sent to Cloudflare Worker AI endpoint
2. AI returns full pre-filled selection: market, problem, target, severity, existing behavior, mechanics, model, GTM
3. Saved to `localStorage` as `ai_prefill`
4. Page reloads → wizard activates with all fields pre-compiled
5. **Auto mode** → skip to summary, optionally auto-add to sheet
6. **Step mode** → open wizard at Step 0 with pre-selections highlighted

### Fallback (AI unavailable):
- Timeout: 12 seconds
- Falls back to local `mapQueryToSelections()` keyword mapping
- Alert shown: "AI not available. Using local mapping."

---

## General Rules

- **Max 6 words** recommended for Auto Complete deep routing
- **Max 3 keywords** for Step by Step mode
- **Flow mode** (step/auto) persisted in `localStorage` across sessions
- All user input is **HTML-escaped** before rendering (XSS protection)
- CSV export safely escapes commas, quotes, and newlines
- Backups: max 4 kept locally, oldest deleted automatically

---

## Current Status (Feb 2026)

| Market | L1 | L2 | L3 | taxonomy-data.json |
|---|---|---|---|---|
| Real Estate | ✅ | ✅ | ✅ | ✅ updated |
| Healthcare | ✅ | ❌ | ❌ | ⚠️ partial |
| All others (41) | ❌ | ❌ | ❌ | ⚠️ generic |

**Next step:** add L1 → L2 → L3 files for each market and update taxonomy-data.json accordingly.
