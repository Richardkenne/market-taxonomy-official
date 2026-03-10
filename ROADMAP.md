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

## In corso (parzialmente scritti — da completare)
Vertical build #03-#10 iniziato. Batch A completato (2026-03-10):
- [x] Energy: 6 L2, 25 L2.1, 25 L3 (fonti: IEA, EIA, IRENA, BloombergNEF, Wood Mackenzie)
- [x] Utilities: 5 L2, 20 L2.1, 20 L3 (fonti: EIA, EPA, AWWA, FERC, NARUC)
- [x] Consumer Goods: 6 L2, 27 L2.1, 27 L3 (fonti: Euromonitor, NielsenIQ, Statista, IDC)
- 223 file duplicati/orfani eliminati, 144 file creati/modificati

Batch B completato (2026-03-10):
- [x] Manufacturing: 5 L2, 24 L2.1, 24 L3 (fonti: UNIDO, NAM, McKinsey, Deloitte, IPC, SEMI)
- [x] Transportation: 6 L2, 24 L2.1, 24 L3 (fonti: IATA, IRF, USDOT, McKinsey Mobility)
- [x] Automotive: 6 L2, 18 L2.1, 18 L3 (fonti: OICA, S&P Global Mobility, NADA, SAE, J.D. Power)

Batch C completato (2026-03-10):
- [x] Food & Beverage: 6 L2, 22 L2.1, 22 L3 (fonti: Euromonitor, USDA ERS, FDA, FAO, Mintel)
- [x] Agriculture: 6 L2, 22 L2.1, 22 L3 (fonti: USDA, FAO, AgFunder, CropLife, IFA)
- [x] Retail & E-commerce: 6 L2, 19 L2.1, 19 L3 (fonti: NRF, Euromonitor, eMarketer)

Batch D completato (2026-03-10):
- [x] Wholesale & Distribution: 6 L2, 20 L2.1, 20 L3 (fonti: NAW, MDM, IBISWorld, Census)
- [x] Healthcare: 6 L2, 19 L2.1, 19 L3 (fonti: CMS, WHO, AHA, IQVIA, McKinsey)
- [x] Pharma & Biotech: 6 L2, 23 L2.1, 23 L3 (fonti: FDA, EMA, IQVIA, Evaluate Pharma)

Batch E completato (2026-03-10):
- [x] Medical Devices: 6 L2, 23 L2.1, 23 L3 (fonti: FDA CDRH, EvaluateMedTech, AdvaMed)
- [x] Financial Services: 6 L2, 21 L2.1, 21 L3 (fonti: BIS, IMF, McKinsey, BCG)
- [x] Banking: 6 L2, 18 L2.1, 18 L3 (fonti: FDIC, OCC, Federal Reserve, BIS Basel)

Ancora da completare (26 mercati, #18-#43):
- Insurance, Payments, Capital Markets
- Technology, Software, Hardware, Telecommunications
- Media & Entertainment, Gaming, Advertising & Marketing
- Education, Professional Services, Legal, HR & Recruiting
- Security & Defense, Government & Public Sector
- Tourism & Hospitality, Fashion & Apparel
- Logistics & Supply Chain, Chemicals & Materials, Mining
- Aerospace, Sports & Fitness, Non-profit & Social, Religion & Faith, Environmental & Climate

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
