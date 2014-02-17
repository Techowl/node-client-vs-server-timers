ClientTimer = {
  time: 0, // milliseconds
  startTime: null,
  stopTime: null,
  running: false,

  init: function() {
    setInterval(this.output.bind(this), 20)
  },

  start: function() {
    this.startTime = new Date()
    this.running = true
  },

  stop: function() {
    this.stopTime = new Date()
    this.time += this.stopTime - this.startTime
    this.running = false
  },

  reset: function() {
    this.time = 0
    this.startTime = new Date()
  },

  output: function() {
    this.updateTime()
    var timeOutput = this.getOutputTime()
    $('#client-side .counter').text(timeOutput)
  },

  updateTime: function() {
    if (this.running) {
      this.stop()
      this.start()
    }
  },

  getOutputTime: function() {
    var time = this.time
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