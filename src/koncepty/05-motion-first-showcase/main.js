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

function initTilt() {
  if (prefersReducedMotion() || !window.matchMedia("(hover: hover)").matches) {
    return;
  }

  const cards = document.querySelectorAll("[data-tilt]");

  cards.forEach((card) => {
    const maxTilt = Number(card.getAttribute("data-tilt")) || 4;

    const updateTilt = (event) => {
      const rect = card.getBoundingClientRect();
      const ratioX = (event.clientX - rect.left) / rect.width;
      const ratioY = (event.clientY - rect.top) / rect.height;
      const rotateY = (ratioX - 0.5) * maxTilt * 2;
      const rotateX = (0.5 - ratioY) * maxTilt * 2;

      card.style.setProperty("--tilt-x", `${rotateX.toFixed(2)}deg`);
      card.style.setProperty("--tilt-y", `${rotateY.toFixed(2)}deg`);
    };

    const resetTilt = () => {
      card.style.removeProperty("--tilt-x");
      card.style.removeProperty("--tilt-y");
    };

    card.addEventListener("pointermove", updateTilt);
    card.addEventListener("pointerleave", resetTilt);
    card.addEventListener("pointercancel", resetTilt);
  });
}

function initStageSpotlight() {
  if (prefersReducedMotion() || !window.matchMedia("(hover: hover)").matches) {
    return;
  }

  const stage = document.querySelector(".hero-stage");

  if (!stage) {
    return;
  }

  const updateSpotlight = (event) => {
    const rect = stage.getBoundingClientRect();
    const posX = ((event.clientX - rect.left) / rect.width) * 100;
    const posY = ((event.clientY - rect.top) / rect.height) * 100;

    stage.style.setProperty("--pointer-x", `${posX.toFixed(2)}%`);
    stage.style.setProperty("--pointer-y", `${posY.toFixed(2)}%`);
  };

  const resetSpotlight = () => {
    stage.style.removeProperty("--pointer-x");
    stage.style.removeProperty("--pointer-y");
  };

  stage.addEventListener("pointermove", updateSpotlight);
  stage.addEventListener("pointerleave", resetSpotlight);
}

function initScrollShift() {
  if (prefersReducedMotion()) {
    return;
  }

  let ticking = false;

  const update = () => {
    const scrollShift = Math.min(window.scrollY * 0.16, 120);
    document.documentElement.style.setProperty("--scroll-shift", `${scrollShift.toFixed(1)}px`);
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

initReveal();
initSectionTracking();
initTilt();
initStageSpotlight();
initScrollShift();
