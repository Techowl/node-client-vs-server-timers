var time = 0
var startTime = null
var stopTime = null
var running = false

var start = function() {
  startTime = new Date()
  running = true
}

var stop = function() {
  stopTime = new Date()
  time += stopTime - startTime
  running = false
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
  if (running) {
    stop()
    start()
  }
}

var getTimeDeciseconds = function() {
  var timeDeciseconds = Math.round(time / 100)
  if (timeDeciseconds > 9999) {
    timeDeciseconds = 9999
  }
  return timeDeciseconds
}

var getOutputTime = function() {
  var timeString, str
  var timeDeciseconds = getTimeDeciseconds()
  if (timeDeciseconds <= 9) {
    timeString = '0.' + String(timeDeciseconds)
  } else {
    str = String(timeDeciseconds)
    timeString = str.slice(0, str.length - 1) + '.' + str[str.length - 1]
  }
  return timeString
}

exports.output = output
exports.start = start
exports.stop = stop
exports.reset = reset