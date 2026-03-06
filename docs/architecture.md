# Architecture — Market Taxonomy

## Navigation Structure (5 Levels)
```
┌──────────────┐
│  index.html  │
└──────┬───────┘
       │
       ▼
┌──────────────────┐
│ macro-markets.html│  ← L0: 43 Macro Markets
└──────┬───────────┘
       │
       ▼
┌──────────────────┐
│ MARKETS/{name}/  │
│   L1/            │  ← L1: 5-6 Sub-markets per market
│     │            │       Sources: industry classification (GICS, NAICS, ISIC)
│     ▼            │
│   L2/            │  ← L2: 4-5 Segments per sub-market
│     │            │       Sources: segment-level research
│     ├──→ L2.1/   │  ← L2.1: Segment detail (via "Explore segment details →")
│     │            │
│     ▼            │
│   L3/            │  ← L3: 3-5 Niches per segment (via card click)
└──────┬───────────┘       Sources: niche-level data
       │
       ▼
┌─────────────────────┐
│ problem-selection    │  ← Part B: 12 structural problems
│     .html            │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│   output-sheet       │  ← Part C: Summary
│     .html            │
└─────────────────────┘
```

## L2 Page Navigation
```
┌─────────────────────────────────┐
│  L2 Page (e.g. Residential)     │
│                                 │
│  ┌─────────────────────────┐   │
│  │ Segment Card (e.g.      │───────→ L3 (niches)
│  │   Single-Family)        │   │
│  └─────────────────────────┘   │
│  Explore segment details → ────────→ L2.1 (detail)
│                                 │
│  ┌─────────────────────────┐   │
│  │ Segment Card (e.g.      │───────→ L3 (niches)
│  │   Multi-Family)         │   │
│  └─────────────────────────┘   │
│  Explore segment details → ────────→ L2.1 (detail)
│                                 │
└─────────────────────────────────┘
```

## Source Cascade
```
L1: WHO, GICS, NAICS, IEA...        (industry-level standards)
  └→ L2: CBRE, JLL, Newzoo...       (segment-level market research)
       └→ L3: CMS codes, AMA...     (niche-level operational data)
```

## State Management
```
localStorage:
  - selected_market
  - selected_l3
  - suggested_primary / suggested_secondary
  - problem_back_url
  - primary_problem / secondary_problem
```

## Shared Assets
```
style.css                      ← single CSS file, CSS vars
i18n.js + content/t.js         ← translations
content/taxonomy-numbers.js    ← L0/L1/L2/L3 counts
content/footer-template.html   ← shared footer
ai-proxy.mjs                   ← optional OpenAI proxy (:3001)
```

## Taxonomy Convention
- 5 ± 2 items per level
- MECE at every level
- Sources dictate categories (not invented)
- No href="#" placeholders
- No "{Name} sub-markets and operators" descriptions
