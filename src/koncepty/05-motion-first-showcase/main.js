const reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
const prefersReducedMotion = () => reduceMotionQuery.matches;

const revealElements = Array.from(document.querySelectorAll(".reveal"));
const navLinks = Array.from(document.querySelectorAll(".site-nav a[href^='#']"));
const trackedSections = Array.from(document.querySelectorAll("main section[id]"));

function showAllRevealElements() {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}

function initReveal() {
  if (!revealElements.length) {
    return;
  }

  if (prefersReducedMotion() || !("IntersectionObserver" in window)) {
    showAllRevealElements();
    return;
  }

  document.documentElement.classList.add("js-enabled");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.18,
      rootMargin: "0px 0px -8% 0px"
    }
  );

  revealElements.forEach((element, index) => {
    element.style.setProperty("--delay-index", String(index % 6));
    observer.observe(element);
  });
}

function setActiveLink(sectionId) {
  navLinks.forEach((link) => {
    const isActive = link.getAttribute("href") === `#${sectionId}`;
    link.classList.toggle("is-active", isActive);

    if (isActive) {
      link.setAttribute("aria-current", "true");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

function initSectionTracking() {
  if (!trackedSections.length || !("IntersectionObserver" in window)) {
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      const visibleEntries = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

      if (!visibleEntries.length) {
        return;
      }

      setActiveLink(visibleEntries[0].target.id);
    },
    {
      threshold: [0.32, 0.5, 0.75],
      rootMargin: "-35% 0px -45% 0px"
    }
  );

  trackedSections.forEach((section) => observer.observe(section));
}

function initHeroDepth() {
  if (prefersReducedMotion()) {
    return;
  }

  const root = document.documentElement;
  let ticking = false;

  const update = () => {
    const scrollShift = Math.min(window.scrollY * 0.16, 140);
    const heroMainShift = Math.min(window.scrollY * 0.12, 90);
    const heroDetailShift = Math.min(window.scrollY * 0.18, 120);

    root.style.setProperty("--scroll-shift", `${scrollShift.toFixed(1)}px`);
    root.style.setProperty("--hero-main-shift", `${heroMainShift.toFixed(1)}px`);
    root.style.setProperty("--hero-detail-shift", `${heroDetailShift.toFixed(1)}px`);
    ticking = false;
  };

  update();

  window.addEventListener(
    "scroll",
    () => {
      if (ticking) {
        return;
      }

      ticking = true;
      window.requestAnimationFrame(update);
    },
    { passive: true }
  );
}

function initStoryVisual() {
  const storyFrame = document.querySelector("[data-story-frame]");
  const storyImage = storyFrame?.querySelector("[data-story-image]");
  const storyLabel = storyFrame?.querySelector("[data-story-label]");
  const storyTitle = storyFrame?.querySelector("[data-story-title]");
  const storyCaption = storyFrame?.querySelector("[data-story-caption]");
  const storySteps = Array.from(document.querySelectorAll("[data-story-step]"));

  if (!storyFrame || !storyImage || !storyLabel || !storyTitle || !storyCaption || !storySteps.length) {
    return;
  }

  const canHover = window.matchMedia("(hover: hover)").matches;
  let activeStep = null;
  let swapTimer = null;

  const applyStoryStep = (step) => {
    if (!(step instanceof HTMLElement) || activeStep === step) {
      return;
    }

    activeStep = step;
    storySteps.forEach((item) => item.classList.toggle("is-active", item === step));

    const nextImage = step.dataset.storyImage || storyImage.getAttribute("src") || "";
    const nextLabel = step.dataset.storyLabel || "";
    const nextTitle = step.dataset.storyTitle || "";
    const nextCaption = step.dataset.storyCaption || "";

    const updateContent = () => {
      storyImage.setAttribute("src", nextImage);
      storyLabel.textContent = nextLabel;
      storyTitle.textContent = nextTitle;
      storyCaption.textContent = nextCaption;
    };

    window.clearTimeout(swapTimer);

    if (prefersReducedMotion()) {
      storyFrame.classList.remove("is-swapping");
      updateContent();
      return;
    }

    storyFrame.classList.add("is-swapping");

    swapTimer = window.setTimeout(() => {
      updateContent();
      storyFrame.classList.remove("is-swapping");
    }, 140);
  };

  applyStoryStep(storySteps[0]);

  if (canHover) {
    storySteps.forEach((step) => {
      step.addEventListener("pointerenter", () => applyStoryStep(step));
    });
  }

  if (!("IntersectionObserver" in window)) {
    return;
  }

  const visibleSteps = new Map();
  const updateActiveStep = () => {
    const [candidate] = [...visibleSteps.entries()].sort((a, b) => b[1] - a[1])[0] || [];

    if (candidate) {
      applyStoryStep(candidate);
    }
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          visibleSteps.set(entry.target, entry.intersectionRatio);
        } else {
          visibleSteps.delete(entry.target);
        }
      });

      updateActiveStep();
    },
    {
      threshold: [0.25, 0.45, 0.65, 0.85],
      rootMargin: "-18% 0px -24% 0px"
    }
  );

  storySteps.forEach((step) => observer.observe(step));
}

initReveal();
initSectionTracking();
initHeroDepth();
initStoryVisual();
