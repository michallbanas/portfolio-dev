/* Dark Mode at the Operating System Level */

const darkModeAtOperatingLeve = () => {
  const darkMode = getComputedStyle(document.documentElement).getPropertyValue('content')
  return darkMode.includes('dark')
    ? document.documentElement.setAttribute('data-theme', 'dark')
    : document.documentElement.setAttribute('data-theme', 'light')
}

darkModeAtOperatingLeve()
