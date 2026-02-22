# Level 2 Page — Template

Level 2 shows the segments within a category (L1). Each segment links to an L3 sub-segment selector page.

---

## Visual Layout

```
[Home]  ← Back to [L1 Category Name]

        ● Part A — Level 2

        [Market Name] — [L1 Category]

        [One sentence defining this category.]

────────────────────────────────────────

        [Sources explanation — one sentence.]

        SOURCES
        ┌──────────────────┬──────────────────┐
        │ → [Source 1]     │ → [Source 2]     │
        │ → [Source 3]     │ → [Source 4]     │
        └──────────────────┴──────────────────┘

────────────────────────────────────────

        ┃ [Segmentation explanation — one sentence.]

        01  [Segment Name]                   ›
            [Description]

        02  [Segment Name]                   ›
            [Description]

        …

────────────────────────────────────────

        ┌─────────────────────────────────────┐
        │ HOW TO CHOOSE A SEGMENT             │
        │ [Actionable guidance toward L3.]    │
        └─────────────────────────────────────┘
```

---

## Parts

| Part | Element | Notes |
|------|---------|-------|
| 1 | Title badge | `Part A — Level 2` |
| 2 | Page title | `[Market] — [L1 Category]` |
| 3 | Definition | One sentence, max 2 lines |
| 4 | Sources explanation | One sentence |
| 5 | Sources | 2-column grid, 4–6 links |
| 6 | Segmentation callout | Green left border |
| 7 | Segment list | Name + description + arrow → links to L3 page |
| 8 | Guidance box | Bridge toward L3 |

---

## Segment Links

Each segment card links to the corresponding L3 file:

```html
<a href="../L3/market-{market-slug}-{l1-slug}-{l2-slug}-l3.html" class="market-l2-card">
    <div>
        <h3>[Segment Name]</h3>
        <p>[Description]</p>
    </div>
    <svg ...arrow...</svg>
</a>
```

The L3 filename slug must match exactly:
`slugify(segmentName)` = `name.toLowerCase().replace(/[^a-z0-9]+/g, '-')`

---

## File Naming

```
MARKETS/{Market}/L2/market-{market-slug}-{l1-slug}.html
```

Example:
```
MARKETS/Real Estate/L2/market-real-estate-residential.html
```
