(() => {
  const navRoots = Array.from(document.querySelectorAll("[data-mobile-nav]"));

  if (!navRoots.length) {
    return;
  }

  const isElementVisible = (element) => window.getComputedStyle(element).display !== "none";
  let navIndex = 0;

  navRoots.forEach((root) => {
    const toggle = root.querySelector("[data-mobile-nav-toggle]");
    const panel = root.querySelector("[data-mobile-nav-panel]");

    if (!(toggle instanceof HTMLButtonElement) || !(panel instanceof HTMLElement)) {
      return;
    }

    const links = Array.from(root.querySelectorAll("[data-mobile-nav-link]"));
    const openLabel = toggle.getAttribute("aria-label") || "Otevřít navigaci";
    const closeLabel = toggle.dataset.mobileNavCloseLabel || "Zavřít navigaci";
    const panelId = panel.id || `mobile-nav-panel-${++navIndex}`;
    let isOpen = false;

    panel.id = panelId;
    toggle.type = "button";
    toggle.setAttribute("aria-controls", panelId);
    toggle.setAttribute("aria-haspopup", "true");
    root.setAttribute("data-mobile-nav-enhanced", "true");

    const isMobileLayout = () => isElementVisible(toggle);

    const render = () => {
      const mobile = isMobileLayout();

      if (!mobile) {
        isOpen = false;
      }

      root.setAttribute("data-mobile-nav-state", isOpen ? "open" : "closed");
      toggle.setAttribute("aria-expanded", mobile && isOpen ? "true" : "false");
      toggle.setAttribute("aria-label", isOpen ? closeLabel : openLabel);
      panel.hidden = mobile ? !isOpen : false;
    };

    const close = ({ focusToggle = false } = {}) => {
      isOpen = false;
      render();

      if (focusToggle) {
        toggle.focus();
      }
    };

    const open = () => {
      if (!isMobileLayout()) {
        render();
        return;
      }

      isOpen = true;
      render();
    };

    toggle.addEventListener("click", () => {
      if (isOpen) {
        close();
      } else {
        open();
      }
    });

    window.addEventListener("resize", render);

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && isOpen) {
        close({ focusToggle: true });
      }
    });

    document.addEventListener("pointerdown", (event) => {
      if (!isOpen || !isMobileLayout()) {
        return;
      }

      const target = event.target;

      if (!(target instanceof Node) || panel.contains(target) || toggle.contains(target)) {
        return;
      }

      close();
    });

    links.forEach((link) => {
      link.addEventListener("click", () => {
        if (isMobileLayout()) {
          close();
        }
      });
    });

    render();
  });
})();
