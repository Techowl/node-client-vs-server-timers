ClientTimer = {
  time: 0, // milliseconds
  startTime: null,
  stopTime: null,
  running: false,

  init: function() {
    setInterval(ClientTimer.output, 20)
  },

  start: function() {
    ClientTimer.startTime = new Date()
    ClientTimer.running = true
  },

  stop: function() {
    ClientTimer.stopTime = new Date()
    ClientTimer.time += ClientTimer.stopTime - ClientTimer.startTime
    ClientTimer.running = false
  },

  reset: function() {
    ClientTimer.time = 0
    ClientTimer.startTime = new Date()
  },

  output: function() {
    ClientTimer.updateTime()
    var timeOutput = ClientTimer.getOutputTime()
    $('#client-side .counter').text(timeOutput)
  },

  updateTime: function() {
    if (ClientTimer.running) {
      ClientTimer.stop()
      ClientTimer.start()
    }
  },

  getTimeDeciseconds: function() {
    var timeDeciseconds = Math.round(ClientTimer.time / 100)
    if (timeDeciseconds > 9999) {
      timeDeciseconds = 9999
    }
    return timeDeciseconds
  },

  getOutputTime: function() {
    var timeString, str
    var timeDeciseconds = ClientTimer.getTimeDeciseconds()
    if (timeDeciseconds <= 9) {
      timeString = '0.' + String(timeDeciseconds)
    } else {
      str = String(timeDeciseconds)
      timeString = str.slice(0, str.length - 1) + '.' + str[str.length - 1]
    }
    return timeString
  }

}