"use strict";
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
new SafariTabLayout();
