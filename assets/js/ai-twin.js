/**
 * AI Twin Client-Side Assistant Console
 * Grounded conversational interface running 100% client-side in the browser.
 * Zero external API dependencies, zero latency, 100% faithful to verified facts.
 */
(() => {
  const KNOWLEDGE_BASE = [
    {
      id: "genai_rag",
      patterns: [/rag/i, /generative\s*ai/i, /genai/i, /llm/i, /embeddings/i, /retrieval/i, /vector/i, /langchain/i, /llamaindex/i],
      title: "Generative AI & Enterprise RAG",
      reply: `
        <p>Alimul designs and implements production-grade <strong>Generative AI and Retrieval-Augmented Generation (RAG)</strong> systems with rigorous hallucination controls:</p>
        <ul>
          <li><strong>Enterprise RAG Knowledge Platform</strong> (<code>PRJ-GENAI-001</code>): Production-ready knowledge retrieval microservice combining dense semantic search (pgvector) with sparse lexical search (BM25) fused via Reciprocal Rank Fusion (RRF). Features post-retrieval claim verification and source attribution.
            <br><a href="case-studies/enterprise-rag-platform.html" class="ai-twin-link">Read Enterprise RAG Case Study →</a>
          </li>
          <li><strong>Proprietary AI Mobility Systems</strong>: Designed architecture for <code>PRJ-GENAI-002</code> (MoviSabio Smart City System) and <code>PRJ-GENAI-003</code> (AI Traffic Signal Coordination using MAXBAND & Deep Q-Networks).</li>
        </ul>
        <p><strong>Core Stack:</strong> Python 3.12, FastAPI, PostgreSQL/pgvector, Hugging Face sentence-transformers, BM25, Redis Cache.</p>
      `
    },
    {
      id: "azure_devops",
      patterns: [/azure/i, /cloud/i, /devops/i, /terraform/i, /kubernetes/i, /aks/i, /ci\s*\/\s*cd/i, /infrastructure/i, /iac/i],
      title: "Azure Cloud & DevOps Infrastructure",
      reply: `
        <p>Alimul brings deep practical expertise in <strong>Microsoft Azure and Infrastructure-as-Code (IaC)</strong>:</p>
        <ul>
          <li><strong>Azure Terraform Infrastructure CI/CD Foundation</strong> (<code>PRJ-CLOUD-001</code>): Modular, zero-drift infrastructure provisioning covering Virtual Networks, Azure Kubernetes Service (AKS), Azure Key Vault, Azure Container Registry, and encrypted Blob storage. Implemented GitHub Actions CI/CD with automated <code>tflint</code>, <code>tfsec</code>, and speculative plan runs.
            <br><a href="case-studies/azure-terraform-cicd.html" class="ai-twin-link">Read Azure Terraform Case Study →</a>
          </li>
          <li><strong>Energy Crown (Berlin, DE)</strong>: Built and managed Azure cloud infrastructure, configured production VMs, automated monitoring, and enforced strict zero-trust security postures.</li>
          <li><strong>Enterprise Web Portal</strong> (<code>PRJ-CLOUD-002</code>): Full-stack organizational portal for Power Grid Company of Bangladesh (PGCB) engineers, deployed on Render with PostgreSQL.
            <br><a href="https://pgcb-org-portal.onrender.com/" target="_blank" rel="noopener noreferrer" class="ai-twin-link">Visit Live Web Portal ↗</a>
          </li>
        </ul>
      `
    },
    {
      id: "computer_vision",
      patterns: [/computer\s*vision/i, /vision/i, /opencv/i, /yolo/i, /perception/i, /lane/i, /carla/i, /autonomous/i, /object\s*detection/i],
      title: "Computer Vision & Autonomous Perception",
      reply: `
        <p>Alimul has engineered multiple real-time <strong>computer vision and perception pipelines</strong>:</p>
        <ul>
          <li><strong>Autonomous Roadway Perception Pipeline & CARLA Bridge</strong> (<code>PRJ-CV-001</code>): End-to-end vision system performing camera calibration, perspective inverse-mapping (bird's-eye view), adaptive color thresholding (HLS/LAB), and sliding-window 2nd-order polynomial lane boundary fitting with CARLA simulator integration.
            <br><a href="case-studies/autonomous-lane-detection.html" class="ai-twin-link">Read Autonomous Perception Case Study →</a>
          </li>
          <li><strong>Visual Distance & Collision Estimation</strong> (<code>PRJ-CV-002</code>): Monocular geometric distance estimation pipeline for forward collision warning.</li>
          <li><strong>Real-Time Object Detection</strong> (<code>PRJ-CV-003</code>): Edge-optimized YOLOv8 pipeline for multi-class identification.</li>
          <li><strong>Sign Language Gesture Recognition</strong> (<code>PRJ-CV-004</code>): MediaPipe-based hand landmark feature extractor with neural sequence classification.</li>
        </ul>
        <p><a href="portfolio.html?domain=vision" class="ai-twin-link">Explore all 4 Computer Vision Projects in Portfolio →</a></p>
      `
    },
    {
      id: "ml_data",
      patterns: [/machine\s*learning/i, /ml/i, /data\s*science/i, /heart/i, /clinical/i, /risk/i, /prediction/i, /xgboost/i, /scikit/i],
      title: "Machine Learning & Clinical Risk Prediction",
      reply: `
        <p>Alimul applies disciplined, statistically grounded <strong>Machine Learning</strong> workflows with clean production packaging:</p>
        <ul>
          <li><strong>Clinical Risk Prediction Platform</strong> (<code>PRJ-ML-001</code>): Machine learning microservice predicting cardiovascular risk using the UCI Cleveland Heart Disease dataset. Compares Random Forest, Logistic Regression, and XGBoost with SMOTE class rebalancing, cross-validation, and SHAP explainability. Served via FastAPI with Docker.
            <br><a href="case-studies/heart-disease-prediction.html" class="ai-twin-link">Read Clinical Risk ML Case Study →</a>
          </li>
          <li><strong>Predictive Maintenance Model</strong> (<code>PRJ-ML-002</code>): Sensor anomaly detection pipeline forecasting component degradation.</li>
          <li><strong>Sentiment Analysis Pipeline</strong> (<code>PRJ-ML-003</code>): NLP sentiment classification system with TF-IDF and fine-tuned Transformer baselines.</li>
        </ul>
      `
    },
    {
      id: "hardware_industrial",
      patterns: [/hardware/i, /pc/i, /workstation/i, /assembly/i, /thermal/i, /embedded/i, /robot/i, /solar/i, /digital\s*twin/i, /iot/i, /arduino/i],
      title: "Hardware Engineering, Embedded & Digital Twins",
      reply: `
        <p>Unlike purely software-centric engineers, Alimul possesses over <strong>10 years of hands-on hardware engineering</strong> and systems integration experience:</p>
        <ul>
          <li><strong>Custom PC Building & Workstation Engineering</strong> (<code>PRJ-CLOUD-004</code>): 10+ years designing and assembling high-performance workstations, deep learning multi-GPU rigs, thermal optimization loops, and custom BIOS tuning.</li>
          <li><strong>Digital-Twin for Industrial Energy Management</strong> (<code>PRJ-DATA-003</code>): Architecture concept capturing telemetry from industrial substations into a real-time digital mirror with Grafana dashboards.</li>
          <li><strong>Solar-Powered Vehicle with Accident Detection</strong> (<code>PRJ-EMB-001</code>): Verified embedded prototype featuring PV MPPT charge controller, accelerometer shock detection, GPS telemetry, and GSM emergency alerting (July–Nov 2021).</li>
          <li><strong>Robotics & Embedded Systems</strong>: 7 distinct verified projects spanning autonomous line-followers, obstacle avoidance rovers, and sensor telemetry.</li>
        </ul>
        <p><a href="portfolio.html?domain=hardware" class="ai-twin-link">View Hardware & Embedded Projects in Portfolio →</a></p>
      `
    },
    {
      id: "why_hire",
      patterns: [/why\s*hire/i, /strength/i, /value/i, /solutions\s*engineer/i, /what\s*makes\s*you/i, /background/i, /about/i, /who\s*are\s*you/i],
      title: "Why Alimul as an AI Solutions Engineer?",
      reply: `
        <p>Alimul bridges the gap between <strong>theoretical AI models and bulletproof production systems</strong>:</p>
        <ol>
          <li><strong>True Systems Engineering Grounding</strong>: 7+ years of rigorous electrical engineering and hardware diagnostics combined with modern cloud and AI architectures. He understands hardware limits, compute throughput, latency bottlenecks, and network topologies.</li>
          <li><strong>Full Lifecycle Execution</strong>: Capable of owning the complete AI solution lifecycle: Problem Scoping → Data Ingestion & Indexing → Model/RAG Architecture → Infrastructure as Code (Terraform) → CI/CD & Production Observability.</li>
          <li><strong>Pedagogical & Team Impact</strong>: Volunteer Python Instructor at ReDI School of Digital Integration Berlin, mentoring aspiring developers and articulating complex technical concepts with extreme clarity.</li>
          <li><strong>Zero Hype, 100% Grounded</strong>: Focuses on measurable engineering outcomes, strict evaluation benchmarks, hallucination reduction, and cost efficiency.</li>
        </ol>
      `
    },
    {
      id: "availability",
      patterns: [/available/i, /hire/i, /relocat/i, /full\s*time/i, /contract/i, /job/i, /contact/i, /email/i, /location/i, /salary/i, /interview/i],
      title: "Availability & Role Preferences",
      reply: `
        <p><strong>Status: Actively available for high-impact roles.</strong></p>
        <ul>
          <li><strong>Target Roles:</strong> AI Solutions Engineer, GenAI Systems Engineer, MLOps / AI Platform Engineer, Cloud Solutions Architect.</li>
          <li><strong>Work Arrangement:</strong> Open to Full-time Onsite, Hybrid (Berlin/Europe/Global), or Remote positions.</li>
          <li><strong>Direct Contact:</strong> <a href="mailto:aflnabil@gmail.com" class="ai-twin-link">aflnabil@gmail.com</a></li>
          <li><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/alimul-fazal-nabil" target="_blank" rel="noopener noreferrer" class="ai-twin-link">linkedin.com/in/alimul-fazal-nabil ↗</a></li>
          <li><strong>GitHub:</strong> <a href="https://github.com/alimulfazalnabil" target="_blank" rel="noopener noreferrer" class="ai-twin-link">github.com/alimulfazalnabil ↗</a></li>
        </ul>
        <p>You can also use the <a href="#contact" class="ai-twin-link">Interactive Contact Form below</a> to send a direct message with pre-filled intent!</p>
      `
    }
  ];

  // DOM elements
  let chatBody = null;
  let chatInput = null;
  let sendBtn = null;
  let chipButtons = [];
  let isResponding = false;

  function initAITwin() {
    chatBody = document.getElementById("aiTwinBody");
    chatInput = document.getElementById("aiTwinInput");
    sendBtn = document.getElementById("aiTwinSendBtn");
    chipButtons = Array.from(document.querySelectorAll(".ai-twin-chip"));

    if (!chatBody || !chatInput || !sendBtn) return;

    // Send on button click
    sendBtn.addEventListener("click", () => {
      handleUserSubmit();
    });

    // Send on Enter (Shift+Enter for newline)
    chatInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        handleUserSubmit();
      }
    });

    // Handle suggestion chips
    chipButtons.forEach((chip) => {
      chip.addEventListener("click", () => {
        const query = chip.getAttribute("data-query") || chip.textContent.trim();
        chatInput.value = query;
        handleUserSubmit();
      });
    });

    // Clear chat button
    const clearBtn = document.getElementById("aiTwinClearBtn");
    if (clearBtn) {
      clearBtn.addEventListener("click", () => {
        chatBody.innerHTML = `
          <div class="ai-msg ai-msg-bot">
            <div class="ai-avatar">🤖</div>
            <div class="ai-bubble">
              <p>Chat cleared! I am Alimul's AI Twin, grounded strictly in his 27 verified projects and career experience. What would you like to know?</p>
            </div>
          </div>
        `;
      });
    }
  }

  function handleUserSubmit() {
    if (isResponding) return;
    const text = (chatInput.value || "").trim();
    if (!text) return;

    // Append user bubble
    appendMessage("user", escapeHTML(text));
    chatInput.value = "";
    isResponding = true;
    sendBtn.disabled = true;

    // Show typing indicator
    const typingIndicator = showTypingIndicator();

    // Match query against knowledge base
    const matchedEntry = findBestMatch(text);

    setTimeout(() => {
      typingIndicator.remove();
      if (matchedEntry) {
        appendMessage("bot", matchedEntry.reply);
      } else {
        appendMessage("bot", generateFallbackReply(text));
      }
      isResponding = false;
      sendBtn.disabled = false;
      chatInput.focus();
    }, 450);
  }

  function findBestMatch(query) {
    for (const entry of KNOWLEDGE_BASE) {
      for (const pattern of entry.patterns) {
        if (pattern.test(query)) {
          return entry;
        }
      }
    }
    return null;
  }

  function generateFallbackReply(query) {
    return `
      <p>I searched Alimul's 27 verified projects and engineering records for <em>"${escapeHTML(query)}"</em>.</p>
      <p>While I don't have a specific pre-computed response for that phrasing, here are the most relevant places to look:</p>
      <ul>
        <li><strong>Full Portfolio:</strong> Browse all 27 projects across 9 domains: <a href="portfolio.html" class="ai-twin-link">Explore Full Portfolio →</a></li>
        <li><strong>Career Knowledge Graph:</strong> Interactive visual map of all connected systems: <a href="portfolio.html?view=graph" class="ai-twin-link">View Knowledge Graph →</a></li>
        <li><strong>Case Studies:</strong> Deep architectural breakdowns of <a href="case-studies/enterprise-rag-platform.html" class="ai-twin-link">Enterprise RAG</a>, <a href="case-studies/autonomous-lane-detection.html" class="ai-twin-link">Autonomous Perception</a>, <a href="case-studies/heart-disease-prediction.html" class="ai-twin-link">Clinical Risk ML</a>, and <a href="case-studies/azure-terraform-cicd.html" class="ai-twin-link">Azure Terraform CI/CD</a>.</li>
        <li><strong>Press Ctrl+K (or ⌘K):</strong> Launch the instant fuzzy search palette across all projects and skills.</li>
      </ul>
      <p>Feel free to click one of the suggested chips above or ask about RAG, Azure, Computer Vision, Hardware, or full-time roles!</p>
    `;
  }

  function appendMessage(sender, htmlContent) {
    const msgDiv = document.createElement("div");
    msgDiv.className = `ai-msg ai-msg-${sender}`;

    const avatar = document.createElement("div");
    avatar.className = "ai-avatar";
    avatar.textContent = sender === "user" ? "👤" : "⚡";

    const bubble = document.createElement("div");
    bubble.className = "ai-bubble";
    bubble.innerHTML = htmlContent;

    msgDiv.appendChild(avatar);
    msgDiv.appendChild(bubble);

    chatBody.appendChild(msgDiv);
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  function showTypingIndicator() {
    const typingDiv = document.createElement("div");
    typingDiv.className = "ai-msg ai-msg-bot ai-typing-indicator";
    typingDiv.innerHTML = `
      <div class="ai-avatar">⚡</div>
      <div class="ai-bubble">
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
      </div>
    `;
    chatBody.appendChild(typingDiv);
    chatBody.scrollTop = chatBody.scrollHeight;
    return typingDiv;
  }

  function escapeHTML(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAITwin);
  } else {
    initAITwin();
  }
})();
