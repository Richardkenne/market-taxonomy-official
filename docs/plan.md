# Plan — Market Taxonomy

## Obiettivo
Tool completo di problem discovery basato su tassonomia dei mercati economici globali, dove ogni livello e dettato da fonti autorevoli.

## Decisioni chiave
- **No framework**: HTML statico + JS vanilla
- **No backend**: tutto client-side via localStorage
- **5 livelli**: L0 → L1 → L2 → L2.1 → L3
- **Source-driven**: fonti autorevoli dettano le categorie a ogni livello
- **5 ± 2 per livello**: convention tassonomica standard (GICS/NAICS/ICB)
- **MECE**: nessuna sovrapposizione, nessun buco
- **Build verticale**: un mercato alla volta (L1+L2+L2.1+L3), non un livello alla volta

## Stato attuale
- L0: completo (43 mercati)
- L1: rewrite in corso (5 fatti manualmente, 38 via agent)
- L2/L2.1/L3: esistono ma con contenuto scadente — da rifare verticalmente per mercato

## Fase corrente
Completamento L1 rewrite, poi primo mercato verticale completo come pilota.
