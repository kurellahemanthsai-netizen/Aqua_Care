/* =========================================
   AQUACARE
   COMING SOON JAVASCRIPT
   ========================================= */

(function () {
  "use strict";

  /* =========================================
     LUCIDE ICONS
     ========================================= */

  function refreshIcons() {
    if (typeof lucide !== "undefined") {
      lucide.createIcons();
    }
  }

  /* =========================================
     DARK MODE ICON
     ========================================= */

  function updateDarkIcon() {
    const darkToggle = document.getElementById("darkToggle");

    if (!darkToggle) return;

    const icon = darkToggle.querySelector("svg");

    if (!icon) return;

    icon.outerHTML = document.body.classList.contains("dark-mode")
      ? '<i data-lucide="sun" aria-hidden="true"></i>'
      : '<i data-lucide="moon" aria-hidden="true"></i>';

    refreshIcons();
  }

  /* =========================================
     COUNTDOWN
     ========================================= */

  /*
    Change this date according to your
    actual launch date.

    Format:
    YYYY-MM-DDTHH:MM:SS
  */

  const launchDate = new Date("2027-01-01T00:00:00").getTime();

  function updateCountdown() {
    const now = new Date().getTime();

    const distance = launchDate - now;

    /* =======================================
       LAUNCH DATE REACHED
       ======================================= */

    if (distance <= 0) {
      document.getElementById("days").textContent = "00";

      document.getElementById("hours").textContent = "00";

      document.getElementById("minutes").textContent = "00";

      document.getElementById("seconds").textContent = "00";

      return;
    }

    /* =======================================
       CALCULATE TIME
       ======================================= */

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );

    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    /* =======================================
       DISPLAY
       ======================================= */

    document.getElementById("days").textContent = String(days).padStart(2, "0");

    document.getElementById("hours").textContent = String(hours).padStart(
      2,
      "0",
    );

    document.getElementById("minutes").textContent = String(minutes).padStart(
      2,
      "0",
    );

    document.getElementById("seconds").textContent = String(seconds).padStart(
      2,
      "0",
    );
  }

  /* =========================================
     EMAIL FORM
     ========================================= */

  function setupNotifyForm() {
    const notifyForm = document.getElementById("notifyForm");

    if (!notifyForm) return;

    notifyForm.addEventListener("submit", function (event) {
      event.preventDefault();

      if (!notifyForm.checkValidity()) {
        notifyForm.reportValidity();

        return;
      }

      const input = document.getElementById("email");

      const button = notifyForm.querySelector(".notify-button");

      if (!button || !input) return;

      const originalHTML = button.innerHTML;

      /* ===================================
           SUCCESS STATE
           =================================== */

      button.innerHTML = `
          <i
            data-lucide="check"
            aria-hidden="true"
          ></i>

          <span>
            You're on the List
          </span>
        `;

      button.disabled = true;

      refreshIcons();

      /* ===================================
           CLEAR EMAIL
           =================================== */

      input.value = "";

      /* ===================================
           RESTORE BUTTON
           =================================== */

      setTimeout(function () {
        button.innerHTML = originalHTML;

        button.disabled = false;

        refreshIcons();
      }, 2500);
    });
  }

  /* =========================================
     INITIALIZE
     ========================================= */

  function initialize() {
    const rtlToggle = document.getElementById("rtlToggle");

    const darkToggle = document.getElementById("darkToggle");

    /* =======================================
       RESTORE RTL
       ======================================= */

    const savedRTL = localStorage.getItem("aquacareRTL");

    if (savedRTL === "true") {
      document.body.classList.add("rtl");

      document.documentElement.dir = "rtl";
    } else {
      document.documentElement.dir = "ltr";
    }

    /* =======================================
       RESTORE DARK MODE
       ======================================= */

    const savedDark = localStorage.getItem("aquacareDark");

    if (savedDark === "true") {
      document.body.classList.add("dark-mode");
    }

    /* =======================================
       INITIAL ICONS
       ======================================= */

    refreshIcons();

    updateDarkIcon();

    /* =======================================
       COUNTDOWN
       ======================================= */

    updateCountdown();

    setInterval(updateCountdown, 1000);

    /* =======================================
       NOTIFICATION FORM
       ======================================= */

    setupNotifyForm();

    refreshIcons();
  }

  /* =========================================
     START
     ========================================= */

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialize);
  } else {
    initialize();
  }
})();
