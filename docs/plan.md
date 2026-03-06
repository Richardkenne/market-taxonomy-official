# Plan — Market Taxonomy

## Obiettivo
Tool completo di problem discovery basato su tassonomia dei mercati economici globali.

## Decisioni chiave
- **No framework**: HTML statico + JS vanilla per semplicita e velocita
- **No backend**: tutto client-side via localStorage (tranne ai-proxy opzionale)
- **i18n**: supporto multilingua integrato via data attributes
- **Tassonomia a 4 livelli**: L0 → L1 → L2 → L3 (macro → niche)
- **12 problemi strutturali**: categorizzazione fissa dei problemi monetizzabili
- **Single source of truth per numeri**: content/taxonomy-numbers.js

## Stato attuale
Il tool e funzionalmente completo nel flow A→B→C. Tutti i 43 mercati hanno pagine L1, L2, L3. Rimane da fare pulizia file legacy e verifica consistenza link.

## Fase corrente
Manutenzione e pulizia — il core e costruito.
