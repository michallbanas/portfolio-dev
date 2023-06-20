type DarkMode = {
  dark: string
  light: string
  element: HTMLElement
}

const darkModeAtOperatingLeve = ({ dark, light, element }: DarkMode) => {
  const darkMode: string = getComputedStyle(element).getPropertyValue("content")
  return darkMode.includes("dark")
    ? element.setAttribute("data-theme", dark)
    : element.setAttribute("data-theme", light)
}

darkModeAtOperatingLeve({
  dark: "dark",
  light: "light",
  element: document.documentElement,
})
