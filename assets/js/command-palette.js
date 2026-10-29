/**
 * Global Command Palette (Ctrl+K / ⌘K)
 * Fast client-side fuzzy search across all 27 projects, 9 categories,
 * 4 case studies, 14 core technologies, and career milestones.
 */
(() => {
  const COMMAND_ITEMS = [
    // Case Studies
    { type: "Case Study", title: "Enterprise RAG Knowledge Platform", url: "case-studies/enterprise-rag-platform.html", category: "GenAI & RAG", icon: "📄" },
    { type: "Case Study", title: "Autonomous Roadway Perception Pipeline", url: "case-studies/autonomous-lane-detection.html", category: "Computer Vision", icon: "📄" },
    { type: "Case Study", title: "Clinical Risk Prediction ML Microservice", url: "case-studies/heart-disease-prediction.html", category: "Machine Learning", icon: "📄" },
    { type: "Case Study", title: "Azure Terraform Infrastructure CI/CD", url: "case-studies/azure-terraform-cicd.html", category: "Cloud & DevOps", icon: "📄" },

    // Core Pages & Views
    { type: "Navigation", title: "Full Engineering Portfolio (27 Projects)", url: "portfolio.html", category: "Archive", icon: "📁" },
    { type: "Navigation", title: "Interactive Career Knowledge Graph", url: "portfolio.html?view=graph", category: "Graph", icon: "🕸️" },
    { type: "Navigation", title: "Download Resume / Profile PDF", url: "Profile.pdf", category: "Credentials", icon: "📥" },
    { type: "Navigation", title: "Contact & Recruitment Inquiry", url: "#contact", category: "Contact", icon: "✉️" },

    // 9 Categories
    { type: "Category", title: "Robotics and Embedded Systems (7 Projects)", url: "portfolio.html?domain=embedded", category: "Domain", icon: "🤖" },
    { type: "Category", title: "Computer Vision and Autonomous Systems (4 Projects)", url: "portfolio.html?domain=vision", category: "Domain", icon: "👁️" },
    { type: "Category", title: "Artificial Intelligence and Machine Learning (3 Projects)", url: "portfolio.html?domain=aiml", category: "Domain", icon: "🧠" },
    { type: "Category", title: "Cloud Computing and Data Engineering (4 Projects)", url: "portfolio.html?domain=cloud-data", category: "Domain", icon: "☁️" },
    { type: "Category", title: "Industrial Automation and Digital Twins (2 Projects)", url: "portfolio.html?domain=automation", category: "Domain", icon: "🏭" },
    { type: "Category", title: "Hardware Engineering and System Integration (1 Project)", url: "portfolio.html?domain=hardware", category: "Domain", icon: "🖥️" },
    { type: "Category", title: "Web Engineering and Automation (3 Projects)", url: "portfolio.html?domain=web", category: "Domain", icon: "🌐" },
    { type: "Category", title: "Smart Cities and Traffic Optimization (2 Projects)", url: "portfolio.html?domain=smartcity", category: "Domain", icon: "🚦" },
    { type: "Category", title: "Engineering Design and AutoCAD (1 Project)", url: "portfolio.html?domain=cad", category: "Domain", icon: "📐" },

    // Selected Projects
    { type: "Project", title: "PRJ-GENAI-001: Enterprise RAG Knowledge Intelligence Platform", url: "case-studies/enterprise-rag-platform.html", category: "AI & ML", icon: "⚡" },
    { type: "Project", title: "PRJ-CV-001: Autonomous Lane Detection Pipeline & CARLA Bridge", url: "case-studies/autonomous-lane-detection.html", category: "Vision", icon: "⚡" },
    { type: "Project", title: "PRJ-ML-001: Heart Disease Clinical Risk Prediction Platform", url: "case-studies/heart-disease-prediction.html", category: "AI & ML", icon: "⚡" },
    { type: "Project", title: "PRJ-CLOUD-001: Azure Terraform Infrastructure CI/CD Foundation", url: "case-studies/azure-terraform-cicd.html", category: "Cloud", icon: "⚡" },
    { type: "Project", title: "PRJ-CLOUD-002: Enterprise Web Portal for PGCB Engineers (Live on Render)", url: "https://pgcb-org-portal.onrender.com/", category: "Web", icon: "⚡" },
    { type: "Project", title: "PRJ-CLOUD-004: Custom PC Building & Workstation Design (10+ Years Practice)", url: "portfolio.html?domain=hardware", category: "Hardware", icon: "⚡" },
    { type: "Project", title: "PRJ-GENAI-002: MoviSabio Enterprise Smart City System (Private Repo)", url: "portfolio.html?domain=smartcity", category: "Smart Cities", icon: "🔒" },
    { type: "Project", title: "PRJ-GENAI-003: AI Traffic Signal Coordination with MAXBAND & DQN (Private Repo)", url: "portfolio.html?domain=smartcity", category: "Smart Cities", icon: "🔒" },
    { type: "Project", title: "PRJ-EMB-001: Solar-Powered Vehicle with Accident Detection (July–Nov 2021)", url: "portfolio.html?domain=embedded", category: "Robotics", icon: "⚡" },
    { type: "Project", title: "PRJ-DATA-003: Digital-Twin Concept for Industrial Energy Management", url: "portfolio.html?domain=automation", category: "Digital Twins", icon: "⚡" },

    // Technologies
    { type: "Skill", title: "Python 3.12+ (AsyncIO, PyTorch, PySpark, FastAPI)", url: "portfolio.html?q=python", category: "Tech", icon: "🛠️" },
    { type: "Skill", title: "Retrieval-Augmented Generation (RAG) & Hybrid BM25/Vector Search", url: "portfolio.html?q=rag", category: "Tech", icon: "🛠️" },
    { type: "Skill", title: "Microsoft Azure Cloud Platform & Kubernetes (AKS)", url: "portfolio.html?q=azure", category: "Tech", icon: "🛠️" },
    { type: "Skill", title: "Terraform Infrastructure as Code (IaC)", url: "portfolio.html?q=terraform", category: "Tech", icon: "🛠️" },
    { type: "Skill", title: "OpenCV & Computer Vision Perception Pipelines", url: "portfolio.html?q=opencv", category: "Tech", icon: "🛠️" },
    { type: "Skill", title: "PostgreSQL & pgvector High-Dimensional Indexing", url: "portfolio.html?q=pgvector", category: "Tech", icon: "🛠️" },
    { type: "Skill", title: "CARLA & SUMO Urban Traffic Autonomous Simulation", url: "portfolio.html?q=carla", category: "Tech", icon: "🛠️" }
  ];

  let modalBackdrop = null;
  let searchInput = null;
  let resultsContainer = null;
  let selectedIndex = 0;
  let filteredItems = [...COMMAND_ITEMS];

  function createCommandPaletteDOM() {
    if (document.getElementById("cmdPaletteBackdrop")) return;

    modalBackdrop = document.createElement("div");
    modalBackdrop.className = "cmd-palette-backdrop";
    modalBackdrop.id = "cmdPaletteBackdrop";
    modalBackdrop.hidden = true;
    modalBackdrop.style.display = "none";

    modalBackdrop.innerHTML = `
      <div class="cmd-palette-modal" role="dialog" aria-modal="true" aria-label="Command search palette">
        <div class="cmd-search-bar">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          <input type="text" class="cmd-search-input" id="cmdSearchInput" placeholder="Type a project, technology, case study, or domain..." autocomplete="off">
          <kbd class="cmd-close-kbd">ESC to close</kbd>
        </div>
        <div class="cmd-results-list" id="cmdResultsList" role="listbox"></div>
        <div class="cmd-footer">
          <div class="cmd-footer-keys">
            <span><kbd>↑</kbd> <kbd>↓</kbd> to navigate</span>
            <span><kbd>↵</kbd> to open</span>
            <span><kbd>ESC</kbd> to dismiss</span>
          </div>
          <span>Alimul Fazal Nabil · Verified Archive</span>
        </div>
      </div>
    `;

    document.body.appendChild(modalBackdrop);

    searchInput = document.getElementById("cmdSearchInput");
    resultsContainer = document.getElementById("cmdResultsList");

    searchInput.addEventListener("input", onSearchInput);
    searchInput.addEventListener("keydown", onSearchKeydown);

    modalBackdrop.addEventListener("click", (e) => {
      if (e.target === modalBackdrop) closePalette();
    });
  }

  function renderResults() {
    if (!resultsContainer) return;
    resultsContainer.innerHTML = "";

    if (filteredItems.length === 0) {
      resultsContainer.innerHTML = `
        <div style="padding: 32px 20px; text-align: center; color: var(--text-subtle);">
          No matching engineering records found. Try searching for "RAG", "Azure", "Vision", or "Robotics".
        </div>
      `;
      return;
    }

    // Group by item type
    let lastType = "";
    filteredItems.forEach((item, idx) => {
      if (item.type !== lastType) {
        lastType = item.type;
        const groupHeader = document.createElement("div");
        groupHeader.className = "cmd-results-group-label";
        groupHeader.textContent = item.type.toUpperCase();
        resultsContainer.appendChild(groupHeader);
      }

      const row = document.createElement("a");
      row.className = `cmd-result-item ${idx === selectedIndex ? "active" : ""}`;
      row.href = item.url;
      row.setAttribute("role", "option");
      row.setAttribute("aria-selected", String(idx === selectedIndex));

      row.innerHTML = `
        <div class="cmd-item-title-group">
          <span class="cmd-item-icon" aria-hidden="true">${item.icon}</span>
          <span class="cmd-item-title">${item.title}</span>
        </div>
        <span class="cmd-item-tag">${item.category}</span>
      `;

      row.addEventListener("mouseenter", () => {
        selectedIndex = idx;
        updateActiveItem();
      });

      row.addEventListener("click", () => {
        closePalette();
      });

      resultsContainer.appendChild(row);
    });

    scrollActiveIntoView();
  }

  function updateActiveItem() {
    const items = resultsContainer.querySelectorAll(".cmd-result-item");
    items.forEach((item, idx) => {
      item.classList.toggle("active", idx === selectedIndex);
      item.setAttribute("aria-selected", String(idx === selectedIndex));
    });
  }

  function scrollActiveIntoView() {
    const activeElem = resultsContainer.querySelector(".cmd-result-item.active");
    if (activeElem) {
      activeElem.scrollIntoView({ block: "nearest" });
    }
  }

  function onSearchInput(e) {
    const q = e.target.value.trim().toLowerCase();
    selectedIndex = 0;
    if (!q) {
      filteredItems = [...COMMAND_ITEMS];
    } else {
      filteredItems = COMMAND_ITEMS.filter(item =>
        item.title.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.type.toLowerCase().includes(q)
      );
    }
    renderResults();
  }

  function onSearchKeydown(e) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (filteredItems.length > 0) {
        selectedIndex = (selectedIndex + 1) % filteredItems.length;
        updateActiveItem();
        scrollActiveIntoView();
      }
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (filteredItems.length > 0) {
        selectedIndex = (selectedIndex - 1 + filteredItems.length) % filteredItems.length;
        updateActiveItem();
        scrollActiveIntoView();
      }
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filteredItems[selectedIndex]) {
        const targetUrl = filteredItems[selectedIndex].url;
        closePalette();
        window.location.href = targetUrl;
      }
    } else if (e.key === "Escape") {
      e.preventDefault();
      closePalette();
    }
  }

  function openPalette() {
    createCommandPaletteDOM();
    if (!modalBackdrop) return;
    modalBackdrop.hidden = false;
    modalBackdrop.removeAttribute("hidden");
    modalBackdrop.style.display = "flex";
    modalBackdrop.classList.add("open");
    filteredItems = [...COMMAND_ITEMS];
    selectedIndex = 0;
    if (searchInput) {
      searchInput.value = "";
      setTimeout(() => searchInput.focus(), 50);
    }
    renderResults();
    document.body.style.overflow = "hidden";
  }

  function closePalette() {
    if (!modalBackdrop) return;
    modalBackdrop.hidden = true;
    modalBackdrop.setAttribute("hidden", "true");
    modalBackdrop.style.display = "none";
    modalBackdrop.classList.remove("open");
    document.body.style.overflow = "";
  }

  // Global keydown: Ctrl+K, Cmd+K, or "/"
  document.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      if (modalBackdrop && !modalBackdrop.hidden && modalBackdrop.classList.contains("open")) {
        closePalette();
      } else {
        openPalette();
      }
    } else if (e.key === "/" && !["INPUT", "TEXTAREA"].includes(document.activeElement?.tagName)) {
      e.preventDefault();
      openPalette();
    }
  });

  // Wire search buttons in header and mobile nav
  window.addEventListener("DOMContentLoaded", () => {
    const openBtn = document.getElementById("openCommandPaletteBtn");
    if (openBtn) {
      openBtn.addEventListener("click", openPalette);
    }
    const openBtnMobile = document.getElementById("openCommandPaletteBtnMobile");
    if (openBtnMobile) {
      openBtnMobile.addEventListener("click", openPalette);
    }
  });

  window.commandPalette = { open: openPalette, close: closePalette };
})();
