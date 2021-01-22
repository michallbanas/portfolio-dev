const slider = document.querySelector(".theme-slider");

const setThemeValue = (value) => {
  document.body.dataset.theme = value;
  slider.value = value;
};

const getThemeValue = () => {
  if (localStorage.theme) {
    setThemeValue(localStorage.theme);
    return;
  }
  if (window.matchMedia("(prefers-color-scheme: light)").matches) {
    setThemeValue(1);
  }
};

document.body.removeAttribute("data-no-js");

getThemeValue();
setTimeout(() => document.body.style.setProperty("--duration", "200ms"), 1000);

slider.addEventListener("input", () => {
  setThemeValue(slider.value);
  localStorage.setItem("theme", slider.value);
});



window.addEventListener('scroll', () => {
  document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);