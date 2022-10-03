/* Google Chrome Auto Dark Mode off (experimental feature) */
class ChromeAutoDarkOff {
  constructor() {
    this.chrome = navigator.vendor
  }
  set chrome(chrome: string) {
    const meta = document.querySelector('meta[name="color-scheme"]')
    chrome === 'Google Inc.' ? meta?.setAttribute('content', 'only light') : null
  }
}

new ChromeAutoDarkOff()
