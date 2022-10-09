"use strict";
/* The New Safari Tab Layout (Safari 15+) */
const SafariTabLayout = ({ headerDark, headerLight }) => {
    const safari = navigator.vendor;
    const metaColor = document.querySelector('meta[name="theme-color"]');
    const body = document.querySelector('body');
    return safari === 'Apple Computer, Inc.' && body?.classList.contains('dark-theme')
        ? metaColor?.setAttribute('content', headerDark)
        : metaColor?.setAttribute('content', headerLight);
};
SafariTabLayout({
    headerDark: '#181818',
    headerLight: '#FFF6E8',
});
