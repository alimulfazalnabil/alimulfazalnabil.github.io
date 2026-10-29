/**
 * Interactive Features Script
 * Powers:
 * 1. Engineering Lifecycle Loop Interactive Explorer
 * 2. Before / After Architecture & Impact Showcase Tabs
 * 3. "You Be The AI Engineer" Scenario Decision Challenge
 * 4. Contact Intent Selector & Message Prefill
 * 5. Live Clock & Availability Status Capsule
 */
(() => {
  // ==========================================
  // 1. Engineering Lifecycle Loop
  // ==========================================
  const LIFECYCLE_STAGES = [
    {
      step: "01",
      name: "Scoping & SLAs",
      title: "01. Problem Scoping & Production SLA Contract",
      subtitle: "Deconstructing business intent into measurable latency, precision, and cost budgets.",
      deliverables: [
        "Quantified SLA definition: Target p95 latency (< 650ms), precision@k (> 0.90), recall threshold.",
        "Data sovereignty & governance review: Zero-data-retention compliance, PII masking rules.",
        "Compute & operational cost ceiling model: Cloud infra & vector storage cost estimation."
      ],
      metrics: "Target: p95 < 650ms | Cost: < $0.002 per query",
      tools: ["Product Spec", "Architecture RFC", "Cost Modeling", "SLA Agreement"]
    },
    {
      step: "02",
      name: "Architecture & IaC",
      title: "02. Zero-Drift Cloud Infrastructure as Code",
      subtitle: "Provisioning reproducible, secure virtual topologies before writing application code.",
      deliverables: [
        "Modular Terraform provisioning: Azure Virtual Network, Subnets, Network Security Groups.",
        "Container orchestration: Azure Kubernetes Service (AKS) or container runtime with managed identities.",
        "Security foundations: Azure Key Vault for secrets, Azure Container Registry, encrypted storage.",
        "Automated CI/CD validation: tflint, tfsec security scanning, and speculative plan runs in GitHub Actions."
      ],
      metrics: "Zero configuration drift | 100% reproducible environments",
      tools: ["Terraform", "Microsoft Azure", "GitHub Actions", "Azure Key Vault", "AKS"]
    },
    {
      step: "03",
      name: "Ingestion & Embeddings",
      title: "03. High-Performance Document Ingestion & Chunking",
      subtitle: "Transforming unstructured technical repositories into semantically coherent embeddings.",
      deliverables: [
        "Domain-aware semantic chunking: Header-aware markdown splitting, table extraction, code-block preservation.",
        "High-dimensional vector embedding: BAAI/bge-small-en-v1.5 and sentence-transformers.",
        "Relational vector database indexing: PostgreSQL with pgvector HNSW / IVFFlat indexes.",
        "Deduplication & metadata enrichment: Document hash verification, source URI attribution tags."
      ],
      metrics: "Zero duplicate ingestion | Multi-threaded batch ingestion pipeline",
      tools: ["Python 3.12", "PostgreSQL", "pgvector", "Hugging Face", "sentence-transformers"]
    },
    {
      step: "04",
      name: "RAG & Prototyping",
      title: "04. Hybrid Retrieval & Low-Latency Query Execution",
      subtitle: "Fusing sparse lexical search with dense semantic retrieval for robust retrieval.",
      deliverables: [
        "Hybrid Search Architecture: Parallel execution of BM25 (exact keyword match) and pgvector (semantic match).",
        "Rank Fusion: Reciprocal Rank Fusion (RRF with k=60) balancing specific technical jargon and conceptual questions.",
        "Context Window Optimization: Token budgeting and cross-encoder re-ranking to pass top-k relevant snippets.",
        "FastAPI Asynchronous Microservice: Sub-second streaming endpoints with connection pooling."
      ],
      metrics: "Recall@5: 96% | Sub-second streaming first-token latency",
      tools: ["FastAPI", "BM25", "pgvector RRF", "Python AsyncIO", "Redis Cache"]
    },
    {
      step: "05",
      name: "Evaluation & Guardrails",
      title: "05. Hallucination Gates & Automated Evaluation",
      subtitle: "Enforcing deterministic truthfulness checks before text ever reaches the user.",
      deliverables: [
        "Attribution Verification: Claim-by-claim citation verification against retrieved source chunks.",
        "Hallucination Filtering: Semantic similarity guardrails and confidence threshold rejection.",
        "Automated Regression Test Suite: Synthetic QA evaluation matrix verifying precision across edge cases.",
        "Security & Injection Defense: Prompt injection guards, system instruction immutability testing."
      ],
      metrics: "0% unverified citations | Strict rejection of ungrounded prompts",
      tools: ["Ragas Framework", "Pytest", "Attribution Validator", "Synthetic Eval Matrix"]
    },
    {
      step: "06",
      name: "MLOps & Observability",
      title: "06. Containerized Deployment & Telemetry Observability",
      subtitle: "Shipping production containers with full telemetry, tracing, and health monitoring.",
      deliverables: [
        "Docker Multi-Stage Builds: Ultra-lean production images (< 250MB) with non-root security profiles.",
        "Telemetry Instrumentation: Prometheus metrics (latency histograms, query counters) and health check endpoints.",
        "Centralized Log Aggregation: Structured JSON logging capturing retrieval latency, token consumption, and cache hits.",
        "Continuous Deployment: Zero-downtime rolling upgrades backed by automated health probes."
      ],
      metrics: "Sub-second p95 latency | 99.9% uptime target",
      tools: ["Docker", "Prometheus", "Grafana", "Azure Monitor", "GitHub Actions"]
    }
  ];

  function initLifecycleExplorer() {
    const stageTabsContainer = document.getElementById("lifecycleStageTabs");
    const detailCard = document.getElementById("lifecycleDetailCard");
    if (!stageTabsContainer || !detailCard) return;

    let activeIndex = 0;

    function renderStage(index) {
      activeIndex = index;
      const stage = LIFECYCLE_STAGES[index];

      // Update active tab buttons
      const buttons = stageTabsContainer.querySelectorAll(".lifecycle-tab-btn");
      buttons.forEach((btn, i) => {
        btn.classList.toggle("active", i === index);
        btn.setAttribute("aria-selected", i === index ? "true" : "false");
      });

      // Update detail card with smooth fade
      detailCard.classList.remove("fade-in");
      void detailCard.offsetWidth; // Trigger reflow
      detailCard.classList.add("fade-in");

      detailCard.innerHTML = `
        <div class="lifecycle-card-header">
          <div class="lifecycle-step-tag">STAGE ${stage.step} OF 06</div>
          <h3 class="lifecycle-stage-title">${stage.title}</h3>
          <p class="lifecycle-stage-sub">${stage.subtitle}</p>
        </div>

        <div class="lifecycle-card-body">
          <div class="lifecycle-block">
            <h4 class="lifecycle-block-heading">Core Engineering Deliverables</h4>
            <ul class="lifecycle-deliverables-list">
              ${stage.deliverables.map(item => `<li><span class="bullet-check">✓</span><span>${item}</span></li>`).join("")}
            </ul>
          </div>

          <div class="lifecycle-meta-grid">
            <div class="lifecycle-meta-item">
              <span class="meta-label">KEY TARGET & GUARDRAILS</span>
              <span class="meta-value">${stage.metrics}</span>
            </div>
            <div class="lifecycle-meta-item">
              <span class="meta-label">PRODUCTION TOOLS</span>
              <div class="meta-tags">
                ${stage.tools.map(tool => `<span class="meta-tag">${tool}</span>`).join("")}
              </div>
            </div>
          </div>
        </div>
      `;
    }

    // Build stage tab buttons
    stageTabsContainer.innerHTML = LIFECYCLE_STAGES.map((s, idx) => `
      <button class="lifecycle-tab-btn ${idx === 0 ? "active" : ""}" data-index="${idx}" role="tab" aria-selected="${idx === 0}">
        <span class="step-num">${s.step}</span>
        <span class="step-label">${s.name}</span>
      </button>
    `).join("");

    stageTabsContainer.addEventListener("click", (e) => {
      const btn = e.target.closest(".lifecycle-tab-btn");
      if (!btn) return;
      const idx = parseInt(btn.getAttribute("data-index"), 10);
      if (!isNaN(idx)) {
        renderStage(idx);
      }
    });

    // Render initial stage
    renderStage(0);
  }

  // ==========================================
  // 2. Before / After Architecture Showcase
  // ==========================================
  const COMPARISON_DATA = [
    {
      id: "rag",
      tabLabel: "Enterprise RAG",
      headline: "Knowledge Retrieval & Hallucination Suppression",
      projectCode: "PRJ-GENAI-001",
      caseStudyUrl: "case-studies/enterprise-rag-platform.html",
      before: {
        title: "Baseline Unstructured Search",
        points: [
          "Pure dense vector search misses exact technical serial codes and domain keywords.",
          "High hallucination risk: Large language models generate plausible yet ungrounded citations.",
          "Monolithic blocking queries causing unpredictable 4s–8s response spikes.",
          "Zero post-retrieval verification before presentation to end users."
        ],
        statusTag: "Unstable Baseline"
      },
      after: {
        title: "Hybrid RRF + Attribution Gates",
        points: [
          "Reciprocal Rank Fusion fuses BM25 lexical precision with pgvector semantic similarity.",
          "Attribution Gate: Sentence-level citation verification suppresses hallucinated claims.",
          "Asynchronous streaming microservice in FastAPI guarantees sub-second p95 latency.",
          "Strict evaluation matrix with automated regression checks on every deployment."
        ],
        statusTag: "Engineered Solution"
      },
      metrics: [
        { label: "p95 Latency", before: "4,200 ms", after: "< 650 ms", delta: "84% Faster" },
        { label: "Retrieval Recall@5", before: "68%", after: "96%", delta: "+28% Precision" },
        { label: "Citation Verification", before: "None", after: "100% Attributed", delta: "Zero Hallucinations" }
      ]
    },
    {
      id: "vision",
      tabLabel: "Autonomous Perception",
      headline: "Real-Time Roadway Lane Geometry & CARLA Bridge",
      projectCode: "PRJ-CV-001",
      caseStudyUrl: "case-studies/autonomous-lane-detection.html",
      before: {
        title: "Flat Image Processing",
        points: [
          "Direct camera perspective suffers from optical foreshortening and vanishing perspective distortion.",
          "Fixed RGB color thresholds fail catastrophically under variable shadows and sunlight glare.",
          "Standard edge detectors detect irrelevant trees and curbs instead of road lane markers.",
          "No mathematical vehicle center offset or roadway curvature radius calculated."
        ],
        statusTag: "Legacy Approach"
      },
      after: {
        title: "Inverse Mapping & 2nd-Order Polynomials",
        points: [
          "Pre-calibrated perspective matrix maps raw camera view to a high-fidelity bird's-eye projection.",
          "Adaptive color isolation in HLS & LAB color channels isolates yellow and white lane lines under all lighting.",
          "Sliding-window convolution fits smooth 2nd-order polynomial curves frame-by-frame.",
          "Real-time CARLA simulator bridge emits vehicle center offset and curvature radius telemetry."
        ],
        statusTag: "Engineered Solution"
      },
      metrics: [
        { label: "Processing Speed", before: "11 FPS", after: "30+ FPS Real-Time", delta: "Real-time Ready" },
        { label: "Glare Resilience", before: "Fails on shadows", after: "Adaptive Thresholding", delta: "Production Robust" },
        { label: "Trajectory Telemetry", before: "None", after: "Continuous Radius & Offset", delta: "Control-Ready" }
      ]
    },
    {
      id: "clinical",
      tabLabel: "Clinical Risk ML",
      headline: "Cardiovascular Risk ML Microservice with SHAP",
      projectCode: "PRJ-ML-001",
      caseStudyUrl: "case-studies/heart-disease-prediction.html",
      before: {
        title: "Standard Off-the-Shelf Classifier",
        points: [
          "Unbalanced patient class distributions lead to high false-negative rates in high-risk categories.",
          "Black-box model predictions offer clinicians zero interpretability on why a patient was flagged.",
          "Data preprocessing tightly coupled to training notebooks with no standalone inference pipeline.",
          "Absence of API contract or containerized deployment prevents clinical application integration."
        ],
        statusTag: "Notebook Prototype"
      },
      after: {
        title: "Statistically Calibrated + Explainable Microservice",
        points: [
          "Cross-validated ensemble benchmark (Random Forest, Logistic Regression, XGBoost) with SMOTE balancing.",
          "SHAP (SHapley Additive exPlanations) values provide individualized clinical feature importance.",
          "Production Scikit-learn Pipeline serializes all imputation, scaling, and transformation stages.",
          "FastAPI microservice packaged in Docker with OpenAPI documentation and health probes."
        ],
        statusTag: "Engineered Solution"
      },
      metrics: [
        { label: "ROC-AUC Score", before: "0.74", after: "0.91", delta: "+17% Discriminative Power" },
        { label: "Explainability", before: "Black Box", after: "SHAP Local & Global", delta: "Clinician-Ready" },
        { label: "Inference Deployment", before: "Jupyter Notebook", after: "Dockerized FastAPI REST API", delta: "Production Container" }
      ]
    }
  ];

  function initArchitectureShowcase() {
    const tabContainer = document.getElementById("impactTabContainer");
    const showcaseCard = document.getElementById("impactShowcaseCard");
    if (!tabContainer || !showcaseCard) return;

    function renderComparison(index) {
      const data = COMPARISON_DATA[index];

      // Update tabs
      const tabs = tabContainer.querySelectorAll(".impact-tab-btn");
      tabs.forEach((t, i) => {
        t.classList.toggle("active", i === index);
        t.setAttribute("aria-selected", i === index ? "true" : "false");
      });

      // Render showcase
      showcaseCard.classList.remove("fade-in");
      void showcaseCard.offsetWidth;
      showcaseCard.classList.add("fade-in");

      showcaseCard.innerHTML = `
        <div class="impact-card-top">
          <div class="impact-headline-wrap">
            <span class="impact-badge">${data.projectCode}</span>
            <h3 class="impact-headline">${data.headline}</h3>
          </div>
          <a href="${data.caseStudyUrl}" class="impact-case-link">View Full Case Study →</a>
        </div>

        <div class="impact-columns-grid">
          <!-- Before Column -->
          <div class="impact-column impact-before">
            <div class="impact-column-header">
              <span class="status-pill status-before">${data.before.statusTag}</span>
              <h4 class="impact-col-title">${data.before.title}</h4>
            </div>
            <ul class="impact-list">
              ${data.before.points.map(p => `<li><span class="impact-cross">✕</span><span>${p}</span></li>`).join("")}
            </ul>
          </div>

          <!-- After Column -->
          <div class="impact-column impact-after">
            <div class="impact-column-header">
              <span class="status-pill status-after">${data.after.statusTag}</span>
              <h4 class="impact-col-title">${data.after.title}</h4>
            </div>
            <ul class="impact-list">
              ${data.after.points.map(p => `<li><span class="impact-check">✓</span><span>${p}</span></li>`).join("")}
            </ul>
          </div>
        </div>

        <div class="impact-metrics-row">
          ${data.metrics.map(m => `
            <div class="impact-metric-card">
              <span class="metric-title">${m.label}</span>
              <div class="metric-comparison">
                <span class="val-before">${m.before}</span>
                <span class="metric-arrow">→</span>
                <span class="val-after">${m.after}</span>
              </div>
              <span class="metric-delta">${m.delta}</span>
            </div>
          `).join("")}
        </div>
      `;
    }

    tabContainer.innerHTML = COMPARISON_DATA.map((item, idx) => `
      <button class="impact-tab-btn ${idx === 0 ? "active" : ""}" data-index="${idx}" role="tab" aria-selected="${idx === 0}">
        ${item.tabLabel}
      </button>
    `).join("");

    tabContainer.addEventListener("click", (e) => {
      const btn = e.target.closest(".impact-tab-btn");
      if (!btn) return;
      const idx = parseInt(btn.getAttribute("data-index"), 10);
      if (!isNaN(idx)) {
        renderComparison(idx);
      }
    });

    renderComparison(0);
  }

  // ==========================================
  // 3. "You Be The AI Engineer" Scenario Challenge
  // ==========================================
  const SCENARIO_DATA = {
    scenarioText: "Your Enterprise RAG platform is retrieving verified knowledge from 250,000 internal technical manuals. However, during ambiguous user queries, the LLM occasionally fills gaps with plausible hallucinations. The Product Director demands zero hallucinations, while the VP of Engineering mandates maintaining < 650ms p95 latency. How do you engineer the solution?",
    options: [
      {
        id: "A",
        label: "Option A: Switch to a massive 1M-context model and stuff all related manuals into every raw prompt.",
        isCorrect: false,
        feedback: "<strong>Sub-optimal:</strong> Dumping massive document contexts into prompt windows drastically balloons p95 latency to > 6,000ms, multiplies token costs 20x, and suffers from the known 'lost in the middle' recall degradation problem."
      },
      {
        id: "B",
        label: "Option B: Two-Stage Hybrid RRF + Semantic Similarity Threshold + Claim Citation Verification Gate.",
        isCorrect: true,
        feedback: "<strong>Optimal Architecture:</strong> By executing BM25 and pgvector in parallel via Reciprocal Rank Fusion, setting an embedding distance threshold to reject ambiguous noise, and checking claims against retrieved sentence spans, you eliminate hallucinations while preserving < 650ms p95 latency."
      },
      {
        id: "C",
        label: "Option C: Remove the vector database and rely exclusively on system prompt instructions like 'Never lie'.",
        isCorrect: false,
        feedback: "<strong>Architectural Failure:</strong> Prompt instructions cannot overcome lack of domain knowledge. Without grounded retrieval and strict distance gates, the model will still hallucinate when queried on ungrounded technical specifics."
      }
    ]
  };

  function initScenarioChallenge() {
    const container = document.getElementById("scenarioChallengeContainer");
    if (!container) return;

    const optionsContainer = container.querySelector(".scenario-options");
    const feedbackBox = container.querySelector(".scenario-feedback");
    if (!optionsContainer || !feedbackBox) return;

    optionsContainer.addEventListener("click", (e) => {
      const btn = e.target.closest(".scenario-opt-btn");
      if (!btn) return;

      const optId = btn.getAttribute("data-opt");
      const option = SCENARIO_DATA.options.find(o => o.id === optId);
      if (!option) return;

      // Reset options styling
      const allBtns = optionsContainer.querySelectorAll(".scenario-opt-btn");
      allBtns.forEach(b => {
        b.classList.remove("selected-correct", "selected-incorrect");
      });

      if (option.isCorrect) {
        btn.classList.add("selected-correct");
        feedbackBox.className = "scenario-feedback feedback-correct fade-in";
        feedbackBox.innerHTML = `
          <div class="feedback-badge">✅ Optimal Architectural Choice</div>
          <p>${option.feedback}</p>
        `;
      } else {
        btn.classList.add("selected-incorrect");
        feedbackBox.className = "scenario-feedback feedback-incorrect fade-in";
        feedbackBox.innerHTML = `
          <div class="feedback-badge">⚠️ Architectural Tradeoff Issue</div>
          <p>${option.feedback}</p>
        `;
      }

      feedbackBox.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
  }

  // ==========================================
  // 4. Contact Intent Selector
  // ==========================================
  const INTENT_PRESETS = {
    hiring: {
      label: "💼 Hiring AI Solutions Engineer",
      subject: "Inquiry: AI Solutions Engineer Opportunity",
      message: "Hi Alimul,\n\nWe came across your verified portfolio and are interested in discussing an AI Solutions Engineer / MLOps role with our team.\n\nKey focus areas for this role:\n- \n\nLet's connect for an initial conversation."
    },
    rag: {
      label: "🤝 Enterprise RAG & Cloud Project",
      subject: "Project Collaboration: Enterprise RAG / Cloud Architecture",
      message: "Hi Alimul,\n\nWe are looking to design and implement a production RAG / cloud infrastructure system and would like to explore your availability.\n\nProject scope:\n- Target timeline:\n- Technical requirements:\n\nLooking forward to speaking."
    },
    vision: {
      label: "👁️ Computer Vision / Perception",
      subject: "Technical Inquiry: Computer Vision & Perception Pipeline",
      message: "Hi Alimul,\n\nI reviewed your Autonomous Lane Detection and Perception work and would like to discuss a computer vision / perception engineering project.\n\nDetails:\n- "
    },
    workshop: {
      label: "🎓 Mentorship & Tech Workshops",
      subject: "Speaking / Workshop / Mentorship Inquiry",
      message: "Hi Alimul,\n\nWe admire your work as an instructor at ReDI School Berlin and would like to invite you for a technical talk / workshop on:\n- Topic:\n- Audience:\n\nBest regards,"
    },
    general: {
      label: "💬 General Engineering Inquiry",
      subject: "Engineering Connection / Portfolio Feedback",
      message: "Hi Alimul,\n\nI was exploring your portfolio and wanted to reach out regarding:\n- \n\nGreat work on the engineering systems!"
    }
  };

  function initContactIntentSelector() {
    const chipsContainer = document.getElementById("contactIntentChips");
    const subjectInput = document.getElementById("contactSubject") || document.getElementById("subject");
    const messageTextarea = document.getElementById("contactMessage") || document.getElementById("message");
    if (!chipsContainer || !subjectInput || !messageTextarea) return;

    chipsContainer.addEventListener("click", (e) => {
      const chip = e.target.closest(".intent-chip");
      if (!chip) return;

      const intentKey = chip.getAttribute("data-intent");
      const preset = INTENT_PRESETS[intentKey];
      if (!preset) return;

      // Update chip active classes
      const allChips = chipsContainer.querySelectorAll(".intent-chip");
      allChips.forEach(c => c.classList.remove("active"));
      chip.classList.add("active");

      // Populate form
      subjectInput.value = preset.subject;
      messageTextarea.value = preset.message;

      // Flash feedback
      messageTextarea.focus();
    });
  }

  // ==========================================
  // 5. Live Clock & Availability Status Capsule
  // ==========================================
  function initLiveClock() {
    const clockEl = document.getElementById("liveClockTime");
    if (!clockEl) return;

    function updateTime() {
      // Display time in UTC+6 (Dhaka / current timezone)
      const now = new Date();
      // Format as 12-hour or 24-hour with timezone
      const timeStr = now.toLocaleTimeString("en-US", {
        timeZone: "Asia/Dhaka",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
      });
      clockEl.textContent = `${timeStr} (UTC+6)`;
    }

    updateTime();
    setInterval(updateTime, 1000);
  }

  // Initialize all features on DOM ready
  function initAll() {
    initLifecycleExplorer();
    initArchitectureShowcase();
    initScenarioChallenge();
    initContactIntentSelector();
    initLiveClock();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAll);
  } else {
    initAll();
  }
})();
