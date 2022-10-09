/* Calculation of Reading Time */

type ReadingTime = {
  wmp: number
}

const words = (text: string) => text.trim().split(/\s+/).length
const readingTimeBase = ({ wmp }: ReadingTime) => {
  const readingTime: string = document.getElementById('p-Blog')?.innerText ?? ''
  const time: number = Math.ceil(words(readingTime) / wmp)
  const readingTimeOutput = document.getElementById('readingTimeOutput') as HTMLElement
  readingTimeOutput.innerText = `${time} min read`
}

readingTimeBase({
  wmp: 225,
})
