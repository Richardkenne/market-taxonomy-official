# Architecture — Market Taxonomy

```
                        ┌──────────────┐
                        │  index.html  │
                        └──────┬───────┘
                               │
                 ┌─────────────┼─────────────┐
                 │             │             │
                 ▼             ▼             ▼
          ┌────────────┐ ┌──────────┐ ┌──────────────┐
          │macro-markets│ │numbers   │ │support pages │
          │   (L0)      │ │.html     │ │(FAQ, etc.)   │
          └──────┬──────┘ └────┬─────┘ └──────────────┘
                 │             │
                 ▼             │
          ┌────────────┐      │
          │ MARKETS/   │      │
          │  {name}/   │      │
          │   L1/ ─────┤      │
          │   L2/ ─────┤      │
          │   L3/ ─────┤      │
          └──────┬─────┘      │
                 │             │
                 ▼             ▼
          ┌─────────────────────┐
          │ problem-selection   │
          │     .html           │
          └──────────┬──────────┘
                     │
                     ▼
          ┌─────────────────────┐
          │   output-sheet      │
          │     .html           │
          └─────────────────────┘


State: localStorage
  - selected_market
  - selected_l3
  - suggested_primary / suggested_secondary
  - problem_back_url
  - primary_problem / secondary_problem

Shared JS:
  - i18n.js ──── content/t.js (translations)
  - app.js
  - content/taxonomy-numbers.js (L0/L1/L2/L3 counts)

Styling:
  - style.css (single file, CSS vars)

Optional:
  - ai-proxy.mjs ── Node.js :3001 ── OpenAI API
```
