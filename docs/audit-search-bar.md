# Audit Search Bar — Market Taxonomy

Deep test della search bar homepage. Sessione 50, 12 marzo 2026.

---

## Come funziona la search

- Legge `content/markets-keywords.json` → 43 mercati con keywords L0, L1, L3 (per alcuni)
- Match per: nome mercato → keywords L0 → keywords L1 → tokenizzazione parole
- Se 0 match → fallback forzato via `mapQueryToSelections()` (mai "nessun risultato")
- Cross-category: cerca anche in Business Domains (12), Business Systems (12), Delivery Models (12)
- Max 8 risultati, scoring multilivello

---

## Cosa funziona

- Query dirette ("real estate", "coffee", "saas", "stripe") → match corretti
- Cross-category search → bonus results utili (es. "stripe" matcha Payments + "API-First" + "Transaction Fee")
- Scoring multilivello: nome esatto (100) > keyword esatto (90) > L1 esatto (85) > partial (60-70) > token (10-30)

### Query testate che funzionano

| Query | Risultato | Perché |
|---|---|---|
| `real estate` | Real Estate | Nome esatto |
| `coffee` | Food & Beverage | Keyword L1 "coffee" in Beverages |
| `saas` | Software + cross-match Subscription + SaaS/Cloud | Keyword multiplo |
| `stripe` | Payments + API-First + Transaction Fee | Cross-category |
| `ai` | Technology/Software | Keywords match |
| `rental` | Real Estate | Keywords "rent", "rental" |
| `delivery` | Logistics + On-demand/Last-mile | Multi-match |
| `fitness` | Sports & Fitness | Nome match |
| `church` | Religion & Faith | Keywords match |

---

## Problemi critici trovati

### 1. Fallback silenzioso ad "Advertising & Marketing"

```javascript
const fallbackName = selections.market || 'Advertising & Marketing';
```

Se la query non matcha niente (es. "dog walking", "wedding planner", "laundry service"), il sistema manda l'utente ad **Advertising & Marketing** — senza dire "non trovato". L'utente pensa che il sistema abbia capito, ma lo sta mandando nel posto sbagliato.

**Fix**: mostrare "No match found" e suggerire mercati simili.

### 2. Zero fuzzy/typo tolerance

La search usa `string.includes()` puro:
- `"coffe"` (typo) → 0 risultati → fallback sbagliato
- `"restourant"` → 0 risultati → fallback
- `"helth"` → 0 risultati → fallback

Nessuna tolleranza errori.

**Fix**: aggiungere Levenshtein distance o usare Fuse.js (~5KB) per fuzzy matching.

### 3. 54 pagine L3 con contenuto template (3 mercati)

Tourism & Hospitality (18), Government & Public Sector (18), Security & Defense (18) hanno nicchie generate da template pigro. Ogni nicchia ha 3 sotto-nicchie identiche:
```
[Nome] AI-Powered        → "AI tools enhancing [Nome] operations"
[Nome] Platform           → "End-to-end platform for managing [Nome]"
[Nome] Analytics          → "Data analytics and performance for [Nome]"
```

Queste descrizioni non dicono niente. Confronto:

| Software (BUONO) | Tourism (TEMPLATE) |
|---|---|
| "Enterprise AI Search & Knowledge — AI-powered platforms that index enterprise data (docs, Slack, email, wikis) and provide natural language search" | "AI-Powered Reservation & Guest CRM — AI tools enhancing Reservation & Guest CRM operations and customer experience" |

**Fix**: riscrivere con nicchie specifiche come Software e Food & Beverage.

### 4. 292 pagine L3 senza `suggested_primary`

Su 1.012 L3 totali, 292 non settano il problema suggerito. Quando l'utente clicca una nicchia e va a Problem Selection, arriva senza suggerimento pre-selezionato.

### 5. Profondità keywords disuguale

- **Real Estate**: 70+ keywords L0, 15+ per ogni L1, 8 per ogni L3 — eccellente
- **Molti altri mercati**: 10-20 keywords totali — debole

Query specifiche per mercati con poche keywords falliscono e vanno a fallback.

### 6. Mercati mancanti

43 mercati non coprono:
- **Pets/Animals** (~$320B+)
- **Events/Weddings** (~$1T+)
- **Beauty/Wellness** (separato da Fashion?)
- **Childcare/Parenting**
- **Home Services** (plumbing, cleaning, etc.)

Se qualcuno cerca "pet grooming" o "wedding planner" → fallback silenzioso.

### 7. Output Sheet (Part C) è placeholder vuoto

L'utente completa tutto il flow L0 → L1 → L2 → L3 → Problem Selection e alla fine vede:
```
"Part C — To be defined"
"This is where the output sheet will be generated."
```

Dead end. Tutto il percorso porta a niente.

### 8. Numeri dichiarati vs reali

| Metrica | Dichiarato (taxonomy-numbers.js) | Reale (file contati) |
|---|---|---|
| L0 Macro Markets | 43 | 43 ✅ |
| L1 Sub-markets | 230+ | 44 pagine |
| L2 Segments | 4,370+ | 330 pagine |
| L3 Niches | 50,000+ | 1.043 pagine |

I numeri dichiarati sono 10-50x i file reali.

---

## Numeri struttura attuale

| Livello | Pagine | Status |
|---|---|---|
| L0 | 43 macro markets | ✅ Tutti presenti |
| L1 | 44 pagine | ✅ OK |
| L2 | 330 pagine | ✅ OK |
| L2.1 | 1.047 pagine | ✅ Tutti i 43 mercati coperti |
| L3 | 1.043 pagine | ⚠️ 54 template, 292 senza suggested_primary |
| **Totale** | **2.447 HTML** | |

---

## Priorità fix (se si riprende il progetto)

1. Fix fallback search → messaggio "non trovato" + suggerimenti
2. Aggiungere fuzzy matching (Fuse.js, ~5KB)
3. Completare Part C (Output Sheet) con contenuto reale
4. Riscrivere 54 L3 template (Tourism, Government, Security)
5. Equalizzare keywords per mercato
6. Aggiungere mercati mancanti (Pets, Events, Beauty, Home Services)
7. Correggere numeri in taxonomy-numbers.js o chiarire che sono target
8. Aggiungere `suggested_primary` alle 292 L3 mancanti
