type DarkMode = {
  dark: string
  light: string
}

function toggleDarkMode(mode: DarkMode) {
  const element = document.documentElement

  element.setAttribute(
    "data-theme",
    element.getAttribute("data-theme") === mode.dark ? mode.light : mode.dark,
  )
}

const modeConfig: DarkMode = {
  dark: "dark",
  light: "light",
}

const toggleButton = document.getElementById("toggle-button")

if (toggleButton) {
  toggleButton.addEventListener("click", () => {
    toggleDarkMode(modeConfig)
  })
}
