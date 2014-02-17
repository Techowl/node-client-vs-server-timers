var express = require('express')
var socket = require('socket.io')
var http = require('http')
var path = require('path')
var server, io

var app = express()

app.set('port', process.env.PORT || 1337)
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function(req, res){
  res.sendfile(__dirname + '/index.html')
})

server = http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'))
})

io = socket.listen(server)

io.sockets.on('connection', function(socket){
  var serverTimer = require('./lib/serverTimer')

  setInterval(function(){
    socket.emit('update', {time: serverTimer.output()})
  }, 20)

  socket.on('start', function(){
    serverTimer.start()
  })

  socket.on('stop', function(){
    serverTimer.stop()
  })

  socket.on('reset', function(){
    serverTimer.reset()
  })
})
