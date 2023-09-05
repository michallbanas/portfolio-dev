"use strict"
function toggleDarkMode(mode) {
  const element = document.documentElement
  element.setAttribute(
    "data-theme",
    element.getAttribute("data-theme") === mode.dark ? mode.light : mode.dark,
  )
}
const modeConfig = {
  dark: "dark",
  light: "light",
}
const toggleButton = document.getElementById("toggle-button")
if (toggleButton) {
  toggleButton.addEventListener("click", () => {
    toggleDarkMode(modeConfig)
  })
}
