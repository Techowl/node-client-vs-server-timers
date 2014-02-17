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

  getOutputTime: function() {
    var time = ClientTimer.time
    var timeString, str
    if (time <= 9) {
      timeString = '0.00' + String(time)
    } else if (time <= 99) {
      timeString = '0.0' + String(time)
    } else if (time <= 999) {
      timeString = '0.' + String(time)
    } else if (time >= 99999) {
      timeString = '99.999'
    } else {
      str = String(time)
      timeString = str.slice(0, str.length - 3) + '.' + str.slice(str.length - 3, str.length)
    }
    return timeString
  }

}