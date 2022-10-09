/* Google Chrome Auto Dark Mode off (experimental feature) */

const chromeAutoDarkOff = () => {
  const chrome = navigator.vendor
  const meta = document.querySelector('meta[name="color-scheme"]')
  return chrome === 'Google Inc.' ? meta?.setAttribute('content', 'only light') : null
}

chromeAutoDarkOff()
