var express = require('express')
var path = require('path')
var hookrouter = require('hookrouter')

var app = express()
const PORT = process.env.PORT || 8080

app.use(express.static(path.join(__dirname, 'build')))

app.use('*', (req, resp) => {
  hookrouter.setPath(req.baseUrl)
  const pathIndexHTML = path.join(process.cwd(), 'build', 'index.html')
  resp.sendFile(pathIndexHTML)
})

app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`)
})
