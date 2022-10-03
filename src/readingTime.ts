/* Calculation of Reading Time */
class ReadingTime {
  constructor() {
    this.readingTime = document.getElementById('readingTime')!.innerText
  }
  set readingTime(readingTime: string) {
    const wpm = 225
    const words = readingTime.trim().split(/\s+/).length
    const time = Math.ceil(words / wpm)
    const readingTimeOutput = document.getElementById('readingTimeOutput')!
    readingTimeOutput.innerText = `Čas čítania: ${time}m 🍿`
  }
}
new ReadingTime()
