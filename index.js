const express = require('express')
const helmet = require('helmet')
const compression = require("compression")
const cors = require('cors')


const app = express()

const PORT = 4600

app.use(helmet())
app.use(compression())
app.use(cors())



const user = {
  slackUsername: "boivado2",
  age: 21,
  backend: true,
  bio: "Hello! my name is John Ayebamondiafere Godwin, i'm a Backend Engineer."

}





app.get('/', (req, res) => {
  res.status(200).json(user)
})


app.listen(PORT, () => console.log(`running on ${PORT}`))