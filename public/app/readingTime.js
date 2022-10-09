'use strict'
/* Calculation of Reading Time */
const words = text => text.trim().split(/\s+/).length
const readingTimeBase = ({ wmp }) => {
  const readingTime = document.getElementById('p-Blog')?.innerText ?? ''
  const time = Math.ceil(words(readingTime) / wmp)
  const readingTimeOutput = document.getElementById('readingTimeOutput')
  readingTimeOutput.innerText = `${time} min read`
}
readingTimeBase({
  wmp: 225,
})
