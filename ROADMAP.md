# ROADMAP — Market Taxonomy

## Completato
- [x] Struttura tassonomica L0→L1→L2→L3 per tutti i 43 mercati
- [x] 43 L1 pages, 476 L2 pages, 1,417 L3 pages generate
- [x] Homepage (index.html) + macro-markets grid
- [x] Flow completo Part A→B→C (navigation → problem selection → output sheet)
- [x] 12 problemi strutturali definiti in problem-selection.html
- [x] Numbers page con conteggi centralizzati (taxonomy-numbers.js)
- [x] Sistema i18n
- [x] AI proxy (ai-proxy.mjs)
- [x] Pagine supporto: global-investors, authoritative-sources, how-to-define-problems, FAQ, how-tam-is-calculated

## In corso
- Nessun task attivo

## Problemi da risolvere
1. **Pulizia file legacy**: "cartella senza nome" con vecchi index.html e macro-markets.html
2. **L2.1 folder legacy**: 1,401 pagine in formato L2.1 (Real Estate, Construction, Food & Beverage, Agriculture) — relazione con L2/L3 da chiarire
3. **Directory duplicata**: `MARKETS/Real Estate/L2.1/MARKETS/` contiene una copia errata
4. **DS_Store files**: vari .DS_Store nei folder MARKETS

## Prossimi step (prioritizzati)
1. Pulizia: rimuovere "cartella senza nome", directory duplicata, .DS_Store
2. Chiarire ruolo L2.1 vs L2/L3 — decidere se migrare o eliminare
3. Verifica link interni tra livelli (L1→L2→L3 tutti collegati?)
4. Verifica consistenza i18n su tutte le pagine
5. Testing navigazione completa su tutti i 43 mercati

## Infrastruttura
- **Hosting**: statico (nessun server richiesto, tranne ai-proxy opzionale)
- **ai-proxy**: Node.js, porta 3001, usa OpenAI API
- **Deploy**: non configurato (file statici)
