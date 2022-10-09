/* The New Safari Tab Layout (Safari 15+) */

type Colours = {
  headerDark: string
  headerLight: string
}

const SafariTabLayout = ({ headerDark, headerLight }: Colours) => {
  const safari: string = navigator.vendor
  const metaColor: HTMLMetaElement | null = document.querySelector('meta[name="theme-color"]')
  const body: HTMLBodyElement | null = document.querySelector('body')
  return safari === 'Apple Computer, Inc.' && body?.classList.contains('dark-theme')
    ? metaColor?.setAttribute('content', headerDark)
    : metaColor?.setAttribute('content', headerLight)
}

SafariTabLayout({
  headerDark: '#181818',
  headerLight: '#FFF6E8',
})
