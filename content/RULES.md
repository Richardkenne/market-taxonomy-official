# Market Taxonomy — Flow Rules

---

## Rule 1 — Step by Step Mode

**Trigger:** User selects "Step by Step" toggle, types a keyword, and presses Search.

### Behaviour by keyword count:

| Keywords typed | Max results shown | Navigation |
|---|---|---|
| 1 keyword | Up to 3 market matches | Show panel with %, user picks |
| 2 keywords | Up to 2 market matches | Show panel, or navigate direct if gap ≥ 30 |
| 3 keywords | 1 best match | Navigate directly to L1 |

### Matching rules:
- Uses **word boundary matching** — "ai" must appear as a standalone word in a keyword (NOT as substring inside "airbnb", "haircare", "retail", etc.)
- Scoring priority: exact match (100) > prefix match (70) > word boundary (40)
- Market name match scores higher than keyword match
- If only 1 result found → navigate directly to L1 (no panel needed)
- If top score gap ≥ 30 vs second → navigate directly to L1

### Step panel UI:
- Shows numbered list of up to 3 markets
- Each result shows a **match % badge** (green) relative to the top match (top = 100%)
- Example: `01 Technology 100% →` / `02 Software 72% →`
- Each item links directly to the market's L1 page
- Header says: "Step 1 — Choose a market" (1 kw) or "Step 1 — Confirm your market" (2+ kw)
- If 0 results → shows "No markets found — try different keywords"
- Warning shown if user types more than 3 keywords

---

## Rule 2 — Auto Complete Mode

**Trigger:** User selects "Auto Complete" toggle (default), types keywords or a phrase (max 6 words), and presses Search.

### Deep routing logic (L0 → L1 → L2 → L3):

| Input specificity | System behaviour |
|---|---|
| 1 keyword | Show dropdown with up to 5 L0 markets |
| 2+ keywords, L0 match only | Navigate directly to L1 page |
| 2+ keywords, L0+L1 matched | Navigate to L2 listing page |
| 2+ keywords, L0+L1 matched, L2 ambiguous | Show **L2 panel with % match** (max 3), user picks |
| 2+ keywords, L0+L1+L2 all matched | Navigate directly to **L3 problems page** |

### URL construction (automatic):
- URLs are built dynamically from market/L1/L2 names using slugify
- Works automatically when new HTML files are added — no manual mapping needed
- Pattern: `MARKETS/{Market}/L3/market-{slug}-{l1-slug}-{l2-slug}-l3.html`

### L2 panel (when L2 is ambiguous):
- Shows "Step 2 — Confirm sub-market" header
- Breadcrumb: `Market › L1`
- Up to 3 options with % match relative to top score
- Clicking navigates to the L3 problems page for that sub-market

### Key difference vs Step by Step:
- Auto Complete is faster — skips confirmation unless genuinely ambiguous
- Shows inline dropdown for L0, panel only for L2 ambiguity
- Max 6 words input recommended for best deep routing results
- Designed for direct navigation to the problems page (L3)

---

## Rule 3 — Search Bar AI (Prompt)

**Trigger:** User types a natural language sentence in the **Prompt (AI)** field and presses Go or Enter.

### Flow:
1. Sentence is sent to the Cloudflare Worker AI endpoint
2. AI interprets the idea and returns a full pre-filled selection:
   - `market` — best matching L0 market
   - `problem` — problem the idea solves
   - `target` — target customer
   - `severity` — how painful the problem is
   - `existing_behavior` — how it's currently solved
   - `mechanics` — distribution / monetization / assets / operating model
   - `model` — business model
   - `gtm` — go-to-market strategy
3. Data is saved to `localStorage` as `ai_prefill`
4. Page reloads and wizard activates with all fields pre-compiled
5. If flow mode is **Auto** → skip to summary, optionally auto-add to sheet
6. If flow mode is **Step** → open wizard at Step 0 with pre-selections highlighted

### Fallback (AI unavailable):
- If Cloudflare Worker times out (> 12 seconds) or returns error
- Local keyword mapping (`mapQueryToSelections`) guesses the market and mechanics
- User sees alert: "AI not available. Using local mapping."
- Flow continues normally with local selections

### Limits:
- AI timeout: 12 seconds
- Prompt is free-form text (no character limit enforced)
- The `mechanics` field from AI returns as free text — wizard shows it as summary string

---

## General Rules

- **Max 3 keywords** recommended for Step by Step mode
- **Flow mode** (step/auto) is persisted in `localStorage` across sessions
- All user-typed input is **HTML-escaped** before rendering (XSS protection)
- CSV export escapes commas, quotes, and newlines safely
