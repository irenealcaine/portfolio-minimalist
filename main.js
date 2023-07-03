// Day/night mode
const dayNightButton = document.getElementById("day-night-button");
const night = "night";
let isNightMode = localStorage.getItem("nightMode") === "true";

// Función para activar el modo claro/u oscuro
function toggleNightMode() {
  document.body.classList.toggle(night);
  dayNightButton.classList.toggle("ri-moon-line");
  dayNightButton.classList.toggle("ri-sun-line");
}

// Activar el modo claro/u oscuro según lo almacenado en el Local Storage
if (isNightMode) {
  toggleNightMode();
}

// Manejar el evento de clic en el botón de modo claro/u oscuro
dayNightButton.addEventListener("click", () => {
  isNightMode = !isNightMode;
  toggleNightMode();

  // Almacenar el estado del modo claro/u oscuro en el Local Storage
  localStorage.setItem("nightMode", isNightMode);
});

// Scroll reveal
const scrollElements = [
  { selector: ".name", delay: 100, origin: "right" },
  { selector: ".photo", delay: 200, origin: "left" },
  { selector: ".ocupation", delay: 300, origin: "right" },
  { selector: ".social-media", delay: 400, origin: "left" },
  { selector: ".buttons", delay: 500, origin: "right" },
  { selector: "main", delay: 700, origin: "bottom", scale: 1 },
  { selector: ".CV", delay: 100, origin: "bottom" },
];

scrollElements.forEach((element) => {
  ScrollReveal().reveal(element.selector, {
    delay: element.delay,
    origin: element.origin,
    distance: "160px",
    scale: element.scale || 0.9,
  });
});

//tabs
const tabs = document.querySelectorAll("[data-target]");
const tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tc) => {
      tc.classList.remove("filters__active");
    });
    target.classList.add("filters__active");

    tabs.forEach((t) => {
      t.classList.remove("filter-tab-active");
    });
    tab.classList.add("filter-tab-active");
    // Almacenar la pestaña actual en el Local Storage
    const activeTab = tab.dataset.target.slice(1); // Eliminar el '#'
    localStorage.setItem("activeTab", activeTab);
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const savedTab = localStorage.getItem("activeTab");
  const savedTabButton = document.querySelector(
    `button[data-target="#${savedTab}"]`
  );
  if (savedTabButton) {
    savedTabButton.click();
  }
});
