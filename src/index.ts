/* Dark Mode at the Operating System Level */
class DarkMode {
    constructor() {
        this.darkMode = getComputedStyle(document.documentElement).getPropertyValue('content')
    }
    set darkMode(darkMode: string) {
        darkMode.includes('dark') ? document.documentElement.setAttribute('data-theme', 'dark') : document.documentElement.setAttribute('data-theme', 'light')
    }
}

new DarkMode();