# Business Domains — Template

Business Domains are the 12 functional areas that organize value flow through any business system. Each domain spans across all 12 Business Systems, representing a distinct set of activities and economic mechanisms.

---

## Overview

The 12 Business Domains are:

1. **Product Development & Innovation** — Research, design, engineering, and iteration
2. **Market Access & Distribution** — Channels, logistics, and infrastructure
3. **Customer Acquisition & Growth** — Sales, marketing, and growth strategy
4. **Customer Retention & Success** — Support, success management, and loyalty
5. **Operations & Execution** — Manufacturing, delivery, and service fulfillment
6. **Pricing & Revenue Optimization** — Monetisation strategy and pricing models
7. **Data & Insight** — Analytics, metrics, and decision intelligence
8. **Network Effects & Community** — Two-sided dynamics and engagement
9. **Brand & Market Position** — Brand strategy, positioning, and perception
10. **Partnerships & Ecosystem** — Strategic alliances and integrations
11. **People & Organization** — Hiring, culture, and team capability
12. **Finance & Capital** — Fundraising, cash management, and investor relations

---

## Visual Layout

Each Business Domain page includes:

```
[Back to Domains]

        ● Part A — Market Structure

        [Domain Name]
        [Short description]

────────────────────────────────────

        🔬 [Icon]

        [Domain Name]

        [Tagline - one sentence]

        What It Is
        [2-3 sentences explaining the domain]

        Why It Matters
        [2-3 sentences on strategic importance]

        Key Activities
        • Activity 1
        • Activity 2
        • Activity 3
        • Activity 4
        • Activity 5
        • Activity 6
        • Activity 7

        Economic Impact
        [2-3 sentences on financial consequences]

        Business Systems: 01 · 10 · 11

────────────────────────────────────
```

---

## Key Sections

| Section | Purpose | Length |
|---------|---------|--------|
| **What It Is** | Define the domain in clear terms | 2-3 sentences |
| **Why It Matters** | Explain strategic importance | 2-3 sentences |
| **Key Activities** | List 5-7 core functions | Bullet list |
| **Economic Impact** | Show financial consequences | 2-3 sentences |
| **Business Systems** | Link to applicable systems | Tag with numbers |

---

## File Organization

```
BUSINESS DOMAINS TAXONOMY/
├── business-domains.html          ← Grid view of all 12 domains
├── business-domains-detail.html   ← Detailed explanations with anchors
```

---

## Cross-References

Each Business Domain should reference the Business Systems it applies to:

- **01 — Subscription** → Domains: 01, 03, 04
- **02 — Transaction Fee** → Domains: 02, 03, 04
- **03 — Usage-Based** → Domains: 02, 05, 06
- **04 — Licensing / IP** → Domains: 04, 06, 07
- **05 — Marketplace** → Domains: 02, 03, 04, 05, 08
- **06 — Advertising / Attention** → Domains: 01, 07, 08, 09
- **07 — Asset Ownership** → Domains: 02, 03, 05, 11, 12
- **08 — Service / Retainer** → Domains: 05, 06, 10, 11
- **09 — Performance / Outcome** → Domains: 03, 09, 10
- **10 — Data / Insight** → Domains: 01, 07, 09
- **11 — Platform / Ecosystem** → Domains: 08, 10, 11
- **12 — Hybrid / Stack** → Domains: all relevant systems

---

## Update Checklist

After creating/editing Business Domain content:

- [ ] Update `business-domains.html` with new domain cards
- [ ] Update `business-domains-detail.html` with detailed content
- [ ] Verify all anchor links work (`#product`, `#distribution`, etc.)
- [ ] Check Business Systems cross-references
- [ ] Update footer links to match current structure
- [ ] Test navigation between pages

---

## Example Domain Entry

```html
<div class="domain-section" id="product">
    <div class="domain-header">
        <div class="domain-icon">🔬</div>
        <div class="domain-title-block">
            <h2>Product Development & Innovation</h2>
            <p>The engine of differentiation and competitive advantage</p>
        </div>
    </div>
    <div class="domain-content">
        <h3>What It Is</h3>
        <p>Product Development encompasses all activities involved in creating, designing, engineering, and iterating products or services.</p>

        <h3>Why It Matters</h3>
        <p>A business that stops innovating becomes commoditized. Product development is where you build defensibility.</p>

        <h3>Key Activities</h3>
        <ul>
            <li>Research and customer discovery</li>
            <li>Product design and prototyping</li>
            <li>Engineering and technical development</li>
            <li>Quality assurance and testing</li>
            <li>Continuous iteration and feature releases</li>
            <li>User experience (UX) and accessibility</li>
            <li>Technology stack decisions and infrastructure</li>
        </ul>

        <h3>Economic Impact</h3>
        <p>Strong product development enables higher margins, faster time-to-market, and stronger competitive moats.</p>

        <span class="systems-tag">Business Systems: 01 · 10 · 11</span>
    </div>
</div>
```

---

## Notes

- Business Domains are **orthogonal** to Business Systems — they cut across all systems
- Each domain exists in every business, but the sophistication varies
- Domains are **always in motion** — they interact and influence each other
- The strength of each domain determines competitive positioning and profitability
