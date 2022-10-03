/* The New Safari Tab Layout (Safari 15+) */
class SafariTabLayout {
  constructor() {
    this.safari = navigator.vendor
  }
  set safari(safari: string) {
    const [headerDark, headerLight] = ['#181818', '#FFF6E8']
    const metaColor = document.querySelector('meta[name="theme-color"]')
    const body = document.querySelector('body')
    safari === 'Apple Computer, Inc.' && body?.classList.contains('dark-theme')
      ? metaColor?.setAttribute('content', headerDark)
      : metaColor?.setAttribute('content', headerLight)
  }
}

new SafariTabLayout()
