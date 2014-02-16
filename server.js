var http = require('http')
var fs = require('fs')
var path = require('path')
var server = http.createServer()
server.on('request', function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'})
  fs.readFile('index.html', function(err, data) {
    res.end(data)
  })
})
server.listen(2999)
console.log('Server running at http://localhost:2999/')