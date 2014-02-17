var express = require('express')
var http = require('http')
var path = require('path')

var app = express()

app.set('port', process.env.PORT || 1337)
app.use(express.logger('dev'))
app.use(express.json())
app.use(express.urlencoded())
app.use(express.methodOverride())
app.use(app.router)
app.use(express.static(path.join(__dirname, 'public')))

if ('development' == app.get('env')) {
  app.use(express.errorHandler())
}

app.get('/', function(req, res){
  res.sendfile(__dirname + '/index.html')
})

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'))
})