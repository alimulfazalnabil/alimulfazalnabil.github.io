(() => {
  const root = document.documentElement;
  const themeToggle = document.getElementById("themeToggle");
  const menuToggle = document.getElementById("menuToggle");
  const mobileNav = document.getElementById("mobileNav");
  const year = document.getElementById("year");

  // 1. Theme Management (defaults to dark theme, respects localStorage & OS preference)
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

  // 2. Mobile Navigation Toggle & Accessibility
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

  // 3. Interactive Project Gallery Filtering
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

  // 4. Dynamic Year
  if (year) {
    year.textContent = String(new Date().getFullYear());
  }
})();