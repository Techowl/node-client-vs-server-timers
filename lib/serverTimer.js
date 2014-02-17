var time = 0
var startTime = null
var stopTime = null
var numRunning = 0

var start = function() {
  startTime = new Date()
  numRunning += 1
}

var stop = function() {
  stopTime = new Date()
  time += stopTime - startTime
  numRunning -= 1
}

var reset = function() {
  time = 0
  startTime = new Date()
}

var output = function() {
  updateTime()
  return getOutputTime()
}

var updateTime = function() {
  if (numRunning > 0) {
    stop()
    start()
  }
}

var getOutputTime = function() {
  var currTime = time
  var timeString, str
  if (currTime <= 9) {
    timeString = '0.00' + String(currTime)
  } else if (currTime <= 99) {
    timeString = '0.0' + String(currTime)
  } else if (currTime <= 999) {
    timeString = '0.' + String(currTime)
  } else if (currTime >= 99999) {
    timeString = '99.999'
  } else {
    str = String(currTime)
    timeString = str.slice(0, str.length - 3) + '.' + str.slice(str.length - 3, str.length)
  }
  return timeString
}

exports.output = output
exports.start = start
exports.stop = stop
exports.reset = reset