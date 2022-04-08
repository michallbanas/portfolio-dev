'use strict';
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
class SafariTabLayout {
    constructor() {
        this.safari = navigator.vendor;
    }
    set safari(safari) {
        const headerDark = '#181818';
        const headerLight = '#FFF6E8';
        const metaColor = document.querySelector('meta[name="theme-color"]');
        const body = document.querySelector('body');
        safari === 'Apple Computer, Inc.' && body.classList.contains('dark-theme')
            ? metaColor.setAttribute('content', headerDark)
            : metaColor.setAttribute('content', headerLight);
    }
}
class ChromeAutoDarkOff {
    constructor() {
        this.chrome = navigator.vendor;
    }
    set chrome(chrome) {
        const meta = document.querySelector('meta[name="color-scheme"]');
        chrome === 'Google Inc.'
            ? meta.setAttribute('content', 'only light')
            : null;
    }
}
class replaceMail {
    constructor() {
        this.mail = document.getElementById('mail');
    }
    set mail(mail) {
        mail.addEventListener('click', () => {
            mail.getAttribute('href');
            mail.setAttribute('href', 'mailto:banas.michal@icloud.com');
        });
    }
}
new DarkMode();
new SafariTabLayout();
new ChromeAutoDarkOff();
new replaceMail();
