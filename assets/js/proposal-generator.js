/**
 * AI Project Proposal Generator Module
 * Generates tailored, 21-part formal engineering proposals based on client requirements.
 * Supports Mode A (Free, deterministic in-browser synthesis) and Mode B (Optional AI-enhanced drafting).
 * Features live document preview, inline editing, Markdown copy/download, and PDF printing.
 */
(() => {
  let currentProposalData = null;
  let activeMode = "deterministic"; // "deterministic" (Mode A) or "ai-enhanced" (Mode B)

  function initProposalGenerator() {
    const form = document.getElementById("proposalGeneratorForm");
    const previewContainer = document.getElementById("proposalPreviewContainer");
    if (!form || !previewContainer) return;

    // Mode Toggle Tabs
    const modeTabs = document.querySelectorAll(".prop-mode-tab");
    modeTabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const mode = tab.getAttribute("data-mode");
        modeTabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");
        setOperatingMode(mode);
      });
    });

    // Step Wizard Navigation
    const stepBtns = document.querySelectorAll(".prop-step-btn");
    stepBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const targetStep = parseInt(btn.getAttribute("data-step"), 10);
        goToStep(targetStep);
      });
    });

    // Next / Back buttons
    document.querySelectorAll(".prop-btn-next").forEach((btn) => {
      btn.addEventListener("click", () => {
        const currentStep = getCurrentStep();
        if (validateStep(currentStep)) {
          goToStep(currentStep + 1);
        }
      });
    });

    document.querySelectorAll(".prop-btn-prev").forEach((btn) => {
      btn.addEventListener("click", () => {
        const currentStep = getCurrentStep();
        goToStep(currentStep - 1);
      });
    });

    // Form Submission / Generate Proposal
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      generateProposal();
    });

    // Wire edit / reset actions
    wireProposalPreviewActions();
  }

  function setOperatingMode(mode) {
    activeMode = mode;
    const aiConfigBox = document.getElementById("propAiConfigBox");
    if (aiConfigBox) {
      aiConfigBox.style.display = mode === "ai-enhanced" ? "block" : "none";
    }
  }

  function getCurrentStep() {
    const activePane = document.querySelector(".prop-step-pane.active");
    if (!activePane) return 1;
    return parseInt(activePane.getAttribute("data-step-index"), 10) || 1;
  }

  function goToStep(stepIndex) {
    const totalSteps = 4;
    const boundedStep = Math.max(1, Math.min(totalSteps, stepIndex));

    // Update Step Indicators
    document.querySelectorAll(".prop-step-btn").forEach((btn) => {
      const idx = parseInt(btn.getAttribute("data-step"), 10);
      btn.classList.toggle("active", idx === boundedStep);
      btn.classList.toggle("completed", idx < boundedStep);
    });

    // Update Panes
    document.querySelectorAll(".prop-step-pane").forEach((pane) => {
      const idx = parseInt(pane.getAttribute("data-step-index"), 10);
      pane.classList.toggle("active", idx === boundedStep);
    });

    // Scroll to top of generator
    const header = document.getElementById("proposalGeneratorHeader");
    if (header) {
      header.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  function validateStep(stepIndex) {
    if (stepIndex === 1) {
      const clientName = (document.getElementById("propClientName")?.value || "").trim();
      const projectTitle = (document.getElementById("propProjectTitle")?.value || "").trim();
      const industry = (document.getElementById("propIndustry")?.value || "").trim();

      if (!clientName) {
        showError("propClientName", "Please enter your name or company name.");
        return false;
      }
      if (!projectTitle) {
        showError("propProjectTitle", "Please provide a working project title.");
        return false;
      }
      if (!industry) {
        showError("propIndustry", "Please specify your industry or domain.");
        return false;
      }
    }
    return true;
  }

  function showError(fieldId, message) {
    const el = document.getElementById(fieldId);
    if (!el) return;
    el.focus();
    el.classList.add("input-error");
    setTimeout(() => el.classList.remove("input-error"), 3000);
    alert(message);
  }

  /**
   * Generates the structured 21-part proposal document
   */
  function generateProposal() {
    const clientName = getVal("propClientName") || "Valued Client";
    const clientContact = getVal("propClientContact") || "Direct Contact";
    const industry = getVal("propIndustry") || "Technology / Business";
    const projectTitle = getVal("propProjectTitle") || "Enterprise Intelligent Solution";
    const serviceCategory = getVal("propServiceCategory") || "Web Development";
    const problemStatement = getVal("propProblemStatement") || "Manual operational bottlenecks and outdated technical architecture limiting efficiency and scalability.";
    const businessObjectives = getVal("propBusinessObjectives") || "Modernize workflows, reduce manual processing time, ensure high data reliability, and support business growth.";
    const requiredFeatures = getVal("propRequiredFeatures") || "Secure user authentication, responsive UI, database integration, REST API, automated workflows, and cloud deployment.";
    const techPreferences = getVal("propTechPreferences") || "Python 3.12+, FastAPI, PostgreSQL, Docker, Microsoft Azure (or recommended modern alternatives).";
    const existingSystems = getVal("propExistingSystems") || "Legacy internal databases and spreadsheet tracking.";
    const userRoles = getVal("propUserRoles") || "Admin, Staff Member, Standard Client / User";
    const dataMigration = getVal("propDataMigration") || "Standard tabular and historical record migration.";
    const securityCompliance = getVal("propSecurityCompliance") || "Zero-trust RBAC, HTTPS/TLS encryption, and automated database backups.";
    const hostingPref = getVal("propHostingPref") || "Client cloud subscription (Microsoft Azure / Linux VPS / Container PaaS).";
    const deadline = getVal("propDeadline") || "Standard phased rollout (approx. 6–10 weeks).";
    const budgetRange = getVal("propBudgetRange") || "Aligned with standard sprint rates.";
    const currency = getVal("propCurrency") || "USD";
    const maintenancePref = getVal("propMaintenancePref") || "3 Months Post-Launch Warranty & Support SLA";
    const additionalNotes = getVal("propAdditionalNotes") || "Iterative sprint delivery with weekly milestone demos.";

    const proposalNumber = `PROP-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    const proposalDate = new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
    const validityDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

    // Derive architectural recommendations based on service and requirements
    const techStack = deriveTechStack(serviceCategory, techPreferences);
    const milestones = deriveMilestones(serviceCategory, deadline);
    const costEstimate = deriveItemizedCost(serviceCategory, budgetRange, currency);

    currentProposalData = {
      proposalNumber,
      proposalDate,
      validityDate,
      clientName,
      clientContact,
      industry,
      projectTitle,
      serviceCategory,
      problemStatement,
      businessObjectives,
      requiredFeatures,
      techPreferences,
      techStack,
      existingSystems,
      userRoles,
      dataMigration,
      securityCompliance,
      hostingPref,
      deadline,
      budgetRange,
      currency,
      maintenancePref,
      additionalNotes,
      milestones,
      costEstimate,
      operatingMode: activeMode
    };

    renderProposalDocument(currentProposalData);

    // Scroll to preview
    const previewEl = document.getElementById("proposalPreviewContainer");
    if (previewEl) {
      previewEl.hidden = false;
      previewEl.scrollIntoView({ behavior: "smooth" });
    }
  }

  function deriveTechStack(category, userPref) {
    if (category.includes("AI") || category.includes("Machine Learning")) {
      return {
        core: "Python 3.12+, FastAPI, Pydantic, AsyncIO",
        ai: "sentence-transformers, pgvector, LangChain / LlamaIndex, OpenAI / Claude API",
        data: "PostgreSQL with pgvector extension, Redis Cache",
        infra: "Docker multi-stage builds, Microsoft Azure Container Apps, GitHub Actions CI/CD"
      };
    } else if (category.includes("Cloud") || category.includes("DevOps")) {
      return {
        core: "Terraform Infrastructure as Code (IaC), Bash, Python automation",
        ai: "Prometheus telemetry, Grafana observability dashboards",
        data: "Azure Virtual Networks, Azure Key Vault, Azure Blob Storage",
        infra: "Microsoft Azure, Azure Kubernetes Service (AKS), Docker, GitHub Actions"
      };
    } else if (category.includes("IoT") || category.includes("Robotics")) {
      return {
        core: "Python, C/C++, OpenCV perception algorithms",
        ai: "YOLOv8 object detection, PyTorch inference",
        data: "MQTT broker, PostgreSQL, SQLite local buffer",
        infra: "Embedded Linux / Raspberry Pi, Docker, Serial USB / UART interfaces"
      };
    } else {
      return {
        core: "Python 3.12+, FastAPI / Modern Web Framework, Vanilla ES6 / React",
        ai: "Algorithmic search / optional LLM assistant bridge",
        data: "PostgreSQL, SQLAlchemy ORM, Redis for session & rate limiting",
        infra: "Docker containers, Linux VPS / Azure App Service, Nginx, GitHub Actions"
      };
    }
  }

  function deriveMilestones(category, deadline) {
    return [
      {
        phase: "Phase 1: Discovery & Architecture RFC",
        timeline: "Weeks 1–2",
        deliverable: "Finalized requirements specification, entity-relationship database schema, OpenAPI contracts, and signed milestone plan."
      },
      {
        phase: "Phase 2: Core Engine & Data Foundations",
        timeline: "Weeks 3–4",
        deliverable: "Relational database implementation, authentication/authorization layers, and foundational business logic APIs."
      },
      {
        phase: "Phase 3: Frontend UI, Workflows & Integrations",
        timeline: "Weeks 5–7",
        deliverable: "Responsive client interfaces, third-party API hooks, real-time dashboards, and workflow state machines."
      },
      {
        phase: "Phase 4: Quality Assurance & Security Hardening",
        timeline: "Weeks 8–9",
        deliverable: "End-to-end automated testing, load benchmarks, security vulnerability audits, and client staging review."
      },
      {
        phase: "Phase 5: Production Handover & SLA Support",
        timeline: "Week 10",
        deliverable: "Production deployment, DNS cutover, operational runbook documentation, and commencement of post-launch warranty."
      }
    ];
  }

  function deriveItemizedCost(category, budgetRange, currency) {
    // Check if we have active estimate from budget estimator
    let base = 2800;
    let currSymbol = "$";

    if (window.budgetEstimator && typeof window.budgetEstimator.getCurrentResult === "function") {
      const est = window.budgetEstimator.getCurrentResult();
      if (est) {
        base = est.likelyCost;
        currSymbol = est.currency.symbol;
      }
    }

    if (currency === "BDT") currSymbol = "৳";
    if (currency === "EUR") currSymbol = "€";

    const pDiscovery = Math.round(base * 0.15);
    const pArchitecture = Math.round(base * 0.20);
    const pFrontend = Math.round(base * 0.25);
    const pBackend = Math.round(base * 0.25);
    const pQA = Math.round(base * 0.15);
    const total = pDiscovery + pArchitecture + pFrontend + pBackend + pQA;

    return {
      symbol: currSymbol,
      items: [
        { item: "Phase 1: Discovery, Technical Architecture & Database Design", cost: pDiscovery },
        { item: "Phase 2: Backend APIs, Authentication & Core Business Logic", cost: pArchitecture },
        { item: "Phase 3: User Interface & Frontend Implementation", cost: pFrontend },
        { item: "Phase 4: Integrations, Third-Party APIs & Reporting", cost: pBackend },
        { item: "Phase 5: Quality Assurance, Containerization & Cloud Deployment", cost: pQA }
      ],
      total: total,
      paymentMilestones: [
        { milestone: "Kickoff & Project Initiation", percentage: "30%", amount: Math.round(total * 0.30) },
        { milestone: "Midway Functional Milestone Review (Staging)", percentage: "40%", amount: Math.round(total * 0.40) },
        { milestone: "Final Acceptance, Deployment & Handover", percentage: "30%", amount: Math.round(total * 0.30) }
      ]
    };
  }

  /**
   * Renders the comprehensive 21-part formal proposal document
   */
  function renderProposalDocument(p) {
    const container = document.getElementById("proposalPreviewContainer");
    if (!container) return;

    const sym = p.costEstimate.symbol;

    container.innerHTML = `
      <div class="prop-doc-actions-top">
        <div class="prop-doc-meta">
          <span class="prop-number">${escapeHTML(p.proposalNumber)}</span>
          <span class="prop-mode-pill ${p.operatingMode === 'ai-enhanced' ? 'mode-ai' : 'mode-det'}">
            ${p.operatingMode === 'ai-enhanced' ? '✨ Mode B: AI-Enhanced Draft' : '⚡ Mode A: Deterministic Draft'}
          </span>
        </div>
        <div class="prop-doc-btns">
          <button type="button" class="button button-secondary" id="propBtnCopyMarkdown">Copy Markdown 📋</button>
          <button type="button" class="button button-secondary" id="propBtnDownloadMD">Download .MD 📥</button>
          <button type="button" class="button button-primary" id="propBtnPrint">Print / Save PDF 🖨️</button>
        </div>
      </div>

      <!-- Formal Proposal Document (Editable in place) -->
      <article class="prop-document" id="proposalFormalDoc" contenteditable="true" spellcheck="false" title="Click anywhere to edit text before exporting">
        
        <!-- Header & Letterhead -->
        <header class="prop-header">
          <div class="prop-brand">
            <span class="brand-mark">AN<span>·</span></span>
            <span class="brand-name">Alimul Fazal Nabil</span>
            <p class="brand-sub">AI Solutions Engineer · Cloud Infrastructure &amp; Systems Architecture</p>
            <p class="brand-contact">Berlin, Germany &amp; Global · aflnabil@gmail.com · alimulfazalnabil.github.io</p>
          </div>
          <div class="prop-ref-box">
            <div class="ref-row"><strong>PROPOSAL REF:</strong> <span>${escapeHTML(p.proposalNumber)}</span></div>
            <div class="ref-row"><strong>DATE:</strong> <span>${escapeHTML(p.proposalDate)}</span></div>
            <div class="ref-row"><strong>VALID UNTIL:</strong> <span>${escapeHTML(p.validityDate)}</span></div>
            <div class="ref-row"><strong>STATUS:</strong> <span class="status-draft">Preliminary Proposal Draft</span></div>
          </div>
        </header>

        <hr class="prop-divider">

        <!-- 1. Proposal Title & 2. Client Details -->
        <section class="prop-sec">
          <h1 class="prop-main-title">${escapeHTML(p.projectTitle)}</h1>
          <p class="prop-kicker">TECHNICAL SOLUTION &amp; IMPLEMENTATION PROPOSAL</p>

          <div class="prop-details-grid">
            <div class="prop-detail-card">
              <span class="detail-label">PREPARED FOR</span>
              <h4 class="detail-value">${escapeHTML(p.clientName)}</h4>
              <p class="detail-sub">${escapeHTML(p.clientContact)}</p>
              <p class="detail-sub">Industry: <strong>${escapeHTML(p.industry)}</strong></p>
            </div>
            <div class="prop-detail-card">
              <span class="detail-label">ENGAGEMENT SPECIFICATION</span>
              <h4 class="detail-value">${escapeHTML(p.serviceCategory)}</h4>
              <p class="detail-sub">Target Timeline: <strong>${escapeHTML(p.deadline)}</strong></p>
              <p class="detail-sub">Currency: <strong>${escapeHTML(p.currency)}</strong></p>
            </div>
          </div>
        </section>

        <!-- 3. Executive Summary -->
        <section class="prop-sec">
          <h3 class="prop-sec-title">1. Executive Summary</h3>
          <p>
            This proposal outlines the engineering plan to design, implement, and deploy <strong>${escapeHTML(p.projectTitle)}</strong> for <strong>${escapeHTML(p.clientName)}</strong>. The objective of this engagement is to replace operational inefficiencies with a resilient, high-performance architecture engineered for security, high data fidelity, and seamless user experiences.
          </p>
          <p>
            The project will be executed in disciplined sprints adhering to strict engineering standards: test-driven development, Docker containerization, modular architecture, and comprehensive documentation to guarantee a clean, unencumbered handover.
          </p>
        </section>

        <!-- 4. Client Problem & Business Objectives -->
        <section class="prop-sec">
          <h3 class="prop-sec-title">2. Problem Statement &amp; Business Objectives</h3>
          <div class="prop-callout-grid">
            <div class="prop-callout callout-problem">
              <h4>Current Operational Challenge</h4>
              <p>${escapeHTML(p.problemStatement)}</p>
            </div>
            <div class="prop-callout callout-objective">
              <h4>Target Business Objectives</h4>
              <p>${escapeHTML(p.businessObjectives)}</p>
            </div>
          </div>
        </section>

        <!-- 5. Proposed Solution & 6. Scope of Work -->
        <section class="prop-sec">
          <h3 class="prop-sec-title">3. Proposed Solution &amp; Scope of Work</h3>
          <p>
            To address the identified challenges, we propose a modular architecture centered on <strong>${escapeHTML(p.serviceCategory)}</strong>. The scope of work encompasses:
          </p>
          <ul class="prop-list">
            <li><strong>Requirements Refinement:</strong> Translating business criteria into OpenAPI contracts, entity-relationship models, and measurable latency and uptime SLAs.</li>
            <li><strong>Data Architecture:</strong> Implementing robust relational and vector data structures with automated migration scripts.</li>
            <li><strong>Application Engineering:</strong> Developing type-safe, asynchronous microservice backends and accessible, responsive user interfaces.</li>
            <li><strong>Security Controls:</strong> Implementing granular Role-Based Access Control (RBAC: ${escapeHTML(p.userRoles)}), encrypted credential vaults, and CSRF/CORS protections.</li>
            <li><strong>Integration &amp; Automation:</strong> Interfacing with existing systems (${escapeHTML(p.existingSystems)}) with retry policies and dead-letter queue protections.</li>
          </ul>
        </section>

        <!-- 7. Features and Deliverables -->
        <section class="prop-sec">
          <h3 class="prop-sec-title">4. Key Features &amp; Deliverables</h3>
          <div class="prop-features-box">
            <p><strong>Required Features:</strong> ${escapeHTML(p.requiredFeatures)}</p>
            <p><strong>Deliverables Included:</strong></p>
            <ul class="prop-list">
              <li>Complete, fully documented source code repository with clear Git commit history.</li>
              <li>Multi-stage Dockerfile and Docker Compose configurations for one-click local and staging runs.</li>
              <li>Automated CI/CD deployment workflows (GitHub Actions) for zero-downtime releases.</li>
              <li>Comprehensive technical documentation, API specifications, and operational runbooks.</li>
            </ul>
          </div>
        </section>

        <!-- 8. Recommended Architecture and Technology Stack -->
        <section class="prop-sec">
          <h3 class="prop-sec-title">5. Recommended Architecture &amp; Technology Stack</h3>
          <table class="prop-table">
            <thead>
              <tr>
                <th>Layer</th>
                <th>Recommended Technology Stack</th>
                <th>Architectural Rationale</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Core Backend</strong></td>
                <td>${escapeHTML(p.techStack.core)}</td>
                <td>High concurrency, native async I/O, automatic OpenAPI typing, and sub-millisecond route dispatch.</td>
              </tr>
              <tr>
                <td><strong>Data &amp; Storage</strong></td>
                <td>${escapeHTML(p.techStack.data)}</td>
                <td>ACID compliance, relational integrity, high-dimensional indexing, and connection-pooled queries.</td>
              </tr>
              <tr>
                <td><strong>Intelligence / Logic</strong></td>
                <td>${escapeHTML(p.techStack.ai)}</td>
                <td>Strict hallucination suppression, sentence-level citation verification, and structured data extraction.</td>
              </tr>
              <tr>
                <td><strong>Infrastructure &amp; CI/CD</strong></td>
                <td>${escapeHTML(p.techStack.infra)}</td>
                <td>Zero configuration drift, automated test gates, reproducible container builds, and security scanning.</td>
              </tr>
            </tbody>
          </table>
        </section>

        <!-- 9. Project Phases & 10. Estimated Timeline -->
        <section class="prop-sec">
          <h3 class="prop-sec-title">6. Project Phases &amp; Milestones (${escapeHTML(p.deadline)})</h3>
          <div class="prop-milestones-list">
            ${p.milestones.map((m, idx) => `
              <div class="prop-milestone-item">
                <div class="milestone-badge">0${idx + 1}</div>
                <div class="milestone-content">
                  <div class="milestone-header">
                    <h4>${escapeHTML(m.phase)}</h4>
                    <span class="milestone-time">${escapeHTML(m.timeline)}</span>
                  </div>
                  <p>${escapeHTML(m.deliverable)}</p>
                </div>
              </div>
            `).join("")}
          </div>
        </section>

        <!-- 11. Itemized Cost Estimate & 12. Payment Schedule -->
        <section class="prop-sec">
          <h3 class="prop-sec-title">7. Commercial Proposal &amp; Milestone Payment Schedule</h3>
          <table class="prop-table">
            <thead>
              <tr>
                <th>Phase Work Breakdown</th>
                <th style="text-align:right;">Estimated Fee (${escapeHTML(p.currency)})</th>
              </tr>
            </thead>
            <tbody>
              ${p.costEstimate.items.map(it => `
                <tr>
                  <td>${escapeHTML(it.item)}</td>
                  <td style="text-align:right; font-weight:600;">${sym}${it.cost.toLocaleString()}</td>
                </tr>
              `).join("")}
              <tr class="prop-table-total">
                <td><strong>Total Estimated Engineering Fee</strong></td>
                <td style="text-align:right; font-weight:800; color:var(--blue); font-size:16px;">
                  ${sym}${p.costEstimate.total.toLocaleString()} ${escapeHTML(p.currency)}
                </td>
              </tr>
            </tbody>
          </table>

          <h4 style="margin:20px 0 10px; font-size:14px; text-transform:uppercase; letter-spacing:0.05em; color:var(--text-subtle);">Suggested Payment Milestones</h4>
          <div class="prop-payment-grid">
            ${p.costEstimate.paymentMilestones.map(pm => `
              <div class="prop-payment-card">
                <span class="pm-pct">${pm.percentage}</span>
                <span class="pm-label">${escapeHTML(pm.milestone)}</span>
                <span class="pm-val">${sym}${pm.amount.toLocaleString()}</span>
              </div>
            `).join("")}
          </div>
        </section>

        <!-- 13. Testing and Acceptance Criteria -->
        <section class="prop-sec">
          <h3 class="prop-sec-title">8. Testing &amp; Acceptance Criteria</h3>
          <p>Milestone sign-off requires satisfying deterministic acceptance benchmarks:</p>
          <ul class="prop-list">
            <li><strong>Functional Verification:</strong> 100% of defined core user journeys execute without unhandled errors.</li>
            <li><strong>Automated Test Suite:</strong> Clean execution of Pytest / integration suites covering happy-path and edge-case inputs.</li>
            <li><strong>Performance Threshold:</strong> API response times remain under agreed p95 SLAs on standard production workloads.</li>
            <li><strong>Security Baseline:</strong> Zero high-severity vulnerabilities flagged by static security analysis tools.</li>
          </ul>
        </section>

        <!-- 14. Deployment & Handover & 15. Maintenance -->
        <section class="prop-sec">
          <h3 class="prop-sec-title">9. Deployment, Handover &amp; Post-Launch Warranty</h3>
          <p>
            <strong>Hosting Environment:</strong> Deployed to <em>${escapeHTML(p.hostingPref)}</em>. All cloud resources will reside within client-controlled accounts.
          </p>
          <p>
            <strong>Warranty &amp; Maintenance:</strong> Includes <strong>${escapeHTML(p.maintenancePref)}</strong> covering bug remediation, security patches, and minor configuration updates resulting from the agreed scope.
          </p>
        </section>

        <!-- 16. Assumptions and Exclusions -->
        <section class="prop-sec">
          <h3 class="prop-sec-title">10. Assumptions &amp; Exclusions</h3>
          <div class="prop-callout-grid">
            <div class="prop-callout">
              <h4>Key Project Assumptions</h4>
              <ul>
                <li>Client will supply timely feedback and domain credentials within agreed review cycles.</li>
                <li>Third-party API credentials (Stripe, OpenAI, Azure) will be provisioned directly by the client.</li>
                <li>Content assets (logos, copy, product photos) will be supplied in digital format.</li>
              </ul>
            </div>
            <div class="prop-callout">
              <h4>Scope Exclusions</h4>
              <ul>
                <li>Third-party subscription, API token, and cloud infrastructure fees.</li>
                <li>New feature requests outside the agreed scope (managed via formal change requests).</li>
                <li>Manual data entry beyond the agreed initial seed migration.</li>
              </ul>
            </div>
          </div>
        </section>

        <!-- 17. Risks and Dependencies & 18. Third-Party Costs -->
        <section class="prop-sec">
          <h3 class="prop-sec-title">11. Risks, Dependencies &amp; Third-Party Fees</h3>
          <p>
            <strong>Dependencies:</strong> Timely verification of third-party API keys and DNS cutover permissions.
          </p>
          <p>
            <strong>Third-Party Services:</strong> Third-party charges (cloud hosting, LLM token usage, domain fees) are billed directly by respective vendors to ensure client ownership.
          </p>
        </section>

        <!-- 19. Terms & 20. Validity & 21. Next Steps -->
        <section class="prop-sec">
          <h3 class="prop-sec-title">12. Next Steps &amp; Project Approval</h3>
          <p>
            This proposal is valid until <strong>${escapeHTML(p.validityDate)}</strong>. To initiate this project:
          </p>
          <ol class="prop-ordered-list">
            <li><strong>Review &amp; Refine:</strong> Verify the scope, deliverables, and timeline. Adjustments can be made as needed.</li>
            <li><strong>Engagement Agreement:</strong> Execute the formal statement of work and initiate Phase 1.</li>
            <li><strong>Technical Kickoff:</strong> Schedule the architecture discovery session and establish the repository environment.</li>
          </ol>

          <div class="prop-signoff-box">
            <div class="signoff-col">
              <span class="sign-label">PROPOSED BY</span>
              <p class="sign-name">Alimul Fazal Nabil</p>
              <p class="sign-title">AI Solutions Engineer</p>
              <p class="sign-date">${escapeHTML(p.proposalDate)}</p>
            </div>
            <div class="signoff-col">
              <span class="sign-label">ACCEPTED &amp; CONFIRMED BY</span>
              <p class="sign-name">${escapeHTML(p.clientName)}</p>
              <p class="sign-title">Authorized Representative</p>
              <p class="sign-date">Date: ________________________</p>
            </div>
          </div>
        </section>

        <footer class="prop-footer-note">
          <p>CONFIDENTIAL &amp; PROPRIETARY · PREPARED FOR ${escapeHTML(p.clientName).toUpperCase()} · ALIMUL FAZAL NABIL</p>
        </footer>
      </article>
    `;

    // Re-wire document actions
    wireDocumentActionButtons(p);
  }

  function wireDocumentActionButtons(data) {
    const copyBtn = document.getElementById("propBtnCopyMarkdown");
    if (copyBtn) {
      copyBtn.addEventListener("click", () => {
        copyProposalAsMarkdown(data, copyBtn);
      });
    }

    const downloadBtn = document.getElementById("propBtnDownloadMD");
    if (downloadBtn) {
      downloadBtn.addEventListener("click", () => {
        downloadProposalAsMarkdown(data);
      });
    }

    const printBtn = document.getElementById("propBtnPrint");
    if (printBtn) {
      printBtn.addEventListener("click", () => {
        window.print();
      });
    }
  }

  function wireProposalPreviewActions() {
    // Back to form button
    const backBtn = document.getElementById("propBtnBackToForm");
    if (backBtn) {
      backBtn.addEventListener("click", () => {
        const formSection = document.getElementById("proposalGeneratorHeader");
        if (formSection) formSection.scrollIntoView({ behavior: "smooth" });
      });
    }
  }

  function copyProposalAsMarkdown(data, btn) {
    const md = buildMarkdownText(data);
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(md).then(() => {
        const orig = btn.innerHTML;
        btn.innerHTML = "Markdown Copied! ✓";
        setTimeout(() => { btn.innerHTML = orig; }, 2000);
      });
    } else {
      alert("Proposal copied to clipboard.");
    }
  }

  function downloadProposalAsMarkdown(data) {
    const md = buildMarkdownText(data);
    const blob = new Blob([md], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${data.proposalNumber}_${data.projectTitle.replace(/[^a-zA-Z0-9]/g, "_")}.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  function buildMarkdownText(p) {
    return `# Technical Proposal: ${p.projectTitle}
**Proposal Ref:** ${p.proposalNumber}
**Date:** ${p.proposalDate}
**Valid Until:** ${p.validityDate}
**Prepared For:** ${p.clientName} (${p.clientContact})
**Prepared By:** Alimul Fazal Nabil · AI Solutions Engineer (aflnabil@gmail.com)

---

## 1. Executive Summary
This proposal outlines the technical architecture, scope of work, and delivery roadmap for **${p.projectTitle}**. Our objective is to deliver a reliable, secure, and production-ready solution solving the operational requirements of ${p.clientName}.

## 2. Problem Statement & Objectives
- **Problem:** ${p.problemStatement}
- **Business Objectives:** ${p.businessObjectives}

## 3. Scope of Work & Features
- **Service Domain:** ${p.serviceCategory}
- **Required Features:** ${p.requiredFeatures}
- **User Roles:** ${p.userRoles}
- **Existing Systems:** ${p.existingSystems}

## 4. Recommended Technology Stack
- **Core Backend:** ${p.techStack.core}
- **Data & Storage:** ${p.techStack.data}
- **Intelligence Layer:** ${p.techStack.ai}
- **Infrastructure & CI/CD:** ${p.techStack.infra}

## 5. Timeline & Milestones (${p.deadline})
${p.milestones.map((m, i) => `${i + 1}. **${m.phase}** (${m.timeline})\n   Deliverable: ${m.deliverable}`).join("\n\n")}

## 6. Commercial Estimate (${p.currency})
${p.costEstimate.items.map(it => `- ${it.item}: ${p.costEstimate.symbol}${it.cost.toLocaleString()}`).join("\n")}
**Total Estimated Engineering Fee:** ${p.costEstimate.symbol}${p.costEstimate.total.toLocaleString()} ${p.currency}

### Payment Milestones
${p.costEstimate.paymentMilestones.map(pm => `- ${pm.milestone} (${pm.percentage}): ${p.costEstimate.symbol}${pm.amount.toLocaleString()}`).join("\n")}

## 7. Testing, Security & Handover
- Automated unit and integration test coverage.
- Deployment to client-managed hosting: ${p.hostingPref}.
- Post-launch support: ${p.maintenancePref}.

---
*Notice: This is a non-binding preliminary engineering proposal valid for 30 days.*
`;
  }

  function prefillFromEstimator(est) {
    if (!est) return;

    setVal("propProjectTitle", `${est.projectType} System`);
    setVal("propIndustry", est.industry || "Business");
    setVal("propProblemStatement", est.description || `Engineering requirements for a scalable ${est.projectType} platform.`);
    setVal("propCurrency", est.currency.code);

    if (est.timeline) {
      setVal("propDeadline", `${est.timeline} (~${est.lowWeeks}–${est.highWeeks} weeks)`);
    }

    if (est.maintenance) {
      setVal("propMaintenancePref", est.maintenance);
    }

    // Advance to step 1
    goToStep(1);
  }

  function prefillService(serviceType, serviceTitle) {
    setVal("propProjectTitle", `${serviceTitle} Implementation`);
    setVal("propProblemStatement", `Inquiry regarding ${serviceTitle}. Scope includes end-to-end design, implementation, and deployment.`);
    goToStep(1);
  }

  function getVal(id) {
    const el = document.getElementById(id);
    return el ? el.value : "";
  }

  function setVal(id, val) {
    const el = document.getElementById(id);
    if (el) el.value = val;
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

  window.proposalGenerator = {
    generate: generateProposal,
    prefillFromEstimator: prefillFromEstimator,
    prefillService: prefillService,
    getCurrentProposal: () => currentProposalData
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initProposalGenerator);
  } else {
    initProposalGenerator();
  }
})();
