(() => {
  const root = document.documentElement;
  const themeToggle = document.getElementById("themeToggle");
  const menuToggle = document.getElementById("menuToggle");
  const mobileNav = document.getElementById("mobileNav");
  const year = document.getElementById("year");

  // =========================================================================
  // 1. Theme Management (defaults to dark theme, respects localStorage & OS preference)
  // =========================================================================
  let savedTheme = null;
  try {
    savedTheme = localStorage.getItem("portfolio-theme");
  } catch (_) {}

  const initialTheme = savedTheme || "dark";
  root.dataset.theme = initialTheme;

  function updateThemeButton() {
    const isDark = root.dataset.theme === "dark";
    if (themeToggle) {
      themeToggle.setAttribute("aria-label", isDark ? "Switch to light theme" : "Switch to dark theme");
      themeToggle.setAttribute("title", isDark ? "Switch to light theme" : "Switch to dark theme");
    }
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) {
      metaTheme.setAttribute("content", isDark ? "#070913" : "#f8fafc");
    }
  }
  updateThemeButton();

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
      root.dataset.theme = nextTheme;
      try {
        localStorage.setItem("portfolio-theme", nextTheme);
      } catch (_) {}
      updateThemeButton();
    });
  }

  // =========================================================================
  // 2. Bilingual Translation Dictionary (English / German)
  // =========================================================================
  const I18N = {
    en: {
      navAbout: "About",
      navFeatured: "Featured",
      navProjects: "Selected Projects",
      navExperience: "Experience",
      navEducation: "Education & Credentials",
      navMore: "More",
      navSkills: "Skills & Capabilities",
      navServices: "Professional Services",
      navEstimator: "Budget Estimator",
      navProposal: "AI Proposal Generator",
      navPortfolio: "Full Portfolio (27 Projects) ↗",
      navContact: "Contact",
      navResume: "Resume (PDF) ↓",
      navSearch: "Search",
      navSearchMobile: "Search Portfolio & Skills",
      statusAvailable: "AVAILABLE FOR RELEVANT OPPORTUNITIES",
      navPortfolioOverview: "Overview",
      navPortfolioAll: "All Projects (27)"
    },
    de: {
      navAbout: "Über mich",
      navFeatured: "Highlights",
      navProjects: "Ausgewählte Projekte",
      navExperience: "Berufserfahrung",
      navEducation: "Ausbildung & Qualifikationen",
      navMore: "Mehr",
      navSkills: "Fähigkeiten & Matrix",
      navServices: "Dienstleistungen",
      navEstimator: "Kosten-Kalkulator",
      navProposal: "KI-Angebotsersteller",
      navPortfolio: "Vollständiges Portfolio (27) ↗",
      navContact: "Kontakt",
      navResume: "Lebenslauf (PDF) ↓",
      navSearch: "Suche",
      navSearchMobile: "Portfolio & Fähigkeiten durchsuchen",
      statusAvailable: "VERFÜGBAR FÜR RELEVANTE PROJEKTE",
      navPortfolioOverview: "Übersicht",
      navPortfolioAll: "Alle Projekte (27)"
    }
  };

  let currentLang = "en";
  try {
    const savedLang = localStorage.getItem("portfolio-lang");
    if (savedLang === "de" || savedLang === "en") {
      currentLang = savedLang;
    }
  } catch (_) {}

  function applyLanguage(lang) {
    currentLang = lang;
    root.setAttribute("lang", lang);
    try {
      localStorage.setItem("portfolio-lang", lang);
    } catch (_) {}

    // Update all elements with data-i18n
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (I18N[lang] && I18N[lang][key]) {
        el.textContent = I18N[lang][key];
      }
    });

    // Update language switcher buttons state
    const allLangButtons = document.querySelectorAll(".lang-btn[data-lang]");
    allLangButtons.forEach((btn) => {
      const isSelected = btn.getAttribute("data-lang") === lang;
      btn.classList.toggle("active", isSelected);
      btn.setAttribute("aria-pressed", String(isSelected));
    });

    // Dispatch event for other components if needed
    window.dispatchEvent(new CustomEvent("portfolio-language-changed", { detail: { lang } }));
  }

  // Bind clicks on all language switcher buttons (desktop + mobile)
  const langButtons = document.querySelectorAll(".lang-btn[data-lang]");
  langButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetLang = btn.getAttribute("data-lang");
      if (targetLang && targetLang !== currentLang) {
        applyLanguage(targetLang);
      }
    });
  });

  // Apply initial language on page load
  applyLanguage(currentLang);

  // =========================================================================
  // 3. More Dropdown Management (Click, Outside Click, Escape, Keyboard Navigation)
  // =========================================================================
  const navMoreWrap = document.getElementById("navMoreWrap");
  const navMoreBtn = document.getElementById("navMoreBtn");
  const navMoreMenu = document.getElementById("navMoreMenu");

  function openMoreMenu() {
    if (!navMoreBtn || !navMoreMenu) return;
    navMoreMenu.hidden = false;
    navMoreBtn.setAttribute("aria-expanded", "true");
  }

  function closeMoreMenu(returnFocus = false) {
    if (!navMoreBtn || !navMoreMenu) return;
    navMoreMenu.hidden = true;
    navMoreBtn.setAttribute("aria-expanded", "false");
    if (returnFocus) {
      navMoreBtn.focus();
    }
  }

  function isMoreMenuOpen() {
    return navMoreMenu && !navMoreMenu.hidden;
  }

  if (navMoreBtn && navMoreMenu && navMoreWrap) {
    navMoreBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      if (isMoreMenuOpen()) {
        closeMoreMenu();
      } else {
        openMoreMenu();
      }
    });

    // Close when clicking outside
    document.addEventListener("click", (e) => {
      if (isMoreMenuOpen() && !navMoreWrap.contains(e.target)) {
        closeMoreMenu();
      }
    });

    // Close when clicking any menuitem inside dropdown
    navMoreMenu.querySelectorAll("a").forEach((item) => {
      item.addEventListener("click", () => {
        closeMoreMenu();
      });
    });

    // Keyboard navigation inside dropdown
    navMoreWrap.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        if (isMoreMenuOpen()) {
          e.preventDefault();
          closeMoreMenu(true);
        }
        return;
      }

      if (!isMoreMenuOpen()) {
        if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openMoreMenu();
          const firstVisible = getVisibleMenuItems()[0];
          if (firstVisible) firstVisible.focus();
        }
        return;
      }

      const visibleItems = getVisibleMenuItems();
      if (!visibleItems.length) return;

      const currentIndex = visibleItems.indexOf(document.activeElement);

      if (e.key === "ArrowDown") {
        e.preventDefault();
        const nextIndex = (currentIndex + 1) % visibleItems.length;
        visibleItems[nextIndex].focus();
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        const prevIndex = (currentIndex - 1 + visibleItems.length) % visibleItems.length;
        visibleItems[prevIndex].focus();
      } else if (e.key === "Home") {
        e.preventDefault();
        visibleItems[0].focus();
      } else if (e.key === "End") {
        e.preventDefault();
        visibleItems[visibleItems.length - 1].focus();
      } else if (e.key === "Tab") {
        setTimeout(() => {
          if (!navMoreWrap.contains(document.activeElement)) {
            closeMoreMenu();
          }
        }, 10);
      }
    });

    function getVisibleMenuItems() {
      if (!navMoreMenu) return [];
      return Array.from(navMoreMenu.querySelectorAll("a[role='menuitem']")).filter((el) => {
        return window.getComputedStyle(el).display !== "none";
      });
    }
  }

  // =========================================================================
  // 4. ScrollSpy & Active Link Indicator
  // =========================================================================
  const sectionIds = [
    "home",
    "about",
    "featured",
    "projects",
    "experience",
    "education",
    "skills",
    "services",
    "estimator",
    "proposal-generator",
    "contact"
  ];

  const sectionsToTrack = sectionIds
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  function updateActiveNav() {
    if (!sectionsToTrack.length) return;

    const scrollY = window.scrollY;
    const headerOffset = 130;
    let currentId = null;

    // Check from bottom to top for best match
    for (let i = sectionsToTrack.length - 1; i >= 0; i--) {
      const section = sectionsToTrack[i];
      const top = section.offsetTop - headerOffset;
      if (scrollY >= top) {
        currentId = section.id;
        break;
      }
    }

    if (!currentId && sectionsToTrack.length) {
      currentId = sectionsToTrack[0].id;
    }

    // Clear previous active states
    const allNavLinks = document.querySelectorAll(
      ".desktop-nav a, .nav-dropdown-menu a, .mobile-nav a"
    );
    allNavLinks.forEach((link) => {
      link.classList.remove("active");
      link.removeAttribute("aria-current");
    });

    if (navMoreBtn) {
      navMoreBtn.classList.remove("has-active-child", "active");
    }

    if (!currentId) return;

    // Update active in desktop nav
    const activeDesktopLinks = document.querySelectorAll(
      `.desktop-nav a[href="#${currentId}"]`
    );
    let matchedVisibleDesktop = false;

    activeDesktopLinks.forEach((link) => {
      if (link.offsetParent !== null) {
        link.classList.add("active");
        link.setAttribute("aria-current", "page");
        matchedVisibleDesktop = true;
      }
    });

    // Update active in dropdown
    const activeDropdownItems = document.querySelectorAll(
      `.nav-dropdown-menu a[href="#${currentId}"]`
    );
    activeDropdownItems.forEach((item) => {
      item.classList.add("active");
      item.setAttribute("aria-current", "page");
      if (navMoreBtn) {
        navMoreBtn.classList.add("has-active-child");
      }
    });

    // If section wasn't visible in desktop nav (e.g. collapsed or overflow), mark More
    if (!matchedVisibleDesktop && activeDropdownItems.length && navMoreBtn) {
      navMoreBtn.classList.add("has-active-child");
    }

    // Update active in mobile nav
    const activeMobileLinks = document.querySelectorAll(
      `.mobile-nav a[href="#${currentId}"]`
    );
    activeMobileLinks.forEach((link) => {
      link.classList.add("active");
    });
  }

  let scrollThrottle = false;
  window.addEventListener(
    "scroll",
    () => {
      if (!scrollThrottle) {
        window.requestAnimationFrame(() => {
          updateActiveNav();
          scrollThrottle = false;
        });
        scrollThrottle = true;
      }
    },
    { passive: true }
  );

  // Initial call on page load
  updateActiveNav();

  // =========================================================================
  // 5. Mobile Navigation Toggle & Accessibility
  // =========================================================================
  function closeMenu() {
    if (!mobileNav || !menuToggle) return;
    mobileNav.hidden = true;
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
  }

  if (menuToggle && mobileNav) {
    menuToggle.addEventListener("click", () => {
      const willOpen = mobileNav.hidden;
      mobileNav.hidden = !willOpen;
      menuToggle.setAttribute("aria-expanded", String(willOpen));
      menuToggle.setAttribute("aria-label", willOpen ? "Close navigation" : "Open navigation");
    });

    mobileNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && !mobileNav.hidden) {
        closeMenu();
        menuToggle.focus();
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) closeMenu();
    });
  }

  // =========================================================================
  // 6. Interactive Project Gallery Filtering
  // =========================================================================
  const filterButtons = document.querySelectorAll(".filter-btn[data-filter]");
  const projectCards = document.querySelectorAll("#projectGrid .gallery-card[data-category]");

  if (filterButtons.length && projectCards.length) {
    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const selectedFilter = button.dataset.filter;

        filterButtons.forEach((btn) => {
          const isActive = btn === button;
          btn.classList.toggle("active", isActive);
          btn.setAttribute("aria-pressed", String(isActive));
        });

        projectCards.forEach((card) => {
          const cardCategory = card.dataset.category;
          const shouldShow =
            selectedFilter === "all" ||
            cardCategory === selectedFilter ||
            cardCategory === "all";

          if (shouldShow) {
            card.removeAttribute("hidden");
            card.style.display = "";
          } else {
            card.setAttribute("hidden", "true");
            card.style.display = "none";
          }
        });
      });
    });
  }

  // =========================================================================
  // 7. Dynamic Year
  // =========================================================================
  if (year) {
    year.textContent = String(new Date().getFullYear());
  }
})();