// Theme-Slider

const btn = document.querySelector(".theme-slider");

btn.addEventListener("change", function () {
  document.documentElement.classList.toggle("dark-theme");
});

// Scrolling-animation

window.addEventListener('scroll', () => {
  document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);