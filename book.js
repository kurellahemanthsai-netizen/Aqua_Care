/* =========================================================
   AQUACARE
   BOOK A VISIT JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {
  /* =========================================
       LUCIDE
       ========================================= */

  function refreshIcons() {
    if (typeof lucide !== "undefined") {
      lucide.createIcons();
    }
  }

  refreshIcons();

  /* =========================================
       ELEMENTS
       ========================================= */

  const bookingForm = document.getElementById("bookingForm");

  const dateInput = document.getElementById("date");

  /* =========================================
       PREVENT PAST DATES
       ========================================= */

  if (dateInput) {
    const today = new Date();

    const year = today.getFullYear();

    const month = String(today.getMonth() + 1).padStart(2, "0");

    const day = String(today.getDate()).padStart(2, "0");

    dateInput.min = `${year}-${month}-${day}`;
  }

  /* =========================================
       FORM SUBMISSION
       ========================================= */

  if (bookingForm) {
    bookingForm.addEventListener("submit", function (event) {
      event.preventDefault();

      /* =================================
                   VALIDATION
                   ================================= */

      if (!bookingForm.checkValidity()) {
        bookingForm.reportValidity();

        return;
      }

      /* =================================
                   SUBMIT BUTTON
                   ================================= */

      const button = bookingForm.querySelector(".submit-btn");

      if (!button) {
        return;
      }

      const original = button.innerHTML;

      /* =================================
                   SUCCESS
                   ================================= */

      button.innerHTML = `
                    <span>
                        Request Submitted
                    </span>

                    <i data-lucide="check"></i>
                `;

      button.disabled = true;

      refreshIcons();

      /* =================================
                   CLEAR FORM
                   ================================= */

      bookingForm.reset();

      /* =================================
                   RESTORE BUTTON
                   ================================= */

      setTimeout(function () {
        button.innerHTML = original;

        button.disabled = false;

        refreshIcons();
      }, 2500);
    });
  }
});
