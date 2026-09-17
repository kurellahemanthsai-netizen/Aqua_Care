const pricingFaqItems = document.querySelectorAll(".pricing-faq-item");

pricingFaqItems.forEach((item) => {
  const question = item.querySelector(".pricing-faq-question");
  const toggle = item.querySelector(".pricing-faq-toggle");

  question.addEventListener("click", () => {

    const isActive = item.classList.contains("active");

    pricingFaqItems.forEach((faq) => {
      faq.classList.remove("active");

      const faqButton = faq.querySelector(".pricing-faq-question");
      const faqToggle = faq.querySelector(".pricing-faq-toggle");

      faqButton.setAttribute("aria-expanded", "false");

      faqToggle.innerHTML =
        '<i data-lucide="plus" aria-hidden="true"></i>';
    });

    if (!isActive) {
      item.classList.add("active");

      question.setAttribute("aria-expanded", "true");

      toggle.innerHTML =
        '<i data-lucide="minus" aria-hidden="true"></i>';
    }

    if (typeof lucide !== "undefined") {
      lucide.createIcons();
    }
  });
});