// Day/night mode

const dayNightButton = document.getElementById('day-night-button')
const night = "night";

dayNightButton.addEventListener("click", () => {
  document.body.classList.toggle(night);
  if (dayNightButton.classList.contains("ri-moon-line")) {
    dayNightButton.classList.replace("ri-moon-line", "ri-sun-line")
  } else {
    dayNightButton.classList.replace("ri-sun-line", "ri-moon-line")
  }
});

// Scroll reveal
ScrollReveal().reveal('.name', { delay: 100, origin: "right", distance: "60px", scale: 0.9 });
ScrollReveal().reveal('.photo', { delay: 200, origin: "left", distance: "60px", scale: 0.9 });
ScrollReveal().reveal('.ocupation', { delay: 300, origin: "right", distance: "60px", scale: 0.9 });
ScrollReveal().reveal('.social-media', { delay: 400, origin: "left", distance: "60px", scale: 0.9 });
ScrollReveal().reveal('.buttons', { delay: 500, origin: "right", distance: "60px", scale: 0.9 });
ScrollReveal().reveal('main', { delay: 700, origin: "left", distance: "60px", scale: 1 });
ScrollReveal().reveal('footer', { delay: 300, origin: "right", distance: "60px", scale: 0.9 });

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
  });
});
