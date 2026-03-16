# ROADMAP — Market Taxonomy

## Completato

### Struttura base
- [x] Struttura tassonomica L0→L1→L2→L2.1→L3 definita
- [x] 43 market folders con L1, L2, L3
- [x] Homepage + macro-markets grid + flow Part A→B→C
- [x] 12 problemi strutturali in problem-selection.html
- [x] Sistema i18n + numbers centralizzati
- [x] Doc di progetto creati (CLAUDE.md, ROADMAP.md, FLOW.md aggiornato, docs/)

### L1 Rewrite (43/43)
- [x] Manuale (6): Healthcare, Energy, Insurance, Legal, Telecommunications, Real Estate
- [x] Agent batch 1-5: tutti i 43 mercati completati con fonti autorevoli reali

### Vertical Build (43/43) — COMPLETATO 2026-03-16
Tutti i 43 mercati hanno L2, L2.1, L3 con fonti autorevoli, descrizioni reali, market sizes.

**Totale file**: L1: 43 | L2: 279 | L2.1: 920 | L3: 951 = **2.193 pagine HTML**

| # | Mercato | L2 | L2.1 | L3 |
|---|---------|-----|------|-----|
| 01 | Real Estate | 7 | 36 | 30 |
| 02 | Construction & Infrastructure | 24 | 18 | 54 |
| 03 | Food & Beverage | 6 | 22 | 22 |
| 04 | Agriculture | 6 | 22 | 22 |
| 05 | Energy | 6 | 25 | 25 |
| 06 | Utilities | 5 | 20 | 20 |
| 07 | Transportation & Mobility | 6 | 24 | 24 |
| 08 | Automotive | 6 | 18 | 18 |
| 09 | Manufacturing | 8 | 24 | 24 |
| 10 | Consumer Goods | 6 | 27 | 27 |
| 11 | Retail & E-commerce | 6 | 19 | 19 |
| 12 | Wholesale & Distribution | 6 | 20 | 20 |
| 13 | Healthcare | 6 | 19 | 19 |
| 14 | Pharmaceuticals & Biotech | 6 | 23 | 23 |
| 15 | Medical Devices | 6 | 23 | 23 |
| 16 | Financial Services | 6 | 21 | 21 |
| 17 | Banking | 6 | 18 | 18 |
| 18 | Insurance | 6 | 18 | 18 |
| 19 | Payments | 6 | 18 | 18 |
| 20 | Capital Markets | 6 | 18 | 18 |
| 21 | Technology | 7 | 23 | 23 |
| 22 | Software | 6 | 18 | 18 |
| 23 | Hardware | 6 | 18 | 18 |
| 24 | Telecommunications | 6 | 18 | 18 |
| 25 | Media & Entertainment | 6 | 18 | 18 |
| 26 | Gaming | 6 | 18 | 18 |
| 27 | Advertising & Marketing | 6 | 19 | 19 |
| 28 | Education | 6 | 18 | 18 |
| 29 | Professional Services | 6 | 18 | 18 |
| 30 | Legal | 6 | 18 | 18 |
| 31 | HR & Recruiting | 6 | 18 | 18 |
| 32 | Security & Defense | 6 | 18 | 18 |
| 33 | Government & Public Sector | 6 | 18 | 18 |
| 34 | Tourism & Hospitality | 6 | 18 | 18 |
| 35 | Fashion & Apparel | 6 | 25 | 25 |
| 36 | Logistics & Supply Chain | 6 | 25 | 25 |
| 37 | Chemicals & Materials | 6 | 30 | 30 |
| 38 | Mining | 6 | 23 | 23 |
| 39 | Aerospace | 6 | 29 | 29 |
| 40 | Sports & Fitness | 6 | 24 | 24 |
| 41 | Non-profit & Social | 6 | 25 | 25 |
| 42 | Religion & Faith | 6 | 24 | 24 |
| 43 | Environmental & Climate | 6 | 25 | 25 |

### Fix e pulizia (2026-03-16)
- [x] Real Estate: rimossi 5 L2 orfani + 31 L2.1 orfani (naming `-l2-1-`) + dir duplicata L2.1/MARKETS/
- [x] Construction: fixati 10 L2.1 con path `../../../../` → `../../../`
- [x] Real Estate: fixati 12 L2.1 con path `../../../../` → `../../../`
- [x] Automotive + Construction: 72 L3 riscritti con selectNiche() (erano template sbagliato)
- [x] Consumer Goods + Wholesale: 12 L2 aggiornati con "Explore segment details →"
- [x] 14 mercati: L1 aggiornati per matchare i filename L2 reali (84 link riparati)

### Check globale finale (2026-03-16): 0 errori
- L1→L2 link rotti: 0
- L2→L3 link rotti: 0
- L2→L2.1 link rotti: 0
- L3 senza selectNiche: 0
- Script path sbagliati: 0
- Home link mancanti: 0

---

## Idea futura: Revenue Layer (validazione numerica)

Aggiungere dati di MRR/revenue reale a ogni nicchia della tassonomia. Trasforma il tool da "mappa dei problemi" a **"mappa delle opportunità con prezzo attaccato"**.

**Cosa diventa**: l'unico tool che dice "in questa nicchia, le startup fanno X di MRR, con questo modello, a questo prezzo". Struttura tassonomica (unica) + numeri reali = prodotto monetizzabile.

**Fonti dati identificate**:
| Fonte | Cosa ha | Costo |
|-------|---------|-------|
| TrustMRR API (trustmrr.com) | MRR verificato via Stripe, ~100+ startup | Free API key |
| Acquire.com | Startup in vendita con revenue + multipli | Free browse |
| IndieHackers | Revenue self-reported, ~5.000+ prodotti | Free |
| OpenStartup.dev | Dashboard revenue pubbliche, ~200+ | Free |
| Starter Story | Case study con revenue, ~4.000+ business | $29/mo |

**Quando farlo**: DOPO che Cafepedia genera revenue. Non prima.

---

## Prossimi step (prioritizzati)
1. Verificare consistenza globale i18n
2. Pulizia file legacy residui (se presenti)
3. Revenue Layer (quando Cafepedia è monetizzato)

## Metodo di lavoro
- **Verticale per mercato**, non orizzontale per livello
- Fonti autorevoli dettano ogni livello (source cascade)
- Convention: 5±2 items per livello (MECE)
- L2 page: card click → L3, "Explore details →" → L2.1

## Infrastruttura
- Hosting: statico (nessun server richiesto)
- ai-proxy: Node.js, porta 3001, OpenAI API (opzionale)
