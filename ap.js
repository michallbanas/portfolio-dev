// Dark Mode at the Operating System Level

const darkMode = window.matchMedia("(prefers-color-scheme: dark)");

if (darkMode.matches){
  document.body.classList.add("dark-theme");
} else {
  document.body.classList.remove("dark-theme");
}