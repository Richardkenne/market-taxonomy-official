# Project Context — Market Taxonomy

## Cosa
Tool di navigazione tassonomica dei mercati economici mondiali. Parte del sistema AI-OS (research). Permette di esplorare 43 macro-mercati, scendere fino al livello niche (L3), selezionare un problema strutturale e generare un output sheet con il contesto completo.

## Perche
Strumento di problem discovery per identificare opportunita di business in mercati specifici. L'utente naviga la tassonomia, sceglie un segmento, seleziona il problema dominante, e ottiene un brief strutturato.

## Come funziona
1. **Part A** — Navigazione: L0 (43 Macro Markets) → L1 (230+ Sub-markets) → L2 (4,370+ Segments) → L3 (50,000+ Niches)
2. **Part B** — Selezione problema: 12 problemi strutturali (Time/Speed, Cost/Leakage, Coordination, etc.)
3. **Part C** — Output sheet: riepilogo mercato + problema selezionato

## Stack
HTML statico + CSS + JS vanilla. Nessun framework, nessun build step. i18n integrato. Stato via localStorage. AI proxy opzionale (OpenAI via ai-proxy.mjs).

## Scala
- 43 cartelle mercato in MARKETS/
- 43 pagine L1, 476 pagine L2, 1,417 pagine L3
- ~1,401 pagine L2.1 (formato legacy)
- 14 pagine root (index, macro-markets, numbers, problem-selection, output-sheet, etc.)
