# Market Taxonomy — Problem Discovery Tool

## What it is
Static HTML/JS tool for navigating economic markets taxonomically and selecting structural problems to solve. No backend — state via localStorage.

## Architecture
```
Flow: Part A (Market Navigation) → Part B (Problem Selection) → Part C (Output Sheet)

Levels:
  L0 — 43 Macro Markets       → macro-markets.html
  L1 — 230+ Sub-markets       → MARKETS/{name}/L1/
  L2 — 4,370+ Segments        → MARKETS/{name}/L2/
  L3 — 50,000+ Niches         → MARKETS/{name}/L3/
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
- `how-to-define-problems.html` — guida problemi monetizzabili
- `global-investors.html` — fonti autorevoli
- `authoritative-sources-framework.html` — framework fonti
- `content/taxonomy-numbers.js` — single source of truth per i conteggi
- `content/footer-template.html` — footer condiviso

## File Counts (actual)
- 43 market folders in MARKETS/
- 43 L1 pages (tutti i mercati)
- 44 L2 folders, 476 L2 pages
- 44 L3 folders, 1,417 L3 pages
- ~1,401 L2.1 pages (formato legacy, solo Real Estate, Construction, Food & Beverage, Agriculture)

## Conventions
- Naming pagine: `market-{market-name}-{segment}.html`
- L3 pages end with `-l3.html`
- i18n keys: `data-t="pages.{page}.text.{id}"`
- Stato tra pagine: localStorage (selected_market, primary_problem, etc.)

## Known Issues
- "cartella senza nome" contiene vecchie versioni di index.html e macro-markets.html (da rimuovere)
- L2.1 folder è un formato legacy presente in 4 mercati — da valutare migrazione o pulizia
- Duplicati nested in `MARKETS/Real Estate/L2.1/MARKETS/` (directory copiata per errore)
