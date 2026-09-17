/* =========================================================
   AQUACARE
   HEADER + FOOTER JAVASCRIPT
   ========================================================= */

/* =========================================================
   LUCIDE ICONS
   ========================================================= */

function refreshIcons() {
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }
}

/* =========================================================
   DARK MODE
   ========================================================= */

const darkToggle = document.getElementById("darkToggle");

function updateDarkIcon() {
  if (!darkToggle) {
    return;
  }

  const isDark = document.body.classList.contains("dark-mode");

  darkToggle.innerHTML = isDark
    ? '<i data-lucide="sun"></i>'
    : '<i data-lucide="moon"></i>';

  darkToggle.setAttribute("title", isDark ? "Light Mode" : "Dark Mode");

  darkToggle.setAttribute(
    "aria-label",
    isDark ? "Switch to light mode" : "Switch to dark mode",
  );

  refreshIcons();
}

darkToggle?.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  updateDarkIcon();
});

/* =========================================================
   RTL MODE
   ========================================================= */

const rtlToggle = document.getElementById("rtlToggle");

/* =========================================================
   UPDATE RTL STATE
   ========================================================= */

function updateRTLState() {
  const isRTL = document.body.classList.contains("rtl");

  /* ---------------------------------------------------------
     BODY DIRECTION
  --------------------------------------------------------- */

  document.body.setAttribute("dir", isRTL ? "rtl" : "ltr");

  /* ---------------------------------------------------------
     HTML DOCUMENT DIRECTION
  --------------------------------------------------------- */

  document.documentElement.setAttribute("dir", isRTL ? "rtl" : "ltr");

  /* ---------------------------------------------------------
     LANGUAGE
  --------------------------------------------------------- */

  document.documentElement.setAttribute("lang", isRTL ? "ar" : "en");

  /* ---------------------------------------------------------
     RTL BUTTON STATE
  --------------------------------------------------------- */

  if (!rtlToggle) {
    return;
  }

  rtlToggle.setAttribute("title", isRTL ? "LTR Mode" : "RTL Mode");

  rtlToggle.setAttribute(
    "aria-label",
    isRTL ? "Switch to left-to-right mode" : "Switch to right-to-left mode",
  );

  rtlToggle.setAttribute("aria-pressed", isRTL ? "true" : "false");
}

/* =========================================================
   RTL TOGGLE
   ========================================================= */

rtlToggle?.addEventListener("click", () => {
  document.body.classList.toggle("rtl");

  updateRTLState();
});

/* =========================================================
   MOBILE MENU
   ========================================================= */

const menuToggle = document.getElementById("menuToggle");

const navbar = document.querySelector(".navbar");

/* =========================================================
   CLOSE MOBILE MENU
   ========================================================= */

function closeMobileMenu() {
  if (!navbar || !menuToggle) {
    return;
  }

  navbar.classList.remove("active");

  menuToggle.innerHTML = '<i data-lucide="menu"></i>';

  menuToggle.setAttribute("aria-label", "Open menu");

  menuToggle.setAttribute("aria-expanded", "false");

  refreshIcons();
}

/* =========================================================
   MOBILE MENU TOGGLE
   ========================================================= */

menuToggle?.addEventListener("click", () => {
  if (!navbar) {
    return;
  }

  navbar.classList.toggle("active");

  const isOpen = navbar.classList.contains("active");

  menuToggle.innerHTML = isOpen
    ? '<i data-lucide="x"></i>'
    : '<i data-lucide="menu"></i>';

  menuToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");

  menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");

  refreshIcons();
});

/* =========================================================
   MOBILE HOME DROPDOWN
   ========================================================= */

const homeDropdown = document.querySelector(".dropdown");

if (homeDropdown) {
  const homeLink = homeDropdown.querySelector(":scope > a");

  homeLink?.addEventListener("click", (event) => {
    if (window.innerWidth <= 1024) {
      event.preventDefault();

      homeDropdown.classList.toggle("active");
    }
  });
}

/* =========================================================
   CLOSE MOBILE MENU AFTER CLICKING LINK
   ========================================================= */

document.querySelectorAll(".navbar a").forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 1024) {
      const isHomeLink =
        link.closest(".dropdown") &&
        link.parentElement.classList.contains("dropdown");

      if (!isHomeLink) {
        closeMobileMenu();
      }
    }
  });
});

/* =========================================================
   CLOSE MENU WHEN RESIZING TO DESKTOP
   ========================================================= */

window.addEventListener("resize", () => {
  if (window.innerWidth > 1024) {
    closeMobileMenu();
  }
});

/* =========================================================
   BACK TO TOP
   ========================================================= */

const topButton = document.querySelector(".top-btn");

topButton?.addEventListener("click", (event) => {
  event.preventDefault();

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

/* =========================================================
   INITIALIZE EVERYTHING
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  refreshIcons();

  updateDarkIcon();

  updateRTLState();
});
