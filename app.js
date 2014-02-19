var express = require('express')
var socket = require('socket.io')
var http = require('http')
var path = require('path')
var serverTimer = require('./lib/serverTimer')
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

io.configure(function () { // for Heroku
  io.set("transports", ["xhr-polling"]);
  io.set("polling duration", 10);
});

io.sockets.on('connection', function(socket){
  socket.set('timer', serverTimer())

  setInterval(function(){
    socket.get('timer', function(err, timer){
      var time = timer.output()
      socket.emit('update', {time: time})
    })
  }, 20)

  socket.on('start', function(){
    socket.get('timer', function(err, timer){
      timer.start()
    })
  })

  socket.on('stop', function(){
    socket.get('timer', function(err, timer){
      timer.stop()
    })
  })

  socket.on('reset', function(){
    socket.get('timer', function(err, timer){
      timer.reset()
    })
  })
})
