/**
 * ============================================================================
 * Media Showcase Slider Controller (media-showcase.js)
 * Implements an interactive editorial slider with category filtering,
 * keyboard controls, mobile touch swipe, thumbnails, and full-screen lightbox.
 * ============================================================================
 */

(() => {
  // Guard: Ensure MEDIA_ITEMS exists
  if (typeof MEDIA_ITEMS === "undefined" || !Array.isArray(MEDIA_ITEMS) || !MEDIA_ITEMS.length) {
    return;
  }

  // DOM Elements
  const stage = document.getElementById("mediaSliderStage");
  const filterBar = document.getElementById("mediaFilterBar");
  const mediaFrame = document.getElementById("mediaFrame");
  const mediaCatBadge = document.getElementById("mediaCatBadge");
  const mediaTypeBadge = document.getElementById("mediaTypeBadge");
  const mediaTypeLabel = document.getElementById("mediaTypeLabel");
  const mediaZoomBtn = document.getElementById("mediaZoomBtn");
  const mediaSlideCounter = document.getElementById("mediaSlideCounter");
  const mediaDateBadge = document.getElementById("mediaDateBadge");
  const mediaTitle = document.getElementById("mediaTitle");
  const mediaCaption = document.getElementById("mediaCaption");
  const mediaDescription = document.getElementById("mediaDescription");
  const mediaOriginalBtn = document.getElementById("mediaOriginalBtn");
  const mediaRelatedBtn = document.getElementById("mediaRelatedBtn");
  const mediaPrevBtn = document.getElementById("mediaPrevBtn");
  const mediaNextBtn = document.getElementById("mediaNextBtn");
  const mediaPaginationDots = document.getElementById("mediaPaginationDots");
  const mediaThumbnailsStrip = document.getElementById("mediaThumbnailsStrip");

  // Lightbox Elements
  const lightbox = document.getElementById("mediaLightbox");
  const lightboxClose = document.getElementById("mediaLightboxClose");
  const lightboxBody = document.getElementById("mediaLightboxBody");
  const lightboxTitle = document.getElementById("lightboxTitle");
  const lightboxCaption = document.getElementById("lightboxCaption");
  const lightboxDirectLink = document.getElementById("lightboxDirectLink");

  if (!stage || !mediaFrame) return;

  // State
  let currentCategory = "All Media";
  let filteredItems = [...MEDIA_ITEMS];
  let currentIndex = 0;
  let lastFocusedElement = null;

  // Category Icon Map
  const typeIcons = {
    image: "📷",
    video: "🎬",
    presentation: "📄",
    external: "🔗"
  };

  // 1. Compute Active Categories (Rule: Do not create empty categories)
  const availableCategories = ["All Media"];
  MEDIA_ITEMS.forEach((item) => {
    if (item.category && !availableCategories.includes(item.category)) {
      availableCategories.push(item.category);
    }
  });

  // Category Translation Mapping
  const CAT_I18N_MAP = {
    "All Media": "mediaCatAll",
    "Drone Photography & Aerial Mapping": "mediaCatDrone",
    "Travel & Exploration": "mediaCatTravel",
    "Robotics & Hardware": "mediaCatRobotics",
    "AI & Computer Vision": "mediaCatVision",
    "Engineering & Technical Demonstrations": "mediaCatDemos",
    "Presentations & Publications": "mediaCatPubs"
  };

  // 2. Render Category Filter Bar
  function renderFilterBar() {
    if (!filterBar) return;
    filterBar.innerHTML = "";

    const lang = (document.documentElement.getAttribute("lang") || "en").toLowerCase().startsWith("de") ? "de" : "en";
    const dict = (window.TRANSLATIONS && window.TRANSLATIONS[lang]) || {};

    availableCategories.forEach((cat) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = `media-filter-btn ${cat === currentCategory ? "active" : ""}`;
      btn.setAttribute("role", "tab");
      btn.setAttribute("aria-selected", String(cat === currentCategory));
      btn.setAttribute("data-cat", cat);
      const key = CAT_I18N_MAP[cat];
      btn.textContent = (key && dict[key]) ? dict[key] : cat;

      btn.addEventListener("click", () => {
        setCategory(cat);
      });

      filterBar.appendChild(btn);
    });
  }

  function setCategory(cat) {
    if (cat === currentCategory) return;
    currentCategory = cat;

    if (cat === "All Media") {
      filteredItems = [...MEDIA_ITEMS];
    } else {
      filteredItems = MEDIA_ITEMS.filter((item) => item.category === cat);
    }

    currentIndex = 0;

    // Update filter buttons
    const buttons = filterBar.querySelectorAll(".media-filter-btn");
    buttons.forEach((b) => {
      const isActive = b.getAttribute("data-cat") === cat;
      b.classList.toggle("active", isActive);
      b.setAttribute("aria-selected", String(isActive));
    });

    renderCurrentSlide();
    renderPaginationDots();
    renderThumbnails();
  }

  // 3. Render Current Slide
  function renderCurrentSlide(direction = "none") {
    if (!filteredItems.length) {
      mediaFrame.innerHTML = `
        <div class="media-empty-state">
          <p>No media items currently available in this category.</p>
        </div>
      `;
      return;
    }

    const item = filteredItems[currentIndex];

    // Media Frame Content
    mediaFrame.innerHTML = "";
    mediaFrame.classList.remove("slide-in-right", "slide-in-left");

    if (direction === "next") {
      mediaFrame.classList.add("slide-in-right");
    } else if (direction === "prev") {
      mediaFrame.classList.add("slide-in-left");
    }

    if (item.mediaType === "image") {
      const img = document.createElement("img");
      img.src = item.src;
      img.alt = item.alt || item.title;
      img.className = "media-stage-img";
      img.loading = "lazy";
      img.onerror = () => {
        img.onerror = null;
        renderFallbackCard(item);
      };
      mediaFrame.appendChild(img);
    } else if (item.mediaType === "video") {
      const video = document.createElement("video");
      video.src = item.src;
      video.controls = true;
      video.playsInline = true;
      video.preload = "metadata";
      video.className = "media-stage-video";
      video.setAttribute("aria-label", item.title);
      if (item.thumbnail) {
        video.poster = item.thumbnail;
      }
      mediaFrame.appendChild(video);
    } else if (item.mediaType === "presentation" || item.mediaType === "external") {
      // Interactive Editorial Presentation Preview Card
      const card = document.createElement("div");
      card.className = "media-doc-preview-card";
      const icon = item.mediaType === "presentation" ? "📄" : "🔗";
      const kicker = item.mediaType === "presentation" ? "PEER-REVIEWED PUBLICATION / DOSSIER" : "SYSTEM DEMO & REPOSITORY";

      card.innerHTML = `
        <div class="doc-card-bg-glow"></div>
        <div class="doc-card-inner">
          <div class="doc-card-emblem">${icon}</div>
          <span class="doc-card-kicker">${kicker}</span>
          <h4 class="doc-card-title">${item.title}</h4>
          <p class="doc-card-caption">${item.caption}</p>
          <div class="doc-card-action">
            <span class="doc-action-btn">
              ${item.mediaType === "presentation" ? "Read Publication (PDF)" : "Inspect Repository"} ↗
            </span>
          </div>
        </div>
      `;
      card.addEventListener("click", () => {
        if (item.originalUrl) {
          window.open(item.originalUrl, "_blank", "noopener,noreferrer");
        }
      });
      mediaFrame.appendChild(card);
    }

    // Metadata Updates
    if (mediaCatBadge) mediaCatBadge.textContent = item.category.toUpperCase();
    if (mediaTypeLabel) mediaTypeLabel.textContent = item.mediaType.toUpperCase();
    if (mediaTypeBadge) {
      const iconSpan = mediaTypeBadge.querySelector(".media-type-icon");
      if (iconSpan) iconSpan.textContent = typeIcons[item.mediaType] || "📁";
    }

    if (mediaSlideCounter) {
      const currentFormatted = String(currentIndex + 1).padStart(2, "0");
      const totalFormatted = String(filteredItems.length).padStart(2, "0");
      mediaSlideCounter.textContent = `${currentFormatted} / ${totalFormatted}`;
    }

    if (mediaDateBadge) mediaDateBadge.textContent = item.date || "";
    if (mediaTitle) mediaTitle.textContent = item.title;
    if (mediaCaption) mediaCaption.textContent = item.caption;
    if (mediaDescription) mediaDescription.textContent = item.description;

    // Actions
    if (mediaOriginalBtn) {
      if (item.originalUrl) {
        mediaOriginalBtn.href = item.originalUrl;
        mediaOriginalBtn.style.display = "inline-flex";
      } else {
        mediaOriginalBtn.style.display = "none";
      }
    }

    if (mediaRelatedBtn) {
      if (item.relatedUrl) {
        mediaRelatedBtn.href = item.relatedUrl;
        const textSpan = mediaRelatedBtn.querySelector("span:not([aria-hidden])");
        if (textSpan) {
          textSpan.textContent = item.relatedLabel || "View Related Project";
        }
        mediaRelatedBtn.style.display = "inline-flex";
      } else {
        mediaRelatedBtn.style.display = "none";
      }
    }

    updatePaginationState();
    updateThumbnailsState();
  }

  function renderFallbackCard(item) {
    mediaFrame.innerHTML = `
      <div class="media-fallback-card">
        <div class="fallback-icon">📁</div>
        <h4>${item.title}</h4>
        <p>${item.caption}</p>
        ${item.originalUrl ? `<a href="${item.originalUrl}" target="_blank" rel="noopener noreferrer" class="button button-primary">Open Verified Source ↗</a>` : ""}
      </div>
    `;
  }

  // 4. Pagination Dots
  function renderPaginationDots() {
    if (!mediaPaginationDots) return;
    mediaPaginationDots.innerHTML = "";

    filteredItems.forEach((_, idx) => {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = `slider-dot ${idx === currentIndex ? "active" : ""}`;
      dot.setAttribute("role", "tab");
      dot.setAttribute("aria-label", `Slide ${idx + 1} of ${filteredItems.length}`);
      dot.setAttribute("aria-selected", String(idx === currentIndex));

      dot.addEventListener("click", () => {
        goToIndex(idx);
      });

      mediaPaginationDots.appendChild(dot);
    });
  }

  function updatePaginationState() {
    if (!mediaPaginationDots) return;
    const dots = mediaPaginationDots.querySelectorAll(".slider-dot");
    dots.forEach((dot, idx) => {
      const isActive = idx === currentIndex;
      dot.classList.toggle("active", isActive);
      dot.setAttribute("aria-selected", String(isActive));
    });
  }

  // 5. Thumbnails Strip
  function renderThumbnails() {
    if (!mediaThumbnailsStrip) return;
    mediaThumbnailsStrip.innerHTML = "";

    filteredItems.forEach((item, idx) => {
      const thumb = document.createElement("button");
      thumb.type = "button";
      thumb.className = `media-thumb-btn ${idx === currentIndex ? "active" : ""}`;
      thumb.setAttribute("role", "tab");
      thumb.setAttribute("aria-label", `View ${item.title}`);
      thumb.setAttribute("aria-selected", String(idx === currentIndex));

      const thumbImgSrc = item.thumbnail || item.src;
      const isDoc = item.mediaType === "presentation" || item.mediaType === "external";

      thumb.innerHTML = `
        <div class="thumb-img-wrap">
          ${isDoc 
            ? `<div class="thumb-doc-icon">${typeIcons[item.mediaType] || "📄"}</div>`
            : `<img src="${thumbImgSrc}" alt="" loading="lazy" class="thumb-img">`
          }
        </div>
        <div class="thumb-info">
          <span class="thumb-cat">${item.category}</span>
          <span class="thumb-title">${item.title}</span>
        </div>
      `;

      thumb.addEventListener("click", () => {
        goToIndex(idx);
      });

      mediaThumbnailsStrip.appendChild(thumb);
    });
  }

  function updateThumbnailsState() {
    if (!mediaThumbnailsStrip) return;
    const thumbs = mediaThumbnailsStrip.querySelectorAll(".media-thumb-btn");
    thumbs.forEach((th, idx) => {
      const isActive = idx === currentIndex;
      th.classList.toggle("active", isActive);
      th.setAttribute("aria-selected", String(isActive));
      if (isActive) {
        th.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
      }
    });
  }

  // 6. Navigation Functions
  function goToNext() {
    if (!filteredItems.length) return;
    const nextIdx = (currentIndex + 1) % filteredItems.length;
    currentIndex = nextIdx;
    renderCurrentSlide("next");
  }

  function goToPrev() {
    if (!filteredItems.length) return;
    const prevIdx = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    currentIndex = prevIdx;
    renderCurrentSlide("prev");
  }

  function goToIndex(idx) {
    if (idx === currentIndex || idx < 0 || idx >= filteredItems.length) return;
    const dir = idx > currentIndex ? "next" : "prev";
    currentIndex = idx;
    renderCurrentSlide(dir);
  }

  if (mediaNextBtn) mediaNextBtn.addEventListener("click", goToNext);
  if (mediaPrevBtn) mediaPrevBtn.addEventListener("click", goToPrev);

  // 7. Keyboard Navigation when focused on slider stage
  stage.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      goToNext();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      goToPrev();
    }
  });

  // 8. Mobile Touch Swipe Support
  let touchStartX = 0;
  let touchStartY = 0;

  stage.addEventListener(
    "touchstart",
    (e) => {
      touchStartX = e.changedTouches[0].screenX;
      touchStartY = e.changedTouches[0].screenY;
    },
    { passive: true }
  );

  stage.addEventListener(
    "touchend",
    (e) => {
      const touchEndX = e.changedTouches[0].screenX;
      const touchEndY = e.changedTouches[0].screenY;
      const deltaX = touchEndX - touchStartX;
      const deltaY = touchEndY - touchStartY;

      // Only horizontal swipes with small vertical deflection
      if (Math.abs(deltaX) > 45 && Math.abs(deltaX) > Math.abs(deltaY) * 1.5) {
        if (deltaX < 0) {
          goToNext();
        } else {
          goToPrev();
        }
      }
    },
    { passive: true }
  );

  // 9. Full-Size Lightbox Modal
  function openLightbox() {
    if (!lightbox || !filteredItems.length) return;
    const item = filteredItems[currentIndex];
    lastFocusedElement = document.activeElement;

    lightboxBody.innerHTML = "";

    if (item.mediaType === "image") {
      const img = document.createElement("img");
      img.src = item.src;
      img.alt = item.alt || item.title;
      img.className = "lightbox-full-img";
      lightboxBody.appendChild(img);
    } else if (item.mediaType === "video") {
      const video = document.createElement("video");
      video.src = item.src;
      video.controls = true;
      video.autoplay = false;
      video.className = "lightbox-full-video";
      lightboxBody.appendChild(video);
    } else {
      lightboxBody.innerHTML = `
        <div class="lightbox-doc-card">
          <div class="doc-icon">${typeIcons[item.mediaType] || "📄"}</div>
          <h3>${item.title}</h3>
          <p>${item.description}</p>
        </div>
      `;
    }

    if (lightboxTitle) lightboxTitle.textContent = item.title;
    if (lightboxCaption) lightboxCaption.textContent = item.caption;
    if (lightboxDirectLink) {
      lightboxDirectLink.href = item.originalUrl || item.src;
      lightboxDirectLink.textContent = item.mediaType === "presentation" ? "Open Document (PDF) ↗" : "Open Original Resource ↗";
    }

    lightbox.hidden = false;
    lightbox.classList.add("open");
    document.body.style.overflow = "hidden";
    if (lightboxClose) lightboxClose.focus();
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.hidden = true;
    lightbox.classList.remove("open");
    document.body.style.overflow = "";

    // Stop video playback if playing inside lightbox
    const video = lightboxBody.querySelector("video");
    if (video) video.pause();

    if (lastFocusedElement) {
      lastFocusedElement.focus();
    }
  }

  if (mediaZoomBtn) {
    mediaZoomBtn.addEventListener("click", openLightbox);
  }

  if (lightboxClose) {
    lightboxClose.addEventListener("click", closeLightbox);
  }

  if (lightbox) {
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !lightbox.hidden) {
        closeLightbox();
      }
    });
  }

  // Initial Initialization
  renderFilterBar();
  renderCurrentSlide();
  renderPaginationDots();
  renderThumbnails();

  // Re-render when language changes
  window.addEventListener("portfolio-language-changed", () => {
    renderFilterBar();
    renderCurrentSlide();
  });
})();
