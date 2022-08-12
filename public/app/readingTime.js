'use strict';
/* Calculation of Reading Time */
class ReadingTime {
    constructor() {
        this.readingTime = document.getElementById('p-Blog').innerText;
    }
    set readingTime(readingTime) {
        const wpm = 225;
        const words = readingTime.trim().split(/\s+/).length;
        const time = Math.ceil(words / wpm);
        document.getElementById('readingTimeOutput').innerText = `Čas čítania: ${time}m 🍿`;
    }
}
new ReadingTime();
