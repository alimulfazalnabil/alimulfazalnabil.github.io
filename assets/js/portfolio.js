/**
 * Alimul Fazal Nabil — Engineering Portfolio Archive Interactivity
 * Handles real-time search, multi-attribute domain & status filtering,
 * URL query synchronization, sorting, and keyboard accessibility.
 */
(() => {
  const searchInput = document.getElementById("archiveSearch");
  const clearSearchBtn = document.getElementById("clearSearchBtn");
  const domainButtons = document.querySelectorAll(".archive-filter-btn[data-domain]");
  const statusButtons = document.querySelectorAll(".status-pill-btn[data-status]");
  const sortSelect = document.getElementById("sortOrder");
  const resetBtn = document.getElementById("resetFiltersBtn");
  const emptyStateResetBtn = document.getElementById("emptyStateResetBtn");
  const emptyState = document.getElementById("archiveEmptyState");
  const visibleCountElem = document.getElementById("visibleCount");
  const cardsContainer = document.getElementById("archiveGrid");

  if (!cardsContainer) return;

  const cards = Array.from(cardsContainer.querySelectorAll(".archive-card"));
  const totalCount = cards.length;

  // State
  let currentDomain = "all";
  let currentStatus = "all";
  let currentQuery = "";
  let currentSort = "newest";

  // Pre-index card searchable text for lightning-fast search
  const cardData = cards.map((card, index) => {
    const title = (card.querySelector(".archive-card-title")?.textContent || "").toLowerCase();
    const desc = (card.querySelector(".archive-card-desc")?.textContent || "").toLowerCase();
    const contrib = (card.querySelector(".archive-card-contribution")?.textContent || "").toLowerCase();
    const tech = Array.from(card.querySelectorAll(".tech-chip")).map(c => c.textContent.toLowerCase()).join(" ");
    const domain = (card.dataset.domain || "").toLowerCase();
    const status = (card.dataset.status || "").toLowerCase();
    const yearStart = parseInt(card.dataset.yearStart || "2020", 10);
    const yearEnd = parseInt(card.dataset.yearEnd || "2026", 10);

    return {
      element: card,
      title,
      searchIndex: `${title} ${desc} ${contrib} ${tech} ${domain} ${status}`,
      domain,
      status,
      yearStart,
      yearEnd,
      originalIndex: index
    };
  });

  // Apply filters and sort
  function applyFilters() {
    const q = currentQuery.trim().toLowerCase();
    let visibleCount = 0;

    cardData.forEach((item) => {
      const matchesDomain = currentDomain === "all" || item.domain === currentDomain;
      const matchesStatus = currentStatus === "all" || item.status === currentStatus;
      const matchesSearch = !q || item.searchIndex.includes(q);

      const isVisible = matchesDomain && matchesStatus && matchesSearch;

      if (isVisible) {
        item.element.removeAttribute("hidden");
        item.element.style.display = "";
        visibleCount++;
      } else {
        item.element.setAttribute("hidden", "true");
        item.element.style.display = "none";
      }
    });

    // Update Counter
    if (visibleCountElem) {
      visibleCountElem.textContent = String(visibleCount);
    }

    // Toggle Empty State
    if (emptyState) {
      if (visibleCount === 0) {
        emptyState.removeAttribute("hidden");
        emptyState.style.display = "block";
      } else {
        emptyState.setAttribute("hidden", "true");
        emptyState.style.display = "none";
      }
    }

    // Toggle Clear Search Button
    if (clearSearchBtn) {
      clearSearchBtn.hidden = !currentQuery;
    }

    // Update URL query parameters
    updateUrlParams();
  }

  // Sort Cards
  function applySort() {
    const order = sortSelect ? sortSelect.value : "newest";
    currentSort = order;

    const sortedData = [...cardData].sort((a, b) => {
      if (order === "newest") {
        return b.yearEnd - a.yearEnd || b.yearStart - a.yearStart || a.originalIndex - b.originalIndex;
      } else if (order === "oldest") {
        return a.yearStart - b.yearStart || a.yearEnd - b.yearEnd || a.originalIndex - b.originalIndex;
      } else if (order === "title") {
        return a.title.localeCompare(b.title);
      }
      return 0;
    });

    // Re-append in sorted order (DOM API)
    sortedData.forEach(item => {
      cardsContainer.appendChild(item.element);
    });
  }

  function updateUrlParams() {
    try {
      const url = new URL(window.location.href);
      if (currentDomain && currentDomain !== "all") {
        url.searchParams.set("domain", currentDomain);
      } else {
        url.searchParams.delete("domain");
      }

      if (currentStatus && currentStatus !== "all") {
        url.searchParams.set("status", currentStatus);
      } else {
        url.searchParams.delete("status");
      }

      if (currentQuery) {
        url.searchParams.set("q", currentQuery);
      } else {
        url.searchParams.delete("q");
      }

      window.history.replaceState({}, "", url.toString());
    } catch (_) {}
  }

  function readUrlParams() {
    try {
      const url = new URL(window.location.href);
      const domainParam = url.searchParams.get("domain");
      const statusParam = url.searchParams.get("status");
      const queryParam = url.searchParams.get("q");

      if (domainParam) {
        const matchingBtn = document.querySelector(`.archive-filter-btn[data-domain="${domainParam}"]`);
        if (matchingBtn) {
          selectDomain(domainParam, matchingBtn);
        }
      }

      if (statusParam) {
        const matchingStatusBtn = document.querySelector(`.status-pill-btn[data-status="${statusParam}"]`);
        if (matchingStatusBtn) {
          selectStatus(statusParam, matchingStatusBtn);
        }
      }

      if (queryParam && searchInput) {
        searchInput.value = queryParam;
        currentQuery = queryParam;
      }
    } catch (_) {}
  }

  function selectDomain(domain, btn) {
    currentDomain = domain;
    domainButtons.forEach(b => {
      const isActive = b === btn;
      b.classList.toggle("active", isActive);
      b.setAttribute("aria-pressed", String(isActive));
    });
    applyFilters();
  }

  function selectStatus(status, btn) {
    currentStatus = status;
    statusButtons.forEach(b => {
      const isActive = b === btn;
      b.classList.toggle("active", isActive);
      b.setAttribute("aria-pressed", String(isActive));
    });
    applyFilters();
  }

  function resetAll() {
    currentDomain = "all";
    currentStatus = "all";
    currentQuery = "";
    if (searchInput) searchInput.value = "";

    const allDomainBtn = document.querySelector('.archive-filter-btn[data-domain="all"]');
    if (allDomainBtn) selectDomain("all", allDomainBtn);

    const allStatusBtn = document.querySelector('.status-pill-btn[data-status="all"]');
    if (allStatusBtn) selectStatus("all", allStatusBtn);

    applyFilters();
  }

  // Event Listeners
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentQuery = e.target.value;
      applyFilters();
    });

    searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        searchInput.value = "";
        currentQuery = "";
        applyFilters();
        searchInput.blur();
      }
    });
  }

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener("click", () => {
      if (searchInput) {
        searchInput.value = "";
        searchInput.focus();
      }
      currentQuery = "";
      applyFilters();
    });
  }

  domainButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      selectDomain(btn.dataset.domain, btn);
    });
  });

  statusButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      selectStatus(btn.dataset.status, btn);
    });
  });

  if (sortSelect) {
    sortSelect.addEventListener("change", () => {
      applySort();
    });
  }

  if (resetBtn) resetBtn.addEventListener("click", resetAll);
  if (emptyStateResetBtn) emptyStateResetBtn.addEventListener("click", resetAll);

  // View Switcher (Grid View vs Knowledge Graph)
  const viewGridBtn = document.getElementById("viewGridBtn");
  const viewGraphBtn = document.getElementById("viewGraphBtn");
  const archiveGrid = document.getElementById("archiveGrid");
  const archiveGraphView = document.getElementById("archiveGraphView");
  const emptyStateContainer = document.getElementById("archiveEmptyState");

  function switchView(mode) {
    const isGrid = mode === "grid";
    if (viewGridBtn) {
      viewGridBtn.classList.toggle("active", isGrid);
      viewGridBtn.setAttribute("aria-checked", String(isGrid));
    }
    if (viewGraphBtn) {
      viewGraphBtn.classList.toggle("active", !isGrid);
      viewGraphBtn.setAttribute("aria-checked", String(!isGrid));
    }

    if (archiveGrid) {
      if (isGrid) {
        archiveGrid.removeAttribute("hidden");
        archiveGrid.style.display = "";
      } else {
        archiveGrid.setAttribute("hidden", "true");
        archiveGrid.style.display = "none";
      }
    }

    if (archiveGraphView) {
      if (isGrid) {
        archiveGraphView.setAttribute("hidden", "true");
        archiveGraphView.style.display = "none";
      } else {
        archiveGraphView.removeAttribute("hidden");
        archiveGraphView.style.display = "";
        if (window.careerGraph && typeof window.careerGraph.init === "function") {
          window.careerGraph.init();
        }
      }
    }

    if (!isGrid && emptyStateContainer) {
      emptyStateContainer.setAttribute("hidden", "true");
      emptyStateContainer.style.display = "none";
    } else if (isGrid) {
      applyFilters();
    }

    try {
      const url = new URL(window.location.href);
      if (isGrid) {
        url.searchParams.delete("view");
      } else {
        url.searchParams.set("view", "graph");
      }
      window.history.replaceState({}, "", url.toString());
    } catch (_) {}
  }

  if (viewGridBtn) viewGridBtn.addEventListener("click", () => switchView("grid"));
  if (viewGraphBtn) viewGraphBtn.addEventListener("click", () => switchView("graph"));

  // Check URL for ?view=graph
  try {
    const url = new URL(window.location.href);
    if (url.searchParams.get("view") === "graph") {
      switchView("graph");
    }
  } catch (_) {}

  // Global Keyboard Shortcut: '/' to search
  document.addEventListener("keydown", (e) => {
    if (e.key === "/" && document.activeElement !== searchInput && !["INPUT", "TEXTAREA"].includes(document.activeElement?.tagName)) {
      e.preventDefault();
      searchInput?.focus();
    }
  });

  // Init
  readUrlParams();
  applyFilters();
})();
