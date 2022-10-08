/* Calculation of Reading Time */

const readingTimeBase = () => {
  const readingTime = document.getElementById('p-Blog')?.innerText as string
  const wpm = 225
  const words = readingTime?.trim().split(/\s+/).length
  const time = Math.ceil(words / wpm) as number
  const readingTimeOutput = document.getElementById('readingTimeOutput') as HTMLInputElement
  readingTimeOutput.innerText = `${time} min read`
}

readingTimeBase()
