document.addEventListener("DOMContentLoaded", function () {

  const interiorData = [
    {
      number: "01",
      title: "Space & Proportion",
      label: "SPACE & PROPORTION",
      description:
        "The aquarium is planned around the dimensions and natural flow of your room.",
      image: "images/space.jpeg",
      icon: "maximize-2"
    },
    {
      number: "02",
      title: "Style & Atmosphere",
      label: "STYLE & ATMOSPHERE",
      description:
        "Materials, colours, plants, and décor are selected to complement your interior.",
      image: "images/style.jpeg",
      icon: "palette"
    },
    {
      number: "03",
      title: "Light & Environment",
      label: "LIGHT & ENVIRONMENT",
      description:
        "Lighting and placement are considered to support both visual appeal and aquatic life.",
      image: "images/light.jpeg",
      icon: "sun-medium"
    },
    {
      number: "04",
      title: "Aquatic Life",
      label: "AQUATIC LIFE",
      description:
        "Fish, plants, and aquascaping elements are chosen with the aquarium environment in mind.",
      image: "images/aquatic-life.jpeg",
      icon: "fish"
    }
  ];

  let currentIndex = 0;

  const section = document.querySelector("#interior-design");
  const image = document.querySelector("#interiorImage");
  const imageNumber = document.querySelector("#interiorImageNumber");
  const imageLabel = document.querySelector("#interiorImageLabel");
  const current = document.querySelector("#interiorCurrent");
  const number = document.querySelector("#interiorNumber");
  const title = document.querySelector("#interiorTitle");
  const description = document.querySelector("#interiorDescription");
  const icon = document.querySelector("#interiorIcon");
  const nextButton = document.querySelector("#interiorNext");

  function updateInterior() {

    const item = interiorData[currentIndex];

    section.classList.add("changing");

    setTimeout(function () {

      image.src = item.image;
      image.alt = item.title;

      imageNumber.textContent = item.number;
      imageLabel.textContent = item.label;

      current.textContent = item.number;
      number.textContent = item.number;

      title.textContent = item.title;
      description.textContent = item.description;

      icon.setAttribute("data-lucide", item.icon);

      if (window.lucide) {
        lucide.createIcons();
      }

      section.classList.remove("changing");

    }, 250);
  }

  nextButton.addEventListener("click", function () {

    currentIndex++;

    if (currentIndex >= interiorData.length) {
      currentIndex = 0;
    }

    updateInterior();

  });

});
