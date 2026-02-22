# Level 3 Page — Template

Level 3 is the sub-segment selector. The user has navigated L0→L1→L2 and now picks a specific sub-segment. Clicking a sub-segment saves it to localStorage and routes to `numbers.html`.

---

## Visual Layout

```
[Home]  ← Back to [L2 Segment Name]

        ● Part A — Level 3

        [L2 Segment Name] — Sub-segments

        Select a sub-segment to see specific problems.

────────────────────────────────────────

        SELECT A SUB-SEGMENT

        [Sub-segment Name]                          ›
        [One-line description]

        [Sub-segment Name]                          ›
        [One-line description]

        …

────────────────────────────────────────

        ┌─────────────────────────────────────┐
        │ HOW TO CHOOSE                       │
        │ [One sentence of guidance.]         │
        └─────────────────────────────────────┘
```

---

## Parts

| Part | Element | Notes |
|------|---------|-------|
| 1 | Title badge | `Part A — Level 3` |
| 2 | Page title | `[L2 Name] — Sub-segments` |
| 3 | Subtitle | "Select a sub-segment..." |
| 4 | Sub-segment cards | Name + description + arrow → calls `selectNiche()` |
| 5 | Guidance box | One sentence, optional |

---

## selectNiche() — Critical Rules

```javascript
function selectNiche(nicheName) {
    localStorage.setItem('selected_l3', nicheName);         // ← must match CSV L3 column EXACTLY
    localStorage.setItem('problem_back_url', window.location.href);
    localStorage.setItem('suggested_primary', 'xxx');       // ← used for TAM lookup key (part 1)
    localStorage.setItem('suggested_secondary', 'yyy');     // ← used for TAM lookup key (part 2)
    window.location.href = '../../../numbers.html';
}
```

**TAM key = `suggested_primary + '_' + suggested_secondary`**
Must match an entry in the `L2_TAM` object in `numbers.html`.

**`selected_l3`** must match the `L3` column in the CSV file exactly.
If it doesn't match → no specific problems will load on `problem-selection.html`.

---

## File Naming

```
MARKETS/{Market}/L3/market-{market-slug}-{l1-slug}-{l2-slug}-l3.html
```

Example:
```
MARKETS/Real Estate/L3/market-real-estate-residential-single-family-l3.html
```

---

## HTML Skeleton

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[L2 Name] — Sub-segments — [Market]</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../../../style.css">
    <style>
        .l3-niche-card{display:flex;align-items:center;justify-content:space-between;text-decoration:none;background:var(--white);border-bottom:1px solid var(--border);padding:16px 4px;gap:16px;color:inherit;}
        .l3-niche-card:first-child{border-top:1px solid var(--border);}
        .l3-niche-card:hover h3{color:var(--green);}
        .l3-niche-card h3{font-size:0.9rem;font-weight:600;color:var(--text-primary);margin:0 0 2px;transition:color 0.15s;}
        .l3-niche-card p{font-size:0.8rem;color:var(--text-secondary);margin:0;line-height:1.4;}
        .l3-niche-grid{max-width:560px;margin:0 auto 48px;}
        .l3-section-label{text-align:center;font-size:0.7rem;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--text-tertiary);margin-bottom:16px;}
    </style>
</head>
<body>
    <div id="app">
        <div class="home-nav"><a href="../../../index.html" class="home-link">Home</a></div>
        <div class="back-nav">
            <a href="../L2/market-{market-slug}-{l1-slug}.html" class="back-link">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M10 12L6 8l4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                Back to [L2 Name]
            </a>
        </div>

        <header class="market-page-header">
            <div style="text-align:center; margin-bottom:12px;">
                <span class="part-badge part-badge-a"><span class="part-badge-dot"></span>Part A — Level 3</span>
            </div>
            <div class="market-badge">
                <span class="market-title">[L2 Name] — Sub-segments</span>
            </div>
        </header>

        <p class="subtitle" style="max-width:560px; margin:0 auto 32px;">
            Select a sub-segment to see specific problems and begin your analysis.
        </p>

        <section style="max-width:560px; margin:0 auto; padding:0 16px;">
            <p class="l3-section-label">Select a sub-segment</p>
            <div class="l3-niche-grid">
                <div class="l3-niche-card" style="cursor:pointer;" onclick="selectNiche('[Sub-segment Name from CSV]')">
                    <div>
                        <h3>[Sub-segment Name]</h3>
                        <p>[One-line description.]</p>
                    </div>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </div>
                <!-- repeat for each sub-segment -->
            </div>
        </section>

        <section class="guidance-box" style="max-width:700px; margin:0 auto 48px;">
            <h4>How to Choose</h4>
            <p>[One sentence of guidance.]</p>
        </section>
    </div>
    <script src="../../../content/t.js"></script>
    <script>
    function selectNiche(nicheName) {
        localStorage.setItem('selected_l3', nicheName);
        localStorage.setItem('problem_back_url', window.location.href);
        localStorage.setItem('suggested_primary', '{primary-slug}');
        localStorage.setItem('suggested_secondary', '{secondary-slug}');
        window.location.href = '../../../numbers.html';
    }
    </script>
</body>
</html>
```
