const http = require('http')


const PORT = 4600
const HOST_NAME = "localhost"

const user = {
  slackUsername: "mondiafere",
  age: 21,
  backend: true,
  bio: "Hello! my name is John Ayebamondiafere Godwin, i'm a Backend Engineer."

}

const requestHandler = (req, res) => {

  res.setHeader("Content-Type", "application/json");


  switch (req.url) {
    case '/user':
      res.writeHead(200)
      res.end(JSON.stringify(user))
      break;
    default:
      res.writeHead(404)
      res.end(JSON.stringify({
        msg: "Not Found."
      }))
  }

}


const server = http.createServer(requestHandler)

server.listen(PORT, HOST_NAME, () => {
  console.log('server running')
})