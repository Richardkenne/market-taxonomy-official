# ROADMAP — Market Taxonomy

## Completato
- [x] Struttura tassonomica L0→L1→L2→L2.1→L3 definita
- [x] 43 market folders con L1, L2, L3
- [x] Homepage + macro-markets grid + flow Part A→B→C
- [x] 12 problemi strutturali in problem-selection.html
- [x] Sistema i18n + numbers centralizzati
- [x] Doc di progetto creati (CLAUDE.md, ROADMAP.md, FLOW.md aggiornato, docs/)
- [x] L1 rewrite — 43/43 completati con fonti autorevoli reali:
  - Manuale (6): Healthcare, Energy, Insurance, Legal, Telecommunications, Real Estate
  - Agent batch 1 (8): Advertising, Aerospace, Agriculture, Automotive, Banking, Capital Markets, Chemicals, Construction
  - Agent batch 2 (8): Consumer Goods, Education, Environmental & Climate, Fashion & Apparel, Financial Services, Food & Beverage, Gaming, Government & Public Sector
  - Agent batch 3 (7): Hardware, HR & Recruiting, Logistics, Manufacturing, Media, Medical Devices, Mining
  - Agent batch 4 (7): Non-profit, Payments, Pharma & Biotech, Professional Services, Religion, Retail, Security & Defense
  - Agent batch 5 (7): Software, Sports & Fitness, Technology, Tourism, Transportation, Utilities, Wholesale & Distribution
- [x] Fix: Real Estate L1 script path corretto (../content/t.js → ../../../content/t.js)

## Prossimi step (prioritizzati)
1. **Vertical build mercato per mercato** (L1→L2→L2.1→L3) — partire da Real Estate (#01)
3. Convention: 5±2 items per livello, MECE, fonti dettano categorie
4. Stima: 3-4 mercati verticali per sessione, ~10-12 sessioni per tutti i 43
5. Pulizia file legacy dopo vertical build

## Problemi da risolvere
1. **L2.1 mancanti**: esiste solo per 4 mercati — servono per tutti i 43
2. **Contenuto L2/L3 scadente**: descrizioni pigre, "Includes" sbagliati, fonti placeholder
3. **Pulizia**: "cartella senza nome", directory duplicata, .DS_Store
4. **Coerenza verticale**: L1→L2→L2.1→L3 devono derivare dalle stesse fonti

## Metodo di lavoro
- **Verticale per mercato**, non orizzontale per livello
- Fonti autorevoli dettano ogni livello (source cascade)
- Convention: 5±2 items per livello (MECE)
- L2 page: card click → L3, "Explore details →" → L2.1

## Infrastruttura
- Hosting: statico (nessun server richiesto)
- ai-proxy: Node.js, porta 3001, OpenAI API (opzionale)
