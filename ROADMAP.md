# ROADMAP — Market Taxonomy

## Completato
- [x] Struttura tassonomica L0→L1→L2→L2.1→L3 definita
- [x] 43 market folders con L1, L2, L3
- [x] Homepage + macro-markets grid + flow Part A→B→C
- [x] L1 riscritti con fonti autorevoli reali (43/43 in corso via agent)
- [x] 12 problemi strutturali in problem-selection.html
- [x] Sistema i18n + numbers centralizzati

## In corso
- L1 rewrite: 5 agent in background stanno riscrivendo i 38 L1 rimanenti

## Problemi da risolvere
1. **L2.1 mancanti**: esiste solo per 4 mercati (Real Estate, Construction, Food & Beverage, Agriculture) — servono per tutti i 43
2. **Contenuto L2/L3 scadente**: descrizioni pigre, "Includes" sbagliati, fonti placeholder
3. **Pulizia**: "cartella senza nome", directory duplicata in Real Estate/L2.1/MARKETS/, .DS_Store
4. **Coerenza verticale**: L1→L2→L2.1→L3 devono derivare dalle stesse fonti per ogni mercato

## Prossimi step (prioritizzati)
1. Completare L1 rewrite (agent in corso)
2. Primo mercato verticale completo: L1→L2→L2.1→L3 con fonti reali a ogni livello
3. Replicare su tutti i 43 mercati (2-3 per sessione)
4. Pulizia file legacy
5. Verifica link e consistenza globale

## Metodo di lavoro
- **Verticale per mercato**, non orizzontale per livello
- Fonti autorevoli dettano ogni livello
- Convention: 5±2 items per livello (MECE)
- L2 page: card click → L3, "Explore details →" → L2.1

## Infrastruttura
- Hosting: statico (nessun server richiesto)
- ai-proxy: Node.js, porta 3001, OpenAI API (opzionale)
