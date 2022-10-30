const express = require('express')
const helmet = require('helmet')
const compression = require("compression")
const cors = require('cors')


const app = express()

const PORT = 4600

app.use(helmet())
app.use(compression())
app.use(cors())


app.use(function (err, req, res, next) {
  console.log(err)
  res.status(err.status || 500).json({msg : err.message})
})


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