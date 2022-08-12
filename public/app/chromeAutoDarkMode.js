"use strict";
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
new ChromeAutoDarkOff();
