Buttons = {
  $startStop: null,
  $reset: null,
  init: function() {
    this.$startStop = $('button#start-stop')
    this.$reset = $('button#reset')
    this.addStartStopListener()
  },

  addStartStopListener: function() {
    Buttons.$startStop.click(Buttons.startStopHandler)
  },

  toggleStartStop: function() {
    var buttonText = Buttons.$startStop.text()
    if (buttonText == 'Start') {
      Buttons.start()
    } else {
      Buttons.stop()
    }
  },

  styleAsStart: function() {
    Buttons.$startStop.removeClass('stop').addClass('start')
    Buttons.$startStop.text('Start')
  },

  styleAsStop: function() {
    Buttons.$startStop.removeClass('start').addClass('stop')
    Buttons.$startStop.text('Stop')
  },

  startStopHandler: function() {
    Buttons.toggleStartStop()
  },

  resetHandler: function() {
    // ClientTimer.reset()
    // ServerTimer.reset()
    console.log('OH HAI THERE')
    Buttons.$reset.addClass('disabled')
    Buttons.removeResetListener()
  },

  addResetListener: function() {
    Buttons.removeResetListener() // safeguard against stacking listeners
    Buttons.$reset.click(Buttons.resetHandler)
  },

  removeResetListener: function() {
    Buttons.$reset.off('click', Buttons.resetHandler)
  },

  start: function() {
    Buttons.styleAsStop()
    Buttons.removeResetListener()
    Buttons.$reset.addClass('disabled')
    // ClientTimer.start()
    // ServerTimer.start()
  },

  stop: function() {
    Buttons.styleAsStart()
    Buttons.addResetListener()
    Buttons.$reset.removeClass('disabled')
    // ClientTimer.stop()
    // ServerTimer.stop()
  }
}