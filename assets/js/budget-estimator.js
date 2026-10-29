/**
 * Project Budget Estimator Engine
 * Transparent, deterministic, configurable pricing calculation engine in vanilla JavaScript.
 * Calculates Low, Likely, and High project ranges, separate recurring maintenance,
 * third-party cloud/API fees, and delivery schedules across USD, BDT, and EUR.
 */
(() => {
  /**
   * ============================================================================
   * EDITABLE PRICING CONFIGURATION
   * Modify these base values to tune pricing without changing interface logic.
   * ============================================================================
   */
  const PRICING_CONFIG = {
    // Baseline hourly rate for estimation calculations (in USD)
    baseHourlyRate: 35,

    // Currency exchange rates relative to 1 USD (Configurable reference defaults)
    currencies: {
      USD: { symbol: "$", code: "USD", rate: 1.0, formatDecimals: 0 },
      BDT: { symbol: "৳", code: "BDT", rate: 120.0, formatDecimals: 0 },
      EUR: { symbol: "€", code: "EUR", rate: 0.92, formatDecimals: 0 }
    },

    // Base estimated engineering hours by project type
    projectTypeBaseHours: {
      "Business website": { discovery: 8, design: 16, frontend: 24, backend: 12, db: 6, integrations: 6, ai: 0, qa: 8, devops: 8 },
      "Full-stack web application": { discovery: 16, design: 28, frontend: 50, backend: 60, db: 20, integrations: 16, ai: 0, qa: 24, devops: 16 },
      "E-commerce or marketplace": { discovery: 20, design: 32, frontend: 60, backend: 70, db: 24, integrations: 24, ai: 0, qa: 28, devops: 20 },
      "POS or inventory management system": { discovery: 18, design: 24, frontend: 45, backend: 65, db: 28, integrations: 16, ai: 0, qa: 24, devops: 16 },
      "CRM or ERP application": { discovery: 24, design: 36, frontend: 70, backend: 85, db: 36, integrations: 28, ai: 0, qa: 32, devops: 24 },
      "Custom software": { discovery: 16, design: 24, frontend: 40, backend: 55, db: 20, integrations: 16, ai: 0, qa: 20, devops: 16 },
      "AI chatbot or agent": { discovery: 12, design: 16, frontend: 28, backend: 40, db: 16, integrations: 20, ai: 40, qa: 20, devops: 16 },
      "RAG or knowledge platform": { discovery: 18, design: 20, frontend: 36, backend: 55, db: 30, integrations: 20, ai: 55, qa: 26, devops: 20 },
      "Machine-learning solution": { discovery: 20, design: 16, frontend: 24, backend: 45, db: 24, integrations: 16, ai: 60, qa: 24, devops: 20 },
      "Workflow automation": { discovery: 10, design: 8, frontend: 12, backend: 35, db: 12, integrations: 24, ai: 0, qa: 14, devops: 10 },
      "Cloud and DevOps": { discovery: 12, design: 10, frontend: 0, backend: 20, db: 16, integrations: 20, ai: 0, qa: 16, devops: 45 },
      "Data engineering and analytics": { discovery: 16, design: 16, frontend: 28, backend: 45, db: 36, integrations: 24, ai: 16, qa: 20, devops: 16 },
      "IoT or computer vision prototype": { discovery: 18, design: 16, frontend: 24, backend: 40, db: 16, integrations: 24, ai: 45, qa: 24, devops: 16 },
      "Other / custom project": { discovery: 14, design: 20, frontend: 35, backend: 45, db: 18, integrations: 16, ai: 10, qa: 18, devops: 14 }
    },

    // Additional hours per selected optional feature
    featureAdditionalHours: {
      auth_rbac: 14,
      database_orm: 12,
      rest_api: 16,
      payment_gateway: 16,
      dashboards: 20,
      search_vector: 18,
      ai_rag: 28,
      bg_workers: 16,
      webhooks: 12,
      doc_pdf: 14,
      i18n: 14,
      pwa_offline: 18
    },

    // Multipliers for user roles
    userRoleMultipliers: {
      "1-2": 1.0,
      "3-5": 1.15,
      "6+": 1.35
    },

    // Multipliers for UI/UX requirements
    designMultipliers: {
      "Client provided": 0.85,
      "Standard modern": 1.0,
      "Custom bespoke": 1.3
    },

    // Multipliers for integration complexity
    integrationMultipliers: {
      "None": 1.0,
      "1-2 standard": 1.12,
      "3-5 enterprise": 1.28,
      "6+ bespoke": 1.45
    },

    // Multipliers for AI requirements
    aiMultipliers: {
      "None": 1.0,
      "Basic automation": 1.1,
      "LLM integration": 1.25,
      "Advanced RAG/ML": 1.45
    },

    // Multipliers for overall project complexity
    complexityMultipliers: {
      "Simple": 0.85,
      "Medium": 1.0,
      "High": 1.35,
      "Enterprise": 1.8
    },

    // Multipliers for timeline rush
    timelineMultipliers: {
      "Flexible (8-12 weeks)": 0.95,
      "Standard (4-8 weeks)": 1.0,
      "Accelerated (2-4 weeks)": 1.25
    },

    // Monthly maintenance support costs (in USD)
    maintenanceMonthlyCost: {
      "None": 0,
      "3 Months SLA": 250,
      "6 Months SLA": 220,
      "12 Months SLA": 190
    },

    // Estimated monthly third-party costs (in USD)
    thirdPartyCostsEstimate: {
      "Business website": { hosting: 10, apis: 0, domain: 1.5, notes: "Static/VPS hosting + domain" },
      "Full-stack web application": { hosting: 25, apis: 10, domain: 1.5, notes: "App server, managed PostgreSQL, domain" },
      "E-commerce or marketplace": { hosting: 40, apis: 25, domain: 1.5, notes: "Cloud hosting, Stripe fees (~2.9%), email API" },
      "POS or inventory management system": { hosting: 25, apis: 10, domain: 1.5, notes: "Database server, local backup storage" },
      "CRM or ERP application": { hosting: 50, apis: 20, domain: 1.5, notes: "High-memory database, container hosting" },
      "Custom software": { hosting: 30, apis: 15, domain: 1.5, notes: "Standard cloud virtual machine" },
      "AI chatbot or agent": { hosting: 25, apis: 40, domain: 1.5, notes: "LLM token usage (OpenAI/Claude) + app runtime" },
      "RAG or knowledge platform": { hosting: 45, apis: 65, domain: 1.5, notes: "pgvector database, embedding API, token inference" },
      "Machine-learning solution": { hosting: 60, apis: 30, domain: 1.5, notes: "Compute instance with GPU / high RAM" },
      "Workflow automation": { hosting: 15, apis: 20, domain: 1.5, notes: "Background worker VPS, third-party API tiers" },
      "Cloud and DevOps": { hosting: 0, apis: 0, domain: 0, notes: "Runs directly in client cloud subscription" },
      "Data engineering and analytics": { hosting: 45, apis: 15, domain: 1.5, notes: "Managed analytical database storage" },
      "IoT or computer vision prototype": { hosting: 20, apis: 15, domain: 1.5, notes: "MQTT broker, video storage buffer" },
      "Other / custom project": { hosting: 25, apis: 15, domain: 1.5, notes: "Standard cloud baseline" }
    }
  };

  // Expose config for transparency & user customization
  window.PRICING_CONFIG = PRICING_CONFIG;

  let currentEstimateResult = null;

  function initBudgetEstimator() {
    const form = document.getElementById("budgetEstimatorForm");
    const resultsContainer = document.getElementById("estimatorResults");
    if (!form || !resultsContainer) return;

    // Currency selector listener
    const currencySelect = document.getElementById("estimatorCurrency");
    if (currencySelect) {
      currencySelect.addEventListener("change", () => {
        calculateEstimate(false);
      });
    }

    // Form submit / calculate
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      calculateEstimate(true);
    });

    // Real-time calculation on key dropdown changes
    form.querySelectorAll("select, input[type='checkbox'], input[type='radio']").forEach((elem) => {
      elem.addEventListener("change", () => {
        calculateEstimate(false);
      });
    });

    // Initial calculation with default form values
    calculateEstimate(false);

    // Wire action buttons
    wireEstimatorActions();
  }

  function calculateEstimate(scrollToResult = false) {
    const projectType = getVal("estimatorProjectType") || "Full-stack web application";
    const industry = getVal("estimatorIndustry") || "General Business";
    const description = getVal("estimatorDescription") || "";
    const userRoles = getRadioVal("estimatorRoles") || "1-2";
    const designReq = getVal("estimatorDesign") || "Standard modern";
    const integrationReq = getVal("estimatorIntegration") || "1-2 standard";
    const aiReq = getVal("estimatorAI") || "None";
    const complexity = getVal("estimatorComplexity") || "Medium";
    const timeline = getVal("estimatorTimeline") || "Standard (4-8 weeks)";
    const maintenance = getVal("estimatorMaintenance") || "3 Months SLA";
    const currencyCode = getVal("estimatorCurrency") || "USD";

    // Collect checked features
    const checkedFeatures = [];
    document.querySelectorAll("input[name='estimatorFeatures']:checked").forEach((cb) => {
      checkedFeatures.push(cb.value);
    });

    // Base hours for project type
    const baseHourMap = PRICING_CONFIG.projectTypeBaseHours[projectType] || PRICING_CONFIG.projectTypeBaseHours["Custom software"];
    let totalBaseHours = Object.values(baseHourMap).reduce((a, b) => a + b, 0);

    // Add hours for features
    let featureHours = 0;
    checkedFeatures.forEach((feat) => {
      featureHours += PRICING_CONFIG.featureAdditionalHours[feat] || 0;
    });

    let rawHours = totalBaseHours + featureHours;

    // Apply multipliers
    const mRoles = PRICING_CONFIG.userRoleMultipliers[userRoles] || 1.0;
    const mDesign = PRICING_CONFIG.designMultipliers[designReq] || 1.0;
    const mInteg = PRICING_CONFIG.integrationMultipliers[integrationReq] || 1.0;
    const mAI = PRICING_CONFIG.aiMultipliers[aiReq] || 1.0;
    const mComplex = PRICING_CONFIG.complexityMultipliers[complexity] || 1.0;
    const mTimeline = PRICING_CONFIG.timelineMultipliers[timeline] || 1.0;

    const netMultiplier = mRoles * mDesign * mInteg * mAI * mComplex * mTimeline;
    const adjustedHours = Math.round(rawHours * netMultiplier);

    // Cost calculations (USD baseline)
    const baseRate = PRICING_CONFIG.baseHourlyRate;
    const likelyCostUSD = Math.round(adjustedHours * baseRate);
    const lowCostUSD = Math.round(likelyCostUSD * 0.82);
    const highCostUSD = Math.round(likelyCostUSD * 1.28);

    // Currency conversion
    const curr = PRICING_CONFIG.currencies[currencyCode] || PRICING_CONFIG.currencies.USD;
    const lowCost = Math.round(lowCostUSD * curr.rate);
    const likelyCost = Math.round(likelyCostUSD * curr.rate);
    const highCost = Math.round(highCostUSD * curr.rate);

    // Delivery time calculation (in weeks based on ~30 productive engineering hrs/week)
    const baseWeeks = Math.max(2, Math.ceil(adjustedHours / 28));
    const lowWeeks = Math.max(1, Math.round(baseWeeks * 0.8));
    const highWeeks = Math.round(baseWeeks * 1.25);

    // Maintenance cost
    const monthlyMaintUSD = PRICING_CONFIG.maintenanceMonthlyCost[maintenance] || 0;
    const monthlyMaint = Math.round(monthlyMaintUSD * curr.rate);

    // Third-party costs
    const thirdPartyUSD = PRICING_CONFIG.thirdPartyCostsEstimate[projectType] || { hosting: 25, apis: 15, domain: 1.5, notes: "Standard cloud hosting" };
    const monthlyThirdParty = Math.round((thirdPartyUSD.hosting + thirdPartyUSD.apis + thirdPartyUSD.domain) * curr.rate);

    // Itemized phase hours breakdown
    const phaseBreakdown = [
      { phase: "Discovery, Requirements & Architecture RFC", pct: 0.12, hours: Math.round(adjustedHours * 0.12) },
      { phase: "UI/UX Prototyping & Design System", pct: 0.18, hours: Math.round(adjustedHours * 0.18) },
      { phase: "Frontend & Interface Engineering", pct: 0.25, hours: Math.round(adjustedHours * 0.25) },
      { phase: "Backend APIs, Database & Business Logic", pct: 0.25, hours: Math.round(adjustedHours * 0.25) },
      { phase: "Integrations, AI/Model Pipeline & QA", pct: 0.12, hours: Math.round(adjustedHours * 0.12) },
      { phase: "Docker Containerization, CI/CD & Handover", pct: 0.08, hours: Math.round(adjustedHours * 0.08) }
    ];

    currentEstimateResult = {
      projectType,
      industry,
      description,
      userRoles,
      designReq,
      integrationReq,
      aiReq,
      complexity,
      timeline,
      maintenance,
      currency: curr,
      checkedFeatures,
      adjustedHours,
      lowCost,
      likelyCost,
      highCost,
      lowWeeks,
      highWeeks,
      monthlyMaint,
      monthlyThirdParty,
      thirdPartyDetails: thirdPartyUSD,
      phaseBreakdown
    };

    renderEstimateResults(currentEstimateResult);

    if (scrollToResult) {
      const resultsEl = document.getElementById("estimatorResults");
      if (resultsEl) resultsEl.scrollIntoView({ behavior: "smooth" });
    }
  }

  function renderEstimateResults(data) {
    const container = document.getElementById("estimatorResults");
    if (!container) return;

    const sym = data.currency.symbol;
    const code = data.currency.code;

    container.innerHTML = `
      <div class="est-scorecard">
        <div class="est-scorecard-header">
          <div>
            <span class="est-badge">PRELIMINARY BUDGET ESTIMATE</span>
            <h3 class="est-title">${escapeHTML(data.projectType)}</h3>
            <p class="est-industry-sub">Domain / Industry: <strong>${escapeHTML(data.industry)}</strong> · Complexity: <strong>${data.complexity}</strong></p>
          </div>
          <div class="est-currency-tag">Currencies: ${code} (${sym})</div>
        </div>

        <!-- 3-Tier Budget Range -->
        <div class="est-tiers-grid">
          <div class="est-tier-card est-tier-low">
            <span class="tier-label">CONSERVATIVE (MINIMAL SCOPE)</span>
            <div class="tier-price">${sym}${data.lowCost.toLocaleString()}</div>
            <p class="tier-desc">Streamlined MVP focusing strictly on essential core user paths.</p>
          </div>

          <div class="est-tier-card est-tier-likely active">
            <div class="tier-pill">MOST LIKELY TARGET</div>
            <span class="tier-label">ENGINEERED PRODUCTION SCOPE</span>
            <div class="tier-price">${sym}${data.likelyCost.toLocaleString()}</div>
            <p class="tier-desc">Complete production build with full testing, documentation & CI/CD.</p>
          </div>

          <div class="est-tier-card est-tier-high">
            <span class="tier-label">COMPREHENSIVE (BUFFERED)</span>
            <div class="tier-price">${sym}${data.highCost.toLocaleString()}</div>
            <p class="tier-desc">Covers complex edge-cases, extensive custom polish & scale buffers.</p>
          </div>
        </div>

        <!-- Key Metrics Summary -->
        <div class="est-meta-grid">
          <div class="est-meta-card">
            <span class="meta-label">ESTIMATED TIMELINE</span>
            <span class="meta-val">${data.lowWeeks}–${data.highWeeks} Weeks</span>
            <span class="meta-sub">Sprint-based delivery</span>
          </div>

          <div class="est-meta-card">
            <span class="meta-label">ENGINEERING EFFORT</span>
            <span class="meta-val">~${data.adjustedHours} Hours</span>
            <span class="meta-sub">Architecture & full implementation</span>
          </div>

          <div class="est-meta-card">
            <span class="meta-label">MONTHLY MAINTENANCE (SLA)</span>
            <span class="meta-val">${data.monthlyMaint > 0 ? sym + data.monthlyMaint.toLocaleString() + "/mo" : "Optional"}</span>
            <span class="meta-sub">${escapeHTML(data.maintenance)}</span>
          </div>

          <div class="est-meta-card">
            <span class="meta-label">EST. THIRD-PARTY EXPENSES</span>
            <span class="meta-val">~${sym}${data.monthlyThirdParty.toLocaleString()}/mo</span>
            <span class="meta-sub">${escapeHTML(data.thirdPartyDetails.notes)}</span>
          </div>
        </div>

        <!-- Itemized Phase Breakdown -->
        <div class="est-breakdown-section">
          <h4 class="est-section-heading">Estimated Phase & Effort Allocation</h4>
          <div class="est-phases-list">
            ${data.phaseBreakdown.map(p => `
              <div class="est-phase-row">
                <span class="phase-name">${p.phase}</span>
                <span class="phase-bar-wrap">
                  <span class="phase-bar" style="width: ${p.pct * 100}%"></span>
                </span>
                <span class="phase-hours">~${p.hours} hrs (${Math.round(p.pct * 100)}%)</span>
              </div>
            `).join("")}
          </div>
        </div>

        <!-- Assumptions & Limitations Callout -->
        <div class="est-assumptions-box">
          <h5>⚠️ Scope Assumptions & Transparency Disclaimer</h5>
          <ul>
            <li><strong>Development Fee Separation:</strong> Third-party infrastructure (Azure cloud compute, OpenAI tokens, domain renewals, payment processing fees) is billed directly to your own provider accounts; my fee covers engineering implementation.</li>
            <li><strong>Non-Binding Estimate:</strong> This calculation is an illustrative architectural estimate based on typical effort models. Final commercial pricing is verified after formal discovery.</li>
            <li><strong>Currency Conversion:</strong> Converted at configurable baseline reference rates (1 USD = 120 BDT = 0.92 EUR). Client contracts can be denominated in USD, BDT, or EUR.</li>
          </ul>
        </div>

        <!-- Action Buttons -->
        <div class="est-actions-bar">
          <button type="button" class="button button-primary" id="estBtnTransferProposal">
            Transfer to AI Proposal Generator →
          </button>
          <button type="button" class="button button-secondary" id="estBtnCopySummary">
            Copy Estimate Summary 📋
          </button>
          <button type="button" class="button button-secondary" id="estBtnPrintPDF">
            Print / Save PDF 🖨️
          </button>
        </div>
      </div>
    `;

    // Re-wire scorecard actions
    const transferBtn = document.getElementById("estBtnTransferProposal");
    if (transferBtn) {
      transferBtn.addEventListener("click", () => {
        if (window.proposalGenerator && typeof window.proposalGenerator.prefillFromEstimator === "function") {
          window.proposalGenerator.prefillFromEstimator(currentEstimateResult);
        }
        const proposalSection = document.getElementById("proposal-generator");
        if (proposalSection) {
          proposalSection.scrollIntoView({ behavior: "smooth" });
        }
      });
    }

    const copyBtn = document.getElementById("estBtnCopySummary");
    if (copyBtn) {
      copyBtn.addEventListener("click", () => {
        copyEstimateToClipboard(data, copyBtn);
      });
    }

    const printBtn = document.getElementById("estBtnPrintPDF");
    if (printBtn) {
      printBtn.addEventListener("click", () => {
        window.print();
      });
    }
  }

  function copyEstimateToClipboard(data, btn) {
    const sym = data.currency.symbol;
    const summaryText = `PROJECT BUDGET ESTIMATE
Project: ${data.projectType}
Industry: ${data.industry}
Estimated Effort: ~${data.adjustedHours} hours
Estimated Timeline: ${data.lowWeeks}–${data.highWeeks} weeks

Cost Range (${data.currency.code}):
- Conservative / MVP: ${sym}${data.lowCost.toLocaleString()}
- Engineered Production Scope (Target): ${sym}${data.likelyCost.toLocaleString()}
- Comprehensive (Buffered): ${sym}${data.highCost.toLocaleString()}

Optional Recurring Maintenance: ${data.monthlyMaint > 0 ? sym + data.monthlyMaint.toLocaleString() + "/mo" : "None requested"}
Est. Third-Party Services: ~${sym}${data.monthlyThirdParty.toLocaleString()}/mo (${data.thirdPartyDetails.notes})

Prepared by: Alimul Fazal Nabil · AI Solutions Engineer
Website: https://alimulfazalnabil.github.io/
*Notice: Preliminary estimate subject to formal scope validation.`;

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(summaryText).then(() => {
        const originalText = btn.innerHTML;
        btn.innerHTML = "Copied to Clipboard! ✓";
        setTimeout(() => { btn.innerHTML = originalText; }, 2000);
      });
    } else {
      alert("Estimate summary:\n\n" + summaryText);
    }
  }

  function wireEstimatorActions() {
    const recalcBtn = document.getElementById("estimatorRecalcBtn");
    if (recalcBtn) {
      recalcBtn.addEventListener("click", () => {
        calculateEstimate(true);
      });
    }
  }

  function preselectService(serviceType, serviceTitle) {
    const selectEl = document.getElementById("estimatorProjectType");
    if (selectEl) {
      for (let i = 0; i < selectEl.options.length; i++) {
        if (selectEl.options[i].value === serviceType) {
          selectEl.selectedIndex = i;
          break;
        }
      }
    }

    const descEl = document.getElementById("estimatorDescription");
    if (descEl && serviceTitle && !descEl.value) {
      descEl.value = `Inquiry regarding ${serviceTitle}. Scope includes end-to-end design, implementation, and deployment.`;
    }

    calculateEstimate(false);
  }

  function getVal(id) {
    const el = document.getElementById(id);
    return el ? el.value : "";
  }

  function getRadioVal(name) {
    const el = document.querySelector(`input[name="${name}"]:checked`);
    return el ? el.value : "";
  }

  function escapeHTML(str) {
    if (!str) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  window.budgetEstimator = {
    calculate: calculateEstimate,
    preselectService: preselectService,
    getCurrentResult: () => currentEstimateResult
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initBudgetEstimator);
  } else {
    initBudgetEstimator();
  }
})();
