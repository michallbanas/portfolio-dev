"use strict"

const darkModeAtOperatingLeve = ({ dark, light, element }) => {
  const darkMode = getComputedStyle(element).getPropertyValue("content")
  return darkMode.includes("dark")
    ? element.setAttribute("data-theme", dark)
    : element.setAttribute("data-theme", light)
}
darkModeAtOperatingLeve({
  dark: "dark",
  light: "light",
  element: document.documentElement,
})
