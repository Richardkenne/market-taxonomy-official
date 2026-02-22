# Level 1 Page — Template

Level 1 is the market overview. It lists the main categories (L1) within a macro market (L0). Each category links to an L2 page.

---

## Visual Layout

```
[Home]  ← Back to All Markets

        ● Part A — Level 1

        [Market Name]

        [One sentence on how this market is structured.]

────────────────────────────────────────

        ┌─────────────────────────────────────────────────────┐
        │ [Sources explanation — one sentence.]              │
        │ How market categories are recognized →             │
        └─────────────────────────────────────────────────────┘

        SOURCES
        → [Source 1]
        → [Source 2]
        → [Source 3]
        → [Source 4]
        → [Source 5]

────────────────────────────────────────

        ┃ [Category explanation — one sentence on how/why
        ┃ this market is divided this way.]

        SELECT A CATEGORY TO CONTINUE

        01  [Category Name]                         ›
            [Description]

        02  [Category Name]                         ›
            [Description]

        …

────────────────────────────────────────

        ┌─────────────────────────────────────┐
        │ HOW TO CHOOSE A CATEGORY            │
        │ [Actionable guidance toward L2.]    │
        └─────────────────────────────────────┘
```

---

## Parts

| Part | Element | Notes |
|------|---------|-------|
| 1 | Title badge | `Part A — Level 1` |
| 2 | Page title | Market name |
| 3 | Subtitle | One sentence on market structure |
| 4 | Sources box | Bordered box + link "How market categories are recognized →" |
| 5 | Sources | Vertical list, 4–6 links |
| 6 | Category callout | Green left border |
| 7 | CTA label | "Select a category to continue" |
| 8 | Category list | Name + description + arrow → links to L2 page |
| 9 | Guidance box | Bridge toward L2 |

---

## Category Links

Each category card links to the corresponding L2 file:

```html
<a href="../L2/market-{market-slug}-{l1-slug}.html" class="market-l1-card">
    <div>
        <h3>[Category Name]</h3>
        <p>[Description]</p>
    </div>
    <svg ...arrow...</svg>
</a>
```

---

## File Naming

```
MARKETS/{Market}/L1/market-{market-slug}.html
```

Example:
```
MARKETS/Real Estate/L1/market-real-estate.html
```

---

## After Creating the L1 Page

Update these files:
1. `content/taxonomy-data.json` — add market with L1 → L2 structure
2. `content/markets-keywords.json` — add L0 keywords for search
3. `index.html` → `MARKET_HREFS` object — add `"Market Name": "MARKETS/.../L1/market-xxx.html"`
