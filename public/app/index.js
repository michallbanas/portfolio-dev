"use strict";
/* Dark Mode at the Operating System Level */
class DarkMode {
    constructor() {
        this.darkMode = window.matchMedia('(prefers-color-scheme: dark)');
    }
    set darkMode(darkMode) {
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
    set safari(safari) {
        const [headerDark, headerLight] = ['#181818', '#FFF6E8'];
        const metaColor = document.querySelector('meta[name="theme-color"]');
        const body = document.querySelector('body');
        safari === 'Apple Computer, Inc.' && (body === null || body === void 0 ? void 0 : body.classList.contains('dark-theme'))
            ? metaColor === null || metaColor === void 0 ? void 0 : metaColor.setAttribute('content', headerDark)
            : metaColor === null || metaColor === void 0 ? void 0 : metaColor.setAttribute('content', headerLight);
    }
}
/* Google Chrome Auto Dark Mode off (experimental feature) */
class ChromeAutoDarkOff {
    constructor() {
        this.chrome = navigator.vendor;
    }
    set chrome(chrome) {
        const meta = document.querySelector('meta[name="color-scheme"]');
        chrome === 'Google Inc.' ? meta === null || meta === void 0 ? void 0 : meta.setAttribute('content', 'only light') : null;
    }
}
new DarkMode();
new SafariTabLayout();
new ChromeAutoDarkOff();
