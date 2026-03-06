# Project Context — Market Taxonomy

## Cosa
Tool di navigazione tassonomica dei mercati economici mondiali. Parte del sistema AI-OS (research). Permette di esplorare 43 macro-mercati fino al livello niche, selezionare un problema strutturale, e generare un output sheet.

## Principio fondamentale
Le fonti autorevoli dettano la tassonomia. Ogni livello (L1→L2→L2.1→L3) deriva da standard di classificazione riconosciuti e ricerche di mercato — niente e inventato.

## Struttura a 5 livelli
```
L0: 43 Macro Markets (macro-markets.html)
L1: 5-6 Sub-markets per market (fonti: GICS, NAICS, ISIC, industry bodies)
L2: 4-5 Segments per sub-market (fonti: segment research)
L2.1: Detail page per segment (via "Explore segment details →")
L3: 3-5 Niches per segment (fonti: niche operational data)
```

## Come funziona
1. Part A — Navigazione: L0 → L1 → L2 → L2.1/L3
2. Part B — Selezione problema: 12 problemi strutturali
3. Part C — Output sheet: riepilogo mercato + problema

## Convention
- 5 ± 2 items per livello (standard GICS/NAICS/ICB)
- MECE (Mutually Exclusive, Collectively Exhaustive)
- Fonti reali con URL funzionanti (mai href="#")
- Descrizioni reali (mai "{Name} sub-markets and operators")
- Build verticale per mercato, non orizzontale per livello

## Stack
HTML statico + CSS + JS vanilla. Nessun framework. i18n integrato. Stato via localStorage.
