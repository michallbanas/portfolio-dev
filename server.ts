import express from "express"

const app = express()
const port = 3100

app.use(express.static("public"))

app.get("/", (_req: any, res: { sendFile: (arg0: string) => void }) => {
  res.sendFile("./public/index.html")
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
