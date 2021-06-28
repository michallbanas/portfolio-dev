// Theme-Slider + Safari 12 Toolbar Color Change

let btnColorSwitcher = document.querySelector(".theme-slider")

function colorChange () {
  let headerColorDark = "#101010"
  let headerColorLight = "#262223"
  let metaColor = document.querySelector('meta[name="theme-color"]')
  let changeTheme = document.documentElement.classList.toggle("dark-theme")

  if (changeTheme)
      metaColor.setAttribute("content", headerColorDark)
    else metaColor.setAttribute("content", headerColorLight)
}

btnColorSwitcher.addEventListener("change", colorChange)

// Dark Mode at the Operating System Level

let darkMode = window.matchMedia("(prefers-color-scheme: dark)");

if (darkMode.matches) {
  document.documentElement.classList.add("dark-theme");
  btnColorSwitcher.value = 2
} else {
  document.documentElement.classList.remove("dark-theme");
}

// Scrolling-animation

window.addEventListener('scroll', () => {
  document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight))
}, false)



