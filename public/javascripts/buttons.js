Buttons = {
  $startStop: null,
  $reset: null,
  transitionTime: 200,
  init: function() {
    this.$startStop = $('button#start-stop')
    this.$reset = $('button#reset')
    this.addStartStopListener()
  },

  addStartStopListener: function() {
    this.$startStop.click(this.startStopHandler.bind(this))
  },

  toggleStartStop: function() {
    var buttonText = this.$startStop.text()
    if (buttonText == 'Start') {
      this.start()
    } else {
      this.stop()
    }
  },

  styleAsStart: function() {
    this.$startStop.removeClass('stop').addClass('start')
    this.$startStop.text('Start')
  },

  styleAsStop: function() {
    this.$startStop.removeClass('start').addClass('stop')
    this.$startStop.text('Stop')
  },

  startStopHandler: function() {
    this.toggleStartStop()
  },

  resetHandler: function() {
    ClientTimer.reset()
    Socket.server.emit('reset')
    $('body').animate({backgroundColor:'#ccc'}, this.transitionTime)
    this.$reset.addClass('disabled')
    this.removeResetListener()
  },

  addResetListener: function() {
    this.removeResetListener() // safeguard against stacking listeners
    this.$reset.click(this.resetHandler.bind(this))
  },

  removeResetListener: function() {
    this.$reset.off('click', this.resetHandler.bind(this))
  },

  start: function() {
    this.styleAsStop()
    this.removeResetListener()
    this.$reset.addClass('disabled')
    ClientTimer.start()
    Socket.server.emit('start')
    $('body').animate({backgroundColor:'#D2FFDC'}, this.transitionTime)
  },

  stop: function() {
    this.styleAsStart()
    this.addResetListener()
    this.$reset.removeClass('disabled')
    ClientTimer.stop()
    Socket.server.emit('stop')
    $('body').animate({backgroundColor:'#FFDCDC'}, this.transitionTime)
  }
}