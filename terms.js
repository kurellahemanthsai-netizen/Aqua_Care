/* =========================================
   AQUACARE
   TERMS & CONDITIONS JAVASCRIPT
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

    const darkToggle =
      document.getElementById("darkToggle");


    if (!darkToggle) return;


    const icon =
      darkToggle.querySelector("svg");


    if (!icon) return;


    icon.outerHTML =
      document.body.classList.contains("dark-mode")

        ? '<i data-lucide="sun" aria-hidden="true"></i>'

        : '<i data-lucide="moon" aria-hidden="true"></i>';


    refreshIcons();

  }


  /* =========================================
     INITIALIZE
     ========================================= */

  function initialize() {

    const rtlToggle =
      document.getElementById("rtlToggle");


    const darkToggle =
      document.getElementById("darkToggle");


    /* =======================================
       RESTORE RTL
       ======================================= */

    const savedRTL =
      localStorage.getItem("aquacareRTL");


    if (savedRTL === "true") {

      document.body.classList.add("rtl");

      document.documentElement.dir =
        "rtl";

    } else {

      document.documentElement.dir =
        "ltr";

    }


    /* =======================================
       RESTORE DARK MODE
       ======================================= */

    const savedDark =
      localStorage.getItem("aquacareDark");


    if (savedDark === "true") {

      document.body.classList.add(
        "dark-mode"
      );

    }


    /* =======================================
       INITIAL ICONS
       ======================================= */

    refreshIcons();

    updateDarkIcon();


    


    /* =======================================
       FINAL ICON REFRESH
       ======================================= */

    refreshIcons();

  }


  /* =========================================
     START
     ========================================= */

  if (
    document.readyState === "loading"
  ) {

    document.addEventListener(
      "DOMContentLoaded",
      initialize
    );

  } else {

    initialize();

  }

})();