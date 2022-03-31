'use strict';

/* Dark Mode at the Operating System Level */

class DarkMode {
  constructor() {
    this.darkMode = window.matchMedia('(prefers-color-scheme: dark)');
  }
  set darkMode(darkMode: MediaQueryList) {
    darkMode.matches
      ? document.body.classList.add('dark-theme')
      : document.body.classList.remove('dark-theme');
  }
}

/* The New Safari Tab Layout (Safari 15+) */

class SafariTabLayout {
  constructor() {
    this.safari = navigator.vendor;
  }

  set safari(safari: string) {
    const headerDark = '#181818';
    const headerLight = '#FFF6E8';
    const metaColor = document.querySelector('meta[name="theme-color"]');
    const body = document.querySelector('body');

    safari === 'Apple Computer, Inc.' && body.classList.contains('dark-theme')
      ? metaColor.setAttribute('content', headerDark)
      : metaColor.setAttribute('content', headerLight);
  }
}

/* Google Chrome Auto Dark Mode off (experimental feature) */

class ChromeAutoDarkOff {
  constructor() {
    this.chrome = navigator.vendor;
  }
  set chrome(chrome: string) {
    const meta = document.querySelector('meta[name="color-scheme"]');
    chrome === 'Google Inc.'
      ? meta.setAttribute('content', 'only light')
      : null;
  }
}

new DarkMode();
new SafariTabLayout();
new ChromeAutoDarkOff();
