/* ═══════════════════════════════════════════════════════════════
   PICK YOUR MARKET — Brainstorming Wizard
   Vanilla JS — localStorage persistence
   ═══════════════════════════════════════════════════════════════ */

// ── Region Filter ─────────────────────────────────────────────

const REGIONS = [
    { key: "all", label: "All" },
    { key: "indonesia", label: "Indonesia" },
    { key: "australia", label: "Australia" },
    { key: "europe", label: "Europe" },
    { key: "world", label: "World" },
];

let activeRegion = "all";

// ── Step Definitions (no emoji) ───────────────────────────────

const STEPS = [
    // ── Step 0: Market ──────────────────────────────────────────
    {
        key: "market",
        question: "Choose your Market",
        description: "Every great business starts with a large market. Pick one with a Total Addressable Market (TAM) above $1B — this ensures enough room to build, grow, and attract investors.",
        hasRegionFilter: true,
        options: [
            { title: "SaaS / Cloud Software", sub: "B2B software-as-a-service", tam: "$800B+", regions: ["world", "europe", "australia"] },
            { title: "FinTech", sub: "Digital payments, lending, insurance", tam: "$340B+", regions: ["world", "indonesia", "europe", "australia"] },
            { title: "HealthTech", sub: "Digital health, telemedicine, wearables", tam: "$280B+", regions: ["world", "europe", "australia"] },
            { title: "EdTech", sub: "Online learning, upskilling, certifications", tam: "$140B+", regions: ["world", "indonesia", "europe", "australia"] },
            { title: "E-Commerce", sub: "Online retail, D2C, marketplaces", tam: "$6.3T+", regions: ["world", "indonesia", "europe", "australia"] },
            { title: "AI / Machine Learning", sub: "Enterprise AI, generative AI, automation", tam: "$500B+", regions: ["world", "europe", "australia"] },
            { title: "Cybersecurity", sub: "Data protection, identity, compliance", tam: "$260B+", regions: ["world", "europe", "australia"] },
            { title: "PropTech", sub: "Real estate tech, property management", tam: "$30B+", regions: ["world", "europe", "australia"] },
            { title: "FoodTech", sub: "Delivery, agritech, alternative proteins", tam: "$360B+", regions: ["world", "indonesia", "europe", "australia"] },
            { title: "CleanTech / Energy", sub: "Renewable energy, EV, sustainability", tam: "$1.5T+", regions: ["world", "indonesia", "europe", "australia"] },
            { title: "Gaming / Entertainment", sub: "Mobile games, streaming, metaverse", tam: "$250B+", regions: ["world", "indonesia", "australia"] },
            { title: "Logistics / Supply Chain", sub: "Last-mile, warehousing, fleet mgmt", tam: "$120B+", regions: ["world", "indonesia", "europe", "australia"] },
            { title: "Islamic Finance", sub: "Sharia-compliant banking, takaful", tam: "$4T+", regions: ["indonesia", "world"] },
            { title: "Ride-Hailing / Mobility", sub: "On-demand transport, micro-mobility", tam: "$200B+", regions: ["indonesia", "world"] },
            { title: "Agritech", sub: "Precision farming, supply chain, marketplaces", tam: "$30B+", regions: ["indonesia", "australia", "world"] },
            { title: "Mining / Resources Tech", sub: "Automation, exploration, ESG compliance", tam: "$20B+", regions: ["australia", "indonesia", "world"] },
        ],
        allowCustom: true,
        customPlaceholder: "Or type your own market..."
    },

    // ── Step 1: Problem (grouped by archetypes) ─────────────────
    {
        key: "problem",
        question: "What Problem do you solve?",
        description: "Great businesses solve real, recurring problems. Pick ONE primary problem your product addresses. Problems are grouped by universal archetypes used by top investors.",
        frameworkLink: "problem-framework.html",
        isMultiSection: true,
        isProblemStep: true,
        sections: [
            {
                sectionTitle: "Time / Speed",
                sectionHint: "Problems related to inefficiency, latency, and manual work.",
                options: [
                    { title: "Manual processes take too long", sub: "Tasks done by hand that should be automated" },
                    { title: "Slow approval cycles", sub: "Too many steps, too many people involved" },
                    { title: "Unpredictable completion times", sub: "No visibility on when things finish" },
                    { title: "Excessive back-and-forth", sub: "Constant follow-ups and status checks" }
                ]
            },
            {
                sectionTitle: "Money / Economics",
                sectionHint: "Problems related to financial leakage and economic inefficiency.",
                options: [
                    { title: "Revenue leakage", sub: "Untracked transactions or lost income" },
                    { title: "Unclear margins", sub: "No real-time cost visibility" },
                    { title: "Cashflow instability", sub: "Unpredictable revenue or payment delays" },
                    { title: "Cost opacity", sub: "Hidden or uncontrolled expenses" }
                ]
            },
            {
                sectionTitle: "Coordination / Humans",
                sectionHint: "Problems arising from human interaction and organizational complexity.",
                options: [
                    { title: "Handoff errors", sub: "Mistakes when work passes between people" },
                    { title: "Key-person dependency", sub: "Knowledge locked in one person's head" },
                    { title: "Poor accountability", sub: "Unclear who owns what" },
                    { title: "Too many people involved", sub: "Excessive coordination overhead" }
                ]
            },
            {
                sectionTitle: "Information / Visibility",
                sectionHint: "Problems caused by fragmented, delayed, or missing information.",
                options: [
                    { title: "Data scattered across tools", sub: "No single source of truth" },
                    { title: "Delayed reporting", sub: "Decisions based on stale data" },
                    { title: "Intuition-based decisions", sub: "No data to support choices" },
                    { title: "No real-time visibility", sub: "Can't see key metrics live" }
                ]
            },
            {
                sectionTitle: "Risk / Compliance",
                sectionHint: "Problems related to legal, regulatory, and operational risk.",
                options: [
                    { title: "Manual compliance checks", sub: "Error-prone regulatory processes" },
                    { title: "Audit stress", sub: "Time-consuming and risky preparation" },
                    { title: "Fear of penalties", sub: "Regulatory fines or legal exposure" },
                    { title: "Reputational exposure", sub: "Brand risk from compliance gaps" }
                ]
            }
        ]
    },

    // ── Step 2: Target ──────────────────────────────────────────
    {
        key: "target",
        question: "Who is your Target?",
        description: "Your target defines who you're building for. A clear customer segment helps you design the right product, set the right price, and choose the right channels. Be specific — you can always expand later.",
        options: [
            { title: "SMBs", sub: "Small & medium businesses (1-500 employees)" },
            { title: "Enterprise", sub: "Large corporations (500+ employees)" },
            { title: "Startups", sub: "Early-stage companies & founders" },
            { title: "Freelancers / Solopreneurs", sub: "Independent professionals" },
            { title: "Consumers (Gen Z)", sub: "Ages 18-27, digital-native" },
            { title: "Consumers (Millennials)", sub: "Ages 28-43, tech-savvy" },
            { title: "Consumers (Gen X+)", sub: "Ages 44+, established professionals" },
            { title: "Developers", sub: "Software engineers & technical teams" },
            { title: "Creators / Influencers", sub: "Content creators, YouTubers, artists" },
            { title: "Students", sub: "University & postgrad learners" },
        ],
        allowCustom: true,
        customPlaceholder: "Or type your own target..."
    },

    // ── Step 3: Severity / Urgency ──────────────────────────────
    {
        key: "severity",
        question: "Severity & Urgency",
        description: "How painful is this problem? Severity determines willingness to pay. If the problem is mild, people tolerate it — if it's severe, they actively seek solutions.",
        options: [
            { title: "Critical — Blocks operations", sub: "Business cannot function normally without solving this" },
            { title: "High — Significant daily pain", sub: "Clear time/money loss, workarounds are painful" },
            { title: "Medium — Noticeable friction", sub: "Problem exists but people cope with it" },
            { title: "Low — Minor inconvenience", sub: "Nice to solve, but not urgent" },
        ],
        allowCustom: false
    },

    // ── Step 4: Existing Behavior ───────────────────────────────
    {
        key: "existing_behavior",
        question: "Existing Behavior",
        description: "How do people handle this problem today? If there is no existing behavior, there is usually no market. Understanding current workarounds reveals where your product fits.",
        options: [
            { title: "Manually (paper, Excel, WhatsApp)", sub: "No software — pure human effort" },
            { title: "With improvised tools", sub: "Cobbled-together workflow across multiple apps" },
            { title: "With an existing product", sub: "Competitor or alternative exists but is painful" },
            { title: "Not solved at all", sub: "Problem is ignored or tolerated" },
            { title: "Outsourced to people", sub: "Hiring freelancers or agencies to handle it" },
        ],
        allowCustom: true,
        customPlaceholder: "Describe the current behavior..."
    },

    // ── Step 5: Business Mechanics (GATED) ──────────────────────
    {
        key: "mechanics",
        question: "Business Mechanics",
        description: "These are not markets — they're the engine behind your business. Define how you'll reach people, make money, build defensibility, and operate day-to-day.",
        isMultiSection: true,
        isGated: true,
        gateRequires: ["problem", "severity"],
        gateMinSeverity: "Medium — Noticeable friction",
        sections: [
            {
                sectionTitle: "Distribution Channels",
                sectionHint: "How will people discover you? Pick the channels you'll use to reach your audience.",
                options: [
                    { title: "YouTube" },
                    { title: "Email" },
                    { title: "SEO" },
                    { title: "Paid Ads" },
                    { title: "Influencer Marketing" },
                    { title: "Communities" }
                ]
            },
            {
                sectionTitle: "Monetization Models",
                sectionHint: "How will you generate revenue? This defines your pricing logic.",
                options: [
                    { title: "Subscription" },
                    { title: "Advertising" },
                    { title: "Lead Generation" },
                    { title: "Affiliate" },
                    { title: "One-off Payments" }
                ]
            },
            {
                sectionTitle: "Business Assets",
                sectionHint: "What's the core asset you'll build over time? This is your long-term moat.",
                options: [
                    { title: "Audience" },
                    { title: "Data" },
                    { title: "Software" },
                    { title: "Community" },
                    { title: "Brand" }
                ]
            },
            {
                sectionTitle: "Operating Models",
                sectionHint: "How will you structure and run the business day-to-day?",
                options: [
                    { title: "Solo Creator" },
                    { title: "Agency" },
                    { title: "SaaS" },
                    { title: "Marketplace" },
                    { title: "Media Business" }
                ]
            }
        ]
    },

    // ── Step 6: Product / Model ─────────────────────────────────
    {
        key: "model",
        question: "Product & Business Model",
        description: "Your business model is how you capture value. It shapes everything — pricing, hiring, fundraising, and growth trajectory. Recurring revenue models (SaaS, subscriptions) are generally preferred by investors.",
        options: [
            { title: "Subscription (SaaS)", sub: "Monthly / annual recurring revenue" },
            { title: "Marketplace", sub: "Commission on transactions" },
            { title: "Freemium", sub: "Free tier + paid premium features" },
            { title: "Pay-per-use", sub: "Usage-based pricing (API calls, credits)" },
            { title: "Advertising", sub: "Free product, revenue from ads" },
            { title: "Licensing", sub: "Sell IP / white-label to other companies" },
            { title: "Hardware + Software", sub: "Bundled device + subscription" },
            { title: "Agency / Services", sub: "Done-for-you, then productize" },
        ],
        allowCustom: true,
        customPlaceholder: "Or type your own model..."
    },

    // ── Step 7: Validate ────────────────────────────────────────
    {
        key: "validation",
        question: "Validate the Opportunity",
        description: "Stress-test your opportunity. These questions measure how real and viable the problem-solution fit is — a high score means stronger product-market fit potential.",
        isValidation: true,
        validationParts: [
            {
                partKey: "frequency",
                partQuestion: "How often does this problem occur?",
                partHint: "Higher frequency = higher willingness to pay. Daily problems create habits and retention.",
                options: [
                    { title: "Daily", sub: "Every day" },
                    { title: "Weekly", sub: "Multiple times per week" },
                    { title: "Monthly", sub: "Once or twice per month" },
                    { title: "Rarely", sub: "Infrequently" }
                ],
                allowCustom: false
            },
            {
                partKey: "cost",
                partQuestion: "What does this problem cost today?",
                partHint: "The more dimensions of cost (time, money, errors), the stronger the case for your solution. Select all that apply.",
                isMultiSelect: true,
                options: [
                    { title: "Time", sub: "Wastes hours or days" },
                    { title: "Money", sub: "Direct financial loss" },
                    { title: "Errors", sub: "Mistakes and rework" },
                    { title: "Stress", sub: "Frustration and burnout" },
                    { title: "Missed opportunities", sub: "Lost revenue or growth" }
                ],
                allowCustom: false
            },
            {
                partKey: "who_feels_pain",
                partQuestion: "Who experiences this problem directly?",
                partHint: "The person who feels the pain is often different from the buyer. Knowing this shapes your sales and marketing strategy.",
                options: [
                    { title: "Owner", sub: "Business owner or founder" },
                    { title: "Operator", sub: "Frontline staff or users" },
                    { title: "Manager", sub: "Team lead or supervisor" },
                    { title: "End customer", sub: "External customer or client" }
                ],
                allowCustom: false
            },
            {
                partKey: "willingness_to_pay",
                partQuestion: "Would someone pay to solve this?",
                partHint: "If users won't pay, the problem isn't painful enough. This is the ultimate litmus test.",
                options: [
                    { title: "Already paying for alternatives", sub: "Budget exists and is allocated" },
                    { title: "Would pay if solution existed", sub: "No current spend, but clear intent" },
                    { title: "Maybe — need convincing", sub: "Problem recognized but low priority" },
                    { title: "Unlikely to pay", sub: "Problem is tolerated or free workaround exists" }
                ],
                allowCustom: false
            }
        ]
    },

    // ── Step 8: Go-To-Market ────────────────────────────────────
    {
        key: "gtm",
        question: "Go-To-Market Strategy",
        description: "This is how you'll acquire your first 100 customers. The best GTM strategy depends on your target — B2B often needs outbound sales, while B2C relies on content and paid channels.",
        options: [
            { title: "Product-Led Growth", sub: "Self-serve signup, viral loops" },
            { title: "Content Marketing / SEO", sub: "Blog, YouTube, organic traffic" },
            { title: "Outbound Sales", sub: "Cold email, LinkedIn, SDRs" },
            { title: "Partnerships / Channels", sub: "Resellers, integrations, co-marketing" },
            { title: "Community-Led", sub: "Discord, forums, open-source" },
            { title: "Paid Acquisition", sub: "Google Ads, Meta Ads, TikTok Ads" },
            { title: "Influencer / Creator", sub: "Sponsorships, affiliate programs" },
            { title: "Events / Conferences", sub: "Demo days, trade shows, webinars" },
        ],
        allowCustom: true,
        customPlaceholder: "Or type your own strategy..."
    }
];

// ── State ─────────────────────────────────────────────────────

let currentStep = 0;
let selections = {};
let ideasManual = JSON.parse(localStorage.getItem("pym_ideas_manual") || "null");
let ideasAI = JSON.parse(localStorage.getItem("pym_ideas_ai") || "null");
if (!ideasManual) {
    ideasManual = JSON.parse(localStorage.getItem("pym_ideas") || "[]");
}
if (!ideasAI) {
    ideasAI = [];
}
let aiPrefill = JSON.parse(localStorage.getItem("ai_prefill") || "null");
let aiHighlight = [];
let aiPrompt = "";
let aiKeywords = [];
let aiPrefillOriginal = null;
let sheetVisible = false;
const DEFAULT_SHEET_ID = "123SSvRXPzo1IbSDqltalIcxUL30XM3i0KwS_R4cSf9g";
const SHEET_ID = localStorage.getItem("sheet_id") || DEFAULT_SHEET_ID;

// ── DOM Refs ──────────────────────────────────────────────────

const stepContent = document.getElementById("step-content");
const btnBack = document.getElementById("btn-back");
const btnReset = document.getElementById("btn-reset");
const btnAddSheet = document.getElementById("btn-add-sheet");
const btnNewIdea = document.getElementById("btn-new-idea");
const btnExportManual = document.getElementById("btn-export-manual");
const btnExportAi = document.getElementById("btn-export-ai");
const btnClearManual = document.getElementById("btn-clear-manual");
const btnClearAi = document.getElementById("btn-clear-ai");
const summaryArea = document.getElementById("summary-area");
const summaryGrid = document.getElementById("summary-grid");
const wizardArea = document.querySelector(".wizard-area");
const actionsDiv = document.getElementById("actions");
const progressContainer = document.getElementById("progress-container");
const ideasBodyManual = document.getElementById("ideas-body-manual");
const ideasBodyAi = document.getElementById("ideas-body-ai");
const sheetSection = document.getElementById("sheet-section");
const progressSteps = document.querySelectorAll(".step-indicator");
const promptNote = document.getElementById("prompt-note");
const keywordChips = document.getElementById("keyword-chips");
const btnOpenSheet = document.getElementById("btn-open-sheet");
const aiLearning = document.getElementById("ai-learning");

// ── Render Step ───────────────────────────────────────────────

function renderStep() {
    const step = STEPS[currentStep];

    // Check if this is a validation step
    if (step && step.isValidation) {
        renderValidationStep();
        return;
    }

    // Check if this is the multi-section Business Mechanics step
    if (step && step.isMultiSection) {
        renderMultiSectionStep();
        return;
    }

    stepContent.innerHTML = "";

    // Set wizard area step color
    if (wizardArea) wizardArea.setAttribute("data-step", currentStep);

    // Progress bar always hidden; actions visible from step 1+
    progressContainer.classList.add("hidden");
    if (currentStep === 0) {
        actionsDiv.classList.add("hidden");
    } else {
        actionsDiv.classList.remove("hidden");
    }

    // Hide sheet area during steps
    sheetVisible = false;
    if (sheetSection) sheetSection.classList.add("hidden");

    // Step number badge
    const badge = document.createElement("div");
    badge.className = "step-number-badge";
    badge.setAttribute("data-step", currentStep);
    badge.textContent = currentStep + 1;
    stepContent.appendChild(badge);

    // Question
    const q = document.createElement("h2");
    q.className = "step-question";
    q.textContent = step.question;
    stepContent.appendChild(q);

    // Description
    const desc = document.createElement("p");
    desc.className = "step-description";
    desc.textContent = step.description;
    stepContent.appendChild(desc);

    // Region filter (only for market step)
    if (step.hasRegionFilter) {
        const filterBar = document.createElement("div");
        filterBar.className = "region-filter";
        REGIONS.forEach(region => {
            const pill = document.createElement("button");
            pill.className = "region-pill" + (activeRegion === region.key ? " active" : "");
            pill.textContent = region.label;
            pill.addEventListener("click", () => {
                activeRegion = region.key;
                renderStep();
            });
            filterBar.appendChild(pill);
        });
        stepContent.appendChild(filterBar);
    }

    // Filter options by region
    const filteredOptions = step.hasRegionFilter && activeRegion !== "all"
        ? step.options.filter(opt => opt.regions && opt.regions.includes(activeRegion))
        : step.options;

    // Options grid
    const grid = document.createElement("div");
    grid.className = "options-grid";

    filteredOptions.forEach(opt => {
        const card = document.createElement("button");
        card.className = "option-card";
        if (selections[step.key] === opt.title) card.classList.add("selected");

        let inner = `
            <div class="option-text">
                <div class="option-title">${opt.title}</div>
                <div class="option-sub">${opt.sub}</div>
            </div>
        `;
        if (opt.tam) {
            inner += `<div class="option-tam">${opt.tam}</div>`;
        }
        card.innerHTML = inner;

        card.addEventListener("click", () => {
            selections[step.key] = opt.title;
            advanceStep();
        });

        grid.appendChild(card);
    });

    stepContent.appendChild(grid);

    // Custom input
    if (step.allowCustom) {
        const row = document.createElement("div");
        row.className = "custom-input-row";
        const input = document.createElement("input");
        input.type = "text";
        input.placeholder = step.customPlaceholder;
        if (selections[step.key] && !step.options.find(o => o.title === selections[step.key])) {
            input.value = selections[step.key];
        }
        const btn = document.createElement("button");
        btn.textContent = "Use this";
        btn.addEventListener("click", () => {
            const val = input.value.trim();
            if (val) {
                selections[step.key] = val;
                advanceStep();
            }
        });
        input.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                const val = input.value.trim();
                if (val) {
                    selections[step.key] = val;
                    advanceStep();
                }
            }
        });
        row.appendChild(input);
        row.appendChild(btn);
        stepContent.appendChild(row);
    }

    // Animation reset
    stepContent.style.animation = "none";
    stepContent.offsetHeight;
    stepContent.style.animation = "";

    updateProgress();
    updateButtons();
}

// ── Advance / Navigate ────────────────────────────────────────

function advanceStep() {
    if (currentStep < STEPS.length - 1) {
        currentStep++;
        renderStep();
        // Scroll to top on step change
        window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
        showSummary();
    }
}

function goBack() {
    if (currentStep > 0) {
        currentStep--;
        renderStep();
    }
}

function resetWizard() {
    currentStep = 0;
    selections = {};
    activeRegion = "all";
    aiPrompt = "";
    aiKeywords = [];
    aiPrefillOriginal = null;
    aiHighlight = [];
    summaryArea.classList.add("hidden");
    wizardArea.classList.remove("hidden");
    sheetVisible = false;
    if (sheetSection) sheetSection.classList.add("hidden");
    renderStep();
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// ── Progress ──────────────────────────────────────────────────

function updateProgress() {
    progressSteps.forEach((el, idx) => {
        el.classList.remove("active", "completed");
        if (idx === currentStep) el.classList.add("active");
        else if (idx < currentStep) el.classList.add("completed");
    });
}

function updateButtons() {
    btnBack.disabled = currentStep === 0;
}

// ── Summary ───────────────────────────────────────────────────

function showSummary() {
    wizardArea.classList.add("hidden");
    actionsDiv.classList.add("hidden");
    summaryArea.classList.remove("hidden");
    progressContainer.classList.add("hidden");
    sheetVisible = true;

    const labels = ["Market", "Problem", "Target", "Severity", "Existing Behavior", "Business Mechanics", "Product / Model", "Validation Signal", "Go-To-Market"];
    const keys = ["market", "problem_summary", "target", "severity", "existing_behavior", "mechanics_summary", "model", "validation_signal", "gtm"];
    const highlightMap = {
        market: "market",
        problem_summary: "problem",
        target: "target",
        severity: "severity",
        existing_behavior: "existing_behavior",
        mechanics_summary: "mechanics",
        model: "model",
        validation_signal: "validation",
        gtm: "gtm"
    };

    summaryGrid.innerHTML = "";
    keys.forEach((key, i) => {
        const item = document.createElement("div");
        item.className = "summary-item";
        if (aiHighlight.includes(highlightMap[key])) {
            item.classList.add("ai-highlight");
        }
        item.innerHTML = `
            <div class="label">${labels[i]}</div>
            <div class="value">${selections[key] || "—"}</div>
        `;
        summaryGrid.appendChild(item);
    });

    if (aiPrompt) {
        promptNote.textContent = `Prompt: "${aiPrompt}"`;
        promptNote.classList.remove("hidden");
    } else {
        promptNote.classList.add("hidden");
    }

    keywordChips.innerHTML = "";
    if (aiKeywords && aiKeywords.length) {
        aiKeywords.forEach(kw => {
            const chip = document.createElement("span");
            chip.className = "chip";
            chip.textContent = kw;
            keywordChips.appendChild(chip);
        });
    }

    if (SHEET_ID) {
        btnOpenSheet.classList.remove("hidden");
    } else {
        btnOpenSheet.classList.add("hidden");
    }

    renderAiLearningSummary();
    renderTables();
}

// ── Sheet / Ideas ─────────────────────────────────────────────

function addToSheet() {
    const now = new Date();
    const dateStr = now.toLocaleDateString("en-GB", {
        day: "2-digit", month: "short", year: "numeric"
    });

    const idea = {
        id: Date.now(),
        market: selections.market || "",
        problem: selections.problem_summary || "",
        target: selections.target || "",
        severity: selections.severity || "",
        existing_behavior: selections.existing_behavior || "",
        mechanics: selections.mechanics_summary || "",
        model: selections.model || "",
        validation_signal: selections.validation_signal || "—",
        gtm: selections.gtm || "",
        prompt: aiPrompt || "",
        keywords: aiKeywords || [],
        date: dateStr
    };

    const isAiEntry = !!aiPrompt;
    if (isAiEntry) {
        ideasAI.push(idea);
    } else {
        ideasManual.push(idea);
    }
    saveIdeas();
    logAiLearning(idea);
    renderTables();
    showToast("Idea added to sheet!");

    // Show sheet section and scroll to it
    sheetSection.classList.remove("hidden");
    setTimeout(() => {
        sheetSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
}

function deleteIdea(id, listName) {
    if (listName === "ai") {
        ideasAI = ideasAI.filter(i => i.id !== id);
    } else {
        ideasManual = ideasManual.filter(i => i.id !== id);
    }
    saveIdeas();
    renderTables();
    showToast("Idea removed.");
}

function saveIdeas() {
    localStorage.setItem("pym_ideas_manual", JSON.stringify(ideasManual));
    localStorage.setItem("pym_ideas_ai", JSON.stringify(ideasAI));
}

function renderTable(list, bodyEl, listName) {
    if (!bodyEl) return;
    bodyEl.innerHTML = "";
    list.forEach((idea, idx) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${idx + 1}</td>
            <td>${escapeHtml(idea.prompt || "—")}</td>
            <td>${escapeHtml(idea.market)}</td>
            <td>${escapeHtml(idea.problem || "—")}</td>
            <td>${escapeHtml(idea.target)}</td>
            <td>${escapeHtml(idea.mechanics || "—")}</td>
            <td>${escapeHtml(idea.model)}</td>
            <td>${escapeHtml(idea.validation_signal || "—")}</td>
            <td>${escapeHtml(idea.gtm)}</td>
            <td>${escapeHtml((idea.keywords || []).join(" / ") || "—")}</td>
            <td>${escapeHtml(idea.date)}</td>
            <td>
                <button class="delete-row-btn" title="Delete">
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                        <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                    </svg>
                </button>
            </td>
        `;
        tr.querySelector(".delete-row-btn").addEventListener("click", () => deleteIdea(idea.id, listName));
        bodyEl.appendChild(tr);
    });
}

function renderTables() {
    if (!sheetVisible) {
        if (sheetSection) sheetSection.classList.add("hidden");
        return;
    }
    const hasManual = ideasManual.length > 0;
    const hasAi = ideasAI.length > 0;
    if (!hasManual && !hasAi) {
        sheetSection.classList.add("hidden");
        return;
    }
    sheetSection.classList.remove("hidden");
    renderTable(ideasManual, ideasBodyManual, "manual");
    renderTable(ideasAI, ideasBodyAi, "ai");
}

// ── Export CSV ─────────────────────────────────────────────────

function exportCSV(list, suffix) {
    if (!list.length) {
        showToast("No ideas to export.");
        return;
    }

    const headers = ["#", "Prompt", "Market", "Problem", "Target", "Mechanics", "Product/Model", "Validation Signal", "Go-To-Market", "Keywords", "Date"];
    const rows = list.map((idea, idx) => [
        idx + 1,
        csvEscape(idea.prompt || "—"),
        csvEscape(idea.market),
        csvEscape(idea.problem || "—"),
        csvEscape(idea.target),
        csvEscape(idea.mechanics || "—"),
        csvEscape(idea.model),
        csvEscape(idea.validation_signal || "—"),
        csvEscape(idea.gtm),
        csvEscape((idea.keywords || []).join(" / ") || "—"),
        csvEscape(idea.date)
    ]);

    let csv = headers.join(",") + "\n";
    rows.forEach(r => csv += r.join(",") + "\n");

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `business_ideas_${suffix}_${new Date().toISOString().slice(0, 10)}.csv`;
    link.click();
    URL.revokeObjectURL(url);
    showToast("CSV exported!");
}

function clearSheet(listName) {
    const list = listName === "ai" ? ideasAI : ideasManual;
    if (!list.length) return;
    if (!confirm("Clear all ideas? This cannot be undone.")) return;
    if (listName === "ai") {
        ideasAI = [];
    } else {
        ideasManual = [];
    }
    saveIdeas();
    renderTables();
    showToast("Sheet cleared.");
}

// ── Toast ─────────────────────────────────────────────────────

function showToast(msg) {
    let toast = document.querySelector(".toast");
    if (!toast) {
        toast = document.createElement("div");
        toast.className = "toast";
        document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 2200);
}

// ── Helpers ───────────────────────────────────────────────────

function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
}

function csvEscape(str) {
    if (str.includes(",") || str.includes('"') || str.includes("\n")) {
        return '"' + str.replace(/"/g, '""') + '"';
    }
    return str;
}

// ── Sources ───────────────────────────────────────────────────

const DEFAULT_SOURCES = [
    { text: "Grand View Research — Market Reports", url: "https://www.grandviewresearch.com", group: "institutional" },
    { text: "Statista — Market Size Data", url: "https://www.statista.com", group: "institutional" },
    { text: "CB Insights — Industry Reports", url: "https://www.cbinsights.com", group: "institutional" },
    { text: "The Founder's Playbook — Framework", url: "", group: "framework" },
];

let sources = JSON.parse(localStorage.getItem("pym_sources") || "null") || [...DEFAULT_SOURCES];

const sourcesListInstitutional = document.getElementById("sources-list-institutional");
const sourcesListFramework = document.getElementById("sources-list-framework");
const sourcesListCustom = document.getElementById("sources-list-custom");
const sourceInput = document.getElementById("source-input");
const btnAddSource = document.getElementById("btn-add-source");

function saveSources() {
    localStorage.setItem("pym_sources", JSON.stringify(sources));
}

function renderSourceItem(src, idx, container) {
    const li = document.createElement("li");

    const bullet = document.createElement("span");
    bullet.textContent = "·";
    bullet.style.color = "var(--text-tertiary)";
    li.appendChild(bullet);

    if (src.url) {
        const a = document.createElement("a");
        a.href = src.url;
        a.target = "_blank";
        a.rel = "noopener";
        a.textContent = src.text;
        li.appendChild(a);
    } else {
        const span = document.createElement("span");
        span.className = "source-text";
        span.textContent = src.text;
        li.appendChild(span);
    }

    const del = document.createElement("button");
    del.className = "source-delete";
    del.innerHTML = '<svg width="10" height="10" viewBox="0 0 16 16" fill="none"><path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>';
    del.addEventListener("click", () => {
        sources.splice(idx, 1);
        saveSources();
        renderSources();
    });
    li.appendChild(del);

    container.appendChild(li);
}

function renderSources() {
    sourcesListInstitutional.innerHTML = "";
    sourcesListFramework.innerHTML = "";
    sourcesListCustom.innerHTML = "";

    sources.forEach((src, idx) => {
        if (src.group === "institutional") {
            renderSourceItem(src, idx, sourcesListInstitutional);
        } else if (src.group === "framework") {
            renderSourceItem(src, idx, sourcesListFramework);
        } else {
            renderSourceItem(src, idx, sourcesListCustom);
        }
    });

    // Hide empty custom group
    const customGroup = sourcesListCustom.closest(".sources-group");
    if (customGroup) {
        customGroup.style.display = sourcesListCustom.children.length === 0 ? "none" : "block";
    }
}

function addSource() {
    const val = sourceInput.value.trim();
    if (!val) return;

    const isUrl = val.startsWith("http://") || val.startsWith("https://") || val.startsWith("www.");
    const url = isUrl ? (val.startsWith("www.") ? "https://" + val : val) : "";
    const text = isUrl ? val.replace(/^https?:\/\/(www\.)?/, "").split("/")[0] : val;

    sources.push({ text, url, group: "custom" });
    saveSources();
    renderSources();
    sourceInput.value = "";
}

btnAddSource.addEventListener("click", addSource);
sourceInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") addSource();
});

// ── AI Prefill (from home search) ─────────────────────────────

function flattenMechanicsSummary(mechObj) {
    const parts = [];
    if (!mechObj) return "";
    Object.entries(mechObj).forEach(([sectionName, items]) => {
        if (items && items.length) {
            parts.push(items.join(", "));
        }
    });
    return parts.join(" · ");
}

function applyAiPrefillIfAny() {
    if (!aiPrefill) return;

    const { prompt, selections: prefSel = {}, keywords = [], highlight = [] } = aiPrefill;
    aiPrefillOriginal = aiPrefill;
    aiPrompt = prompt || "";
    aiKeywords = keywords || [];
    aiHighlight = highlight || [];

    selections = { ...selections, ...prefSel };

    if (prefSel.mechanics) {
        selections.mechanics = prefSel.mechanics;
        selections.mechanics_summary = flattenMechanicsSummary(prefSel.mechanics) || selections.mechanics_summary || "—";
    }
    if (prefSel.problem && !selections.problem_summary) {
        selections.problem_summary = prefSel.problem;
    }
    if (!selections.target && prefSel.target) selections.target = prefSel.target;
    if (!selections.severity) selections.severity = prefSel.severity || "High — Significant daily pain";
    if (!selections.existing_behavior) selections.existing_behavior = prefSel.existing_behavior || "With improvised tools";
    if (!selections.model && prefSel.model) selections.model = prefSel.model;
    if (!selections.gtm && prefSel.gtm) selections.gtm = prefSel.gtm;
    if (!selections.validation_signal && prefSel.validation_signal) selections.validation_signal = prefSel.validation_signal;

    // Remove homepage-hide from all wizard elements so they become visible
    document.querySelectorAll(".homepage-hide").forEach(el => el.classList.remove("homepage-hide"));

    const prefillMode = localStorage.getItem("prefill_mode") || "auto";
    if (prefillMode === "step") {
        currentStep = 0;
        summaryArea.classList.add("hidden");
        wizardArea.classList.remove("hidden");
        renderStep();
        window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
        currentStep = STEPS.length; // skip to summary
        showSummary();
        const autoAdd = localStorage.getItem("auto_add_sheet") === "1";
        if (autoAdd) {
            localStorage.removeItem("auto_add_sheet");
            addToSheet();
        }
    }

    localStorage.removeItem("prefill_mode");

    localStorage.removeItem("ai_prefill");
}

function logAiLearning(idea) {
    if (!aiPrompt || !aiPrefillOriginal) return;

    const prefSel = aiPrefillOriginal.selections || {};
    const aiMechanicsSummary = flattenMechanicsSummary(prefSel.mechanics);
    const fields = [
        { key: "market", ai: prefSel.market || "", final: idea.market || "" },
        { key: "problem", ai: prefSel.problem || "", final: idea.problem || "" },
        { key: "target", ai: prefSel.target || "", final: idea.target || "" },
        { key: "severity", ai: prefSel.severity || "", final: idea.severity || "" },
        { key: "existing_behavior", ai: prefSel.existing_behavior || "", final: idea.existing_behavior || "" },
        { key: "mechanics", ai: aiMechanicsSummary || "", final: idea.mechanics || "" },
        { key: "model", ai: prefSel.model || "", final: idea.model || "" },
        { key: "gtm", ai: prefSel.gtm || "", final: idea.gtm || "" }
    ];

    let unchanged = 0;
    const changed = [];
    fields.forEach(f => {
        const aiVal = typeof f.ai === "string" ? f.ai : JSON.stringify(f.ai || {});
        const finalVal = typeof f.final === "string" ? f.final : JSON.stringify(f.final || {});
        if (aiVal && finalVal && aiVal === finalVal) {
            unchanged += 1;
        } else {
            changed.push(f.key);
        }
    });

    const logEntry = {
        date: new Date().toISOString().slice(0, 10),
        prompt: aiPrompt,
        keywords: aiKeywords || [],
        unchanged,
        total: fields.length,
        changed_fields: changed
    };

    const logs = JSON.parse(localStorage.getItem("ai_learning_logs") || "[]");
    logs.push(logEntry);
    localStorage.setItem("ai_learning_logs", JSON.stringify(logs));
}

function renderAiLearningSummary() {
    if (!aiLearning) return;
    const logs = JSON.parse(localStorage.getItem("ai_learning_logs") || "[]");
    if (!logs.length) {
        aiLearning.classList.add("hidden");
        return;
    }

    const today = new Date().toISOString().slice(0, 10);
    const todays = logs.filter(l => l.date === today);
    const list = todays.length ? todays : logs.slice(-5);
    const total = list.reduce((sum, l) => sum + l.total, 0);
    const unchanged = list.reduce((sum, l) => sum + l.unchanged, 0);
    const accuracy = total ? Math.round((unchanged / total) * 100) : 0;

    aiLearning.innerHTML = `AI learning today: ${accuracy}% fields unchanged. Entries: ${list.length}.`;
    aiLearning.classList.remove("hidden");
}

// ── Event Listeners ───────────────────────────────────────────

btnBack.addEventListener("click", goBack);
btnReset.addEventListener("click", resetWizard);
btnAddSheet.addEventListener("click", addToSheet);
btnNewIdea.addEventListener("click", resetWizard);
if (btnExportManual) btnExportManual.addEventListener("click", () => exportCSV(ideasManual, "manual"));
if (btnExportAi) btnExportAi.addEventListener("click", () => exportCSV(ideasAI, "ai"));
if (btnClearManual) btnClearManual.addEventListener("click", () => clearSheet("manual"));
if (btnClearAi) btnClearAi.addEventListener("click", () => clearSheet("ai"));
btnOpenSheet.addEventListener("click", () => {
    if (!SHEET_ID) return;
    const range = "C:C"; // highlight keywords column by default
    const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/edit#gid=0&range=${range}`;
    window.open(url, "_blank");
});

// ── Init ──────────────────────────────────────────────────────

// If a segment was selected (L2 page), jump straight to Problem step
(function () {
    const startAt = localStorage.getItem("start_at_step");
    if (startAt !== null) {
        localStorage.removeItem("start_at_step");
        const idx = parseInt(startAt);
        if (!isNaN(idx) && idx > 0 && idx < STEPS.length) {
            currentStep = idx;
        }
    }
})();

renderStep();
renderTables();
renderSources();
applyAiPrefillIfAny();

// ── Smart Pre-Selection Integration ──────────────────────────

/**
 * Apply smart suggestions after market selection
 * This runs after advancing from step 0 (market) to step 1 (target)
 */
function applySmartSuggestions() {
    if (typeof window.WizardSuggestions !== 'undefined' && selections.market) {
        selections = window.WizardSuggestions.applyMarketSuggestions(selections.market, selections);
    }
}

// Modify the advanceStep function to apply suggestions + gate logic
const originalAdvanceStep = advanceStep;
advanceStep = function() {
    const wasOnMarketStep = (currentStep === 0);
    const nextStep = STEPS[currentStep + 1];

    // Gate check: if next step is gated, verify requirements
    if (nextStep && nextStep.isGated) {
        const severityOrder = [
            "Critical — Blocks operations",
            "High — Significant daily pain",
            "Medium — Noticeable friction",
            "Low — Minor inconvenience"
        ];
        const hasProblem = selections.problem_summary && selections.problem_summary !== "—";
        const severity = selections.severity;
        const severityIdx = severityOrder.indexOf(severity);
        const minIdx = severityOrder.indexOf(nextStep.gateMinSeverity);

        if (!hasProblem) {
            showToast("Please select a problem first.");
            return;
        }
        if (severityIdx < 0 || severityIdx > minIdx) {
            showToast("Severity is too low. Go back and reassess the problem.");
            return;
        }
    }

    // Call original advanceStep
    originalAdvanceStep();

    // If we just left the market step, apply smart suggestions
    if (wasOnMarketStep && selections.market) {
        applySmartSuggestions();
    }
};

// ── Multi-Section Step Rendering (Business Mechanics) ────────

function renderMultiSectionStep() {
    const step = STEPS[currentStep];
    stepContent.innerHTML = "";

    progressContainer.classList.add("hidden");
    actionsDiv.classList.remove("hidden");

    // Set wizard area step color
    if (wizardArea) wizardArea.setAttribute("data-step", currentStep);

    // Step number badge
    const badge = document.createElement("div");
    badge.className = "step-number-badge";
    badge.setAttribute("data-step", currentStep);
    badge.textContent = currentStep + 1;
    stepContent.appendChild(badge);

    // Question
    const q = document.createElement("h2");
    q.className = "step-question";
    q.textContent = step.question;
    stepContent.appendChild(q);

    // Description (micro-copy)
    const desc = document.createElement("p");
    desc.className = "step-description";
    desc.textContent = step.description;
    stepContent.appendChild(desc);

    // Framework link for problem step
    if (step.frameworkLink) {
        const linkRow = document.createElement("div");
        linkRow.style.cssText = "margin-bottom: 20px;";
        linkRow.innerHTML = `<a href="${step.frameworkLink}" target="_blank" class="problem-framework-link" style="font-size: 0.8125rem; color: var(--step-problem); text-decoration: none; display: inline-flex; align-items: center; gap: 6px; padding: 8px 14px; background: rgba(239,68,68,0.06); border-radius: 8px; border: 1px solid rgba(239,68,68,0.15); transition: all 0.2s;">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M2 4h12M2 8h12M2 12h8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
            How to Define Real Problems — Read the Framework
        </a>`;
        stepContent.appendChild(linkRow);
    }

    // Initialize selections for this step if not present
    if (!selections[step.key]) {
        selections[step.key] = {};
    }

    // Track section elements for sequential unlock
    const sectionElements = [];
    const isProblem = step.isProblemStep;

    // Render each section
    step.sections.forEach((section, sIdx) => {
        const sectionEl = document.createElement("div");
        sectionEl.className = "mechanics-section";
        sectionEl.dataset.sectionIndex = sIdx;

        // For problem step: all sections visible (no lock). For mechanics: sequential unlock.
        if (isProblem) {
            sectionEl.classList.add("unlocked");
        } else {
            const hasPriorSelection = sIdx === 0 || (
                selections[step.key][step.sections[sIdx - 1].sectionTitle] &&
                selections[step.key][step.sections[sIdx - 1].sectionTitle].length > 0
            );
            sectionEl.classList.add(hasPriorSelection ? "unlocked" : "locked");
        }

        const sectionTitle = document.createElement("h3");
        sectionTitle.className = "mechanics-section-title";
        sectionTitle.innerHTML = `<span class="section-number">${sIdx + 1}</span> ${section.sectionTitle}`;
        sectionEl.appendChild(sectionTitle);

        // Section hint/description
        if (section.sectionHint) {
            const hint = document.createElement("p");
            hint.className = "mechanics-section-hint";
            hint.textContent = section.sectionHint;
            sectionEl.appendChild(hint);
        }

        if (isProblem) {
            // Problem step: render as option cards, single-select across ALL sections
            const grid = document.createElement("div");
            grid.className = "options-grid";

            section.options.forEach(opt => {
                const card = document.createElement("button");
                card.className = "option-card";
                // Check if this is the currently selected primary problem
                if (selections.problem_primary === opt.title) {
                    card.classList.add("selected");
                }
                card.innerHTML = `
                    <div class="option-text">
                        <div class="option-title">${opt.title}</div>
                        <div class="option-sub">${opt.sub}</div>
                    </div>
                `;

                card.addEventListener("click", () => {
                    // Deselect all others
                    stepContent.querySelectorAll(".option-card.selected").forEach(c => c.classList.remove("selected"));
                    card.classList.add("selected");
                    // Store the primary problem and its archetype
                    selections.problem_primary = opt.title;
                    selections.problem_archetype = section.sectionTitle;
                    selections.problem_summary = `${opt.title} (${section.sectionTitle})`;
                });

                grid.appendChild(card);
            });

            sectionEl.appendChild(grid);
        } else {
            // Mechanics step: render as chips, multi-select per section
            const grid = document.createElement("div");
            grid.className = "mechanics-grid";

            section.options.forEach(opt => {
                const chip = document.createElement("button");
                chip.className = "mechanics-chip";
                const sectionSelections = selections[step.key][section.sectionTitle] || [];
                if (sectionSelections.includes(opt.title)) {
                    chip.classList.add("selected");
                }
                chip.textContent = opt.title;

                chip.addEventListener("click", () => {
                    if (!selections[step.key][section.sectionTitle]) {
                        selections[step.key][section.sectionTitle] = [];
                    }
                    const arr = selections[step.key][section.sectionTitle];
                    const idx = arr.indexOf(opt.title);
                    if (idx > -1) {
                        arr.splice(idx, 1);
                        chip.classList.remove("selected");
                    } else {
                        arr.push(opt.title);
                        chip.classList.add("selected");
                    }

                    // Unlock next section
                    unlockNextMechanicsSection(sIdx, step, sectionElements);
                });

                grid.appendChild(chip);
            });

            sectionEl.appendChild(grid);
        }

        stepContent.appendChild(sectionEl);
        sectionElements.push(sectionEl);
    });

    // Continue button
    const continueRow = document.createElement("div");
    continueRow.className = "custom-input-row";
    continueRow.style.justifyContent = "center";
    continueRow.style.marginTop = "24px";
    const continueBtn = document.createElement("button");
    continueBtn.textContent = "Continue";
    continueBtn.className = "btn btn-primary";
    continueBtn.addEventListener("click", () => {
        if (isProblem) {
            // Problem step: require one primary selection
            if (!selections.problem_primary) {
                showToast("Please select one primary problem.");
                return;
            }
            advanceStep();
        } else {
            // Mechanics step: flatten selections
            const parts = [];
            for (const [sectionName, items] of Object.entries(selections[step.key])) {
                if (items.length > 0) {
                    parts.push(items.join(", "));
                }
            }
            selections.mechanics_summary = parts.join(" · ") || "—";
            advanceStep();
        }
    });
    continueRow.appendChild(continueBtn);
    stepContent.appendChild(continueRow);

    // Animation
    stepContent.style.animation = "none";
    stepContent.offsetHeight;
    stepContent.style.animation = "";

    updateProgress();
    updateButtons();
}

function unlockNextMechanicsSection(currentSectionIdx, step, sectionElements) {
    // Re-evaluate lock state for all sections after the current one
    for (let i = currentSectionIdx + 1; i < sectionElements.length; i++) {
        const prevTitle = step.sections[i - 1].sectionTitle;
        const prevHasSelection = selections[step.key][prevTitle] &&
                                 selections[step.key][prevTitle].length > 0;

        const sectionEl = sectionElements[i];
        if (prevHasSelection) {
            if (sectionEl.classList.contains("locked")) {
                sectionEl.classList.remove("locked");
                sectionEl.classList.add("unlocked");
                if (i === currentSectionIdx + 1) {
                    setTimeout(() => {
                        sectionEl.scrollIntoView({ behavior: "smooth", block: "nearest" });
                    }, 100);
                }
            }
        } else {
            // Lock this and all subsequent sections
            for (let j = i; j < sectionElements.length; j++) {
                sectionElements[j].classList.remove("unlocked");
                sectionElements[j].classList.add("locked");
            }
            break;
        }
    }
}

// ── Validation Step Rendering ────────────────────────────────

let validationPartIndex = 0; // Track which validation part we're on
let validationAnswers = {}; // Store validation answers

function renderValidationStep() {
    const step = STEPS[currentStep];
    if (!step.isValidation) {
        renderStep(); // Fallback to normal step rendering
        return;
    }

    stepContent.innerHTML = "";

    // Set wizard area step color
    if (wizardArea) wizardArea.setAttribute("data-step", currentStep);

    // Progress bar hidden; actions visible
    progressContainer.classList.add("hidden");
    actionsDiv.classList.remove("hidden");

    const part = step.validationParts[validationPartIndex];

    // Step number badge
    const badge = document.createElement("div");
    badge.className = "step-number-badge";
    badge.setAttribute("data-step", currentStep);
    badge.textContent = currentStep + 1;
    stepContent.appendChild(badge);

    // Question header
    const q = document.createElement("h2");
    q.className = "step-question";
    q.textContent = part.partQuestion;
    stepContent.appendChild(q);

    // Validation progress pills
    const progressPills = document.createElement("div");
    progressPills.className = "validation-progress";
    step.validationParts.forEach((_, pIdx) => {
        const pill = document.createElement("div");
        pill.className = "validation-pill";
        if (pIdx < validationPartIndex) pill.classList.add("completed");
        else if (pIdx === validationPartIndex) pill.classList.add("active");
        progressPills.appendChild(pill);
    });
    stepContent.appendChild(progressPills);

    // Part counter
    const counter = document.createElement("p");
    counter.className = "step-description";
    counter.textContent = `Question ${validationPartIndex + 1} of ${step.validationParts.length}`;
    stepContent.appendChild(counter);

    // Part hint (why we ask this)
    if (part.partHint) {
        const hint = document.createElement("p");
        hint.className = "validation-hint";
        hint.textContent = part.partHint;
        stepContent.appendChild(hint);
    }

    // Options grid
    const grid = document.createElement("div");
    grid.className = "options-grid";

    part.options.forEach(opt => {
        const card = document.createElement("button");
        card.className = "option-card";

        // Handle multi-select
        if (part.isMultiSelect) {
            const selected = validationAnswers[part.partKey] || [];
            if (selected.includes(opt.title)) {
                card.classList.add("selected");
            }

            card.innerHTML = `
                <div class="option-text">
                    <div class="option-title">${opt.title}</div>
                    <div class="option-sub">${opt.sub}</div>
                </div>
            `;

            card.addEventListener("click", () => {
                const currentAnswers = validationAnswers[part.partKey] || [];
                const index = currentAnswers.indexOf(opt.title);

                if (index > -1) {
                    // Remove
                    currentAnswers.splice(index, 1);
                    card.classList.remove("selected");
                } else {
                    // Add
                    currentAnswers.push(opt.title);
                    card.classList.add("selected");
                }

                validationAnswers[part.partKey] = currentAnswers;
            });
        } else {
            // Single select
            if (validationAnswers[part.partKey] === opt.title) {
                card.classList.add("selected");
            }

            card.innerHTML = `
                <div class="option-text">
                    <div class="option-title">${opt.title}</div>
                    <div class="option-sub">${opt.sub}</div>
                </div>
            `;

            card.addEventListener("click", () => {
                validationAnswers[part.partKey] = opt.title;
                advanceValidationPart();
            });
        }

        grid.appendChild(card);
    });

    stepContent.appendChild(grid);

    // Custom input if allowed
    if (part.allowCustom) {
        const row = document.createElement("div");
        row.className = "custom-input-row";
        const input = document.createElement("input");
        input.type = "text";
        input.placeholder = part.customPlaceholder;
        if (validationAnswers[part.partKey] && !part.options.find(o => o.title === validationAnswers[part.partKey])) {
            input.value = validationAnswers[part.partKey];
        }
        const btn = document.createElement("button");
        btn.textContent = "Use this";
        btn.addEventListener("click", () => {
            const val = input.value.trim();
            if (val) {
                validationAnswers[part.partKey] = val;
                advanceValidationPart();
            }
        });
        input.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                const val = input.value.trim();
                if (val) {
                    validationAnswers[part.partKey] = val;
                    advanceValidationPart();
                }
            }
        });
        row.appendChild(input);
        row.appendChild(btn);
        stepContent.appendChild(row);
    }

    // For multi-select, add Continue button
    if (part.isMultiSelect) {
        const continueRow = document.createElement("div");
        continueRow.className = "custom-input-row";
        continueRow.style.justifyContent = "center";
        const continueBtn = document.createElement("button");
        continueBtn.textContent = "Continue";
        continueBtn.className = "btn";
        continueBtn.addEventListener("click", () => {
            if (!validationAnswers[part.partKey] || validationAnswers[part.partKey].length === 0) {
                alert("Please select at least one option");
                return;
            }
            advanceValidationPart();
        });
        continueRow.appendChild(continueBtn);
        stepContent.appendChild(continueRow);
    }

    // Animation
    stepContent.style.animation = "none";
    stepContent.offsetHeight;
    stepContent.style.animation = "";

    updateProgress();
    updateButtons();
}

function advanceValidationPart() {
    const step = STEPS[currentStep];
    if (validationPartIndex < step.validationParts.length - 1) {
        validationPartIndex++;
        renderValidationStep();
    } else {
        // All validation parts complete - calculate signal
        calculateValidationSignal();
        // Move to next step (GTM)
        validationPartIndex = 0;
        currentStep++;
        renderStep();
    }
}

function calculateValidationSignal() {
    let score = 0;

    // Existing behavior scoring (from step 4, stored in selections)
    const behavior = selections.existing_behavior;
    if (behavior === "Manually (paper, Excel, WhatsApp)") score += 3;
    else if (behavior === "With improvised tools") score += 2;
    else if (behavior === "Not solved at all") score += 3;
    else if (behavior === "With an existing product") score += 1;
    else if (behavior === "Outsourced to people") score += 2;

    // Frequency scoring
    const freq = validationAnswers.frequency;
    if (freq === "Daily") score += 3;
    else if (freq === "Weekly") score += 2;
    else if (freq === "Monthly") score += 1;

    // Cost scoring (multi-select)
    const costs = validationAnswers.cost || [];
    score += Math.min(costs.length, 3); // Max 3 points

    // Who feels pain scoring
    const who = validationAnswers.who_feels_pain;
    if (who === "Owner") score += 3;
    else if (who === "Manager") score += 2;
    else if (who === "Operator") score += 2;
    else if (who === "End customer") score += 1;

    // Calculate signal
    let signal;
    if (score >= 10) signal = "🟢 Strong signal";
    else if (score >= 6) signal = "🟡 Medium signal";
    else signal = "🔴 Weak signal";

    // Store in selections
    selections.validation_signal = signal;
    selections.validation_answers = validationAnswers;
}
