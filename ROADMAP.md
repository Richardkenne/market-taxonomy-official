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
- [x] Vertical build #01 — Real Estate completato:
  - L1: 6 sub-markets con fonti autorevoli
  - L2: 6 pagine (Residential, Commercial, Industrial, Retail, Land, Specialty)
  - L2.1: 24 segment detail pages create (23 nuove + 1 esistente)
  - L3: 26 niche pages (tutte funzionanti)
  - 0 link rotti nella catena L1→L2→L2.1/L3
- [x] Pulizia: rimossa directory duplicata L2.1/MARKETS/, .DS_Store, aggiunto .gitignore
- [x] Vertical build #02 — Construction & Infrastructure completato:
  - L2: 6 pagine principali + 18 sub-segment (fonti: NAHB, Census Bureau, ENR, McKinsey, Dodge)
  - L2.1: 18 segment detail pages
  - L3: 18 niche-list + 36 niche specifiche = 54 file
  - Link chain L2→L3 e L2→L2.1 funzionanti

## In corso (parzialmente scritti — da completare prossima sessione)
Vertical build #03-#10 iniziato ma interrotto. File parziali presenti:
- Food & Beverage: L2=2, L2.1=8, L3=8 (parziale, mancano 4 L2)
- Agriculture: L2=2, L2.1=10, L3=7 (parziale, mancano 4 L2)
- Energy: L2=6, L2.1=7, L3=0 (L2 ok, L2.1 parziale, L3 mancanti)
- Utilities: L2=5, L2.1=15, L3=0 (L2 ok, L2.1 ok, L3 mancanti)
- Transportation: L2=6, L2.1=6, L3=0 (L2 ok, L2.1 parziale, L3 mancanti)
- Automotive: L2=1, L2.1=0, L3=0 (quasi tutto da fare)
- Manufacturing: L2=8, L2.1=3, L3=0 (L2 ok, resto mancante)
- Consumer Goods: L2=6, L2.1=6, L3=0 (L2 ok, L2.1 parziale, L3 mancanti)

## Prossimi step (prioritizzati)
1. **Completare vertical build #03-#10** (riprendere da dove interrotto)
2. Continuare con #11-#20
3. Convention: 5±2 items per livello, MECE, fonti dettano categorie
4. Stima: ~8-10 sessioni rimanenti per tutti i 43
5. Pulizia file legacy dopo vertical build

## Problemi da risolvere
1. **L2.1 mancanti**: completato per Real Estate — restano 42 mercati
2. **Contenuto L2/L3 scadente**: descrizioni pigre, "Includes" sbagliati, fonti placeholder (nei mercati non ancora vertical-built)
3. **File orfani**: vecchi L2.1 con naming `-l2-1-` in L2/ e L2.1/ da rimuovere dopo vertical build
4. **Coerenza verticale**: L1→L2→L2.1→L3 devono derivare dalle stesse fonti

## Metodo di lavoro
- **Verticale per mercato**, non orizzontale per livello
- Fonti autorevoli dettano ogni livello (source cascade)
- Convention: 5±2 items per livello (MECE)
- L2 page: card click → L3, "Explore details →" → L2.1

## Infrastruttura
- Hosting: statico (nessun server richiesto)
- ai-proxy: Node.js, porta 3001, OpenAI API (opzionale)
