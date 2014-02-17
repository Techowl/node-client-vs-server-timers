var express = require('express')
var socket = require('socket.io')
var http = require('http')
var path = require('path')

var app = express()

var io = socket.listen(app)

app.set('port', process.env.PORT || 1337)
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function(req, res){
  res.sendfile(__dirname + '/index.html')
})

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'))
})