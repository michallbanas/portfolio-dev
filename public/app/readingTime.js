'use strict'
/* Calculation of Reading Time */
const readingTimeBase = () => {
  var _a
  const readingTime =
    (_a = document.getElementById('p-Blog')) === null || _a === void 0 ? void 0 : _a.innerText
  const wpm = 225
  const words =
    readingTime === null || readingTime === void 0 ? void 0 : readingTime.trim().split(/\s+/).length
  const time = Math.ceil(words / wpm)
  const readingTimeOutput = document.getElementById('readingTimeOutput')
  readingTimeOutput.innerText = `${time} min read`
}
readingTimeBase()
