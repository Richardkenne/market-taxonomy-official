# Market Taxonomy — Problem Discovery Tool

## What it is
Static HTML/JS tool for navigating economic markets taxonomically and selecting structural problems to solve. No backend — state via localStorage.

## Core Principle
**Authoritative sources dictate the taxonomy.** Every level (L1→L2→L2.1→L3) is derived from recognized classification standards and market research — not invented. Sources become more granular at each level.

## Architecture — 5 Levels
```
L0 — 43 Macro Markets         → macro-markets.html
L1 — Sub-markets (5-6 per L0) → MARKETS/{name}/L1/
L2 — Segments (4-5 per L1)    → MARKETS/{name}/L2/
L2.1 — Segment Detail         → MARKETS/{name}/L2.1/  (accessed from L2 via "Explore segment details →")
L3 — Niches (3-5 per L2)      → MARKETS/{name}/L3/    (accessed from L2 via card click)
```

## Navigation Flow
```
L1 → click sub-market → L2 page (lists segments as cards)
  L2 card click → L3 (niches → leads to Problem Selection)
  L2 "Explore segment details →" link → L2.1 (segment deep-dive)
```

## Taxonomy Conventions
- **Items per level**: 5 +/- 2 (follows GICS/NAICS/ICB standards + Miller's Law)
- **MECE**: Mutually Exclusive, Collectively Exhaustive at every level
- **Source cascade**: L1 sources (industry-level) → L2 sources (segment-level) → L3 sources (niche-level)
- **No placeholders**: every source must have a real URL, never href="#"
- **No lazy descriptions**: every sub-market/segment must have a real description, never "{Name} sub-markets and operators"

## Flow (Part A → B → C)
```
Part A: Market Navigation (L0 → L1 → L2 → L2.1/L3)
Part B: Problem Selection (12 structural problems)
Part C: Output Sheet (summary of selections)
```

## Stack
- HTML statico + CSS (style.css) + JS vanilla
- i18n: i18n.js + content/t.js
- Numbers centralizzati: content/taxonomy-numbers.js
- AI proxy (opzionale): ai-proxy.mjs (OpenAI)

## Key Files
- `FLOW.md` — documentazione completa del flusso A→B→C
- `index.html` — homepage
- `macro-markets.html` — L0 grid (43 mercati)
- `numbers.html` — overview scala tassonomia
- `problem-selection.html` — 12 problemi strutturali
- `output-sheet.html` — riepilogo selezioni
- `content/taxonomy-numbers.js` — single source of truth per i conteggi

## Working Method
Build vertically per market (not horizontally per level):
1. Research authoritative sources for the market
2. Sources dictate L1 categories
3. L1 categories dictate L2 segments
4. Each L2 gets a L2.1 detail page + 3-5 L3 niches
5. Verify all links work in chain

## File Counts (actual — 2026-03-16)
- 43 market folders, 43 L1 pages
- ~260 L2 pages, ~909 L2.1 pages, ~889 L3 pages
- ~2,060 total HTML pages, ~2,800 selectable niches
- All 43/43 markets fully built with authoritative sources

# currentDate
Today's date is 2026-03-16.
