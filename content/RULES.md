# Market Taxonomy — Flow Rules

---

## Rule 1 — Step by Step Mode

**Trigger:** User selects "Step by Step" toggle, types a keyword, and presses Search.

### Behaviour by keyword count:

| Keywords typed | Max results shown | Navigation |
|---|---|---|
| 1 keyword | Up to 3 market matches | Show panel, user picks |
| 2 keywords | Up to 2 market matches | Show panel, or navigate direct if gap ≥ 30 |
| 3 keywords | 1 best match | Navigate directly to L1 |

### Matching rules:
- Uses **word boundary matching** — "ai" must appear as a standalone word in a keyword (NOT as substring inside "airbnb", "haircare", "retail", etc.)
- Scoring priority: exact match (100) > prefix match (70) > word boundary (40)
- Market name match scores higher than keyword match
- If only 1 result found → navigate directly to L1 (no panel needed)
- If top score gap ≥ 30 vs second → navigate directly to L1

### Step panel UI:
- Shows numbered list of markets (max 3)
- Each item links directly to the market's L1 page
- Header says: "Step 1 — Choose a market" (1 kw) or "Step 1 — Confirm your market" (2+ kw)
- If 0 results → shows "No markets found — try different keywords"
- Warning shown if user types more than 3 keywords

---

## Rule 2 — Auto Complete Mode

**Trigger:** User selects "Auto Complete" toggle (default), types a keyword, and presses Search.

### Behaviour:
- 1 keyword → show dropdown with up to 8 matches, user clicks one
- 2+ keywords + clear winner (score gap > 20) → navigate directly to L1
- 2+ keywords + ambiguous → show dropdown with top 5 matches
- 0 matches → fallback: uses local keyword mapping to guess best market

### Navigation:
- Clicking a result always navigates to the market's L1 page
- Does NOT go through the wizard — goes straight to the taxonomy hierarchy

### Key difference vs Step by Step:
- Auto Complete is faster — skips the explicit confirmation panel
- Shows inline dropdown (not a modal panel)
- Designed for users who know what they want

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
