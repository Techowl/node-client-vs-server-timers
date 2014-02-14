Buttons = {
  $startStop: null,
  $reset: null,
  init: function() {
    this.$startStop = $('button#start-stop')
    this.$reset = $('button#reset')
    this.addEventListeners()
  },

  addEventListeners: function() {
    Buttons.$startStop.click(function() {
      // clientTimer.toggle()
      // serverTimer.toggle()
      Buttons.toggleStartStopAppearance()
    })
    Buttons.$reset.click(function() {
      // clientTimer.reset()
      // clientServer.reset()
      Buttons.toggleResetAppearance()
    })
  }

  toggleStartStopAppearance: function() {
    var buttonText = Buttons.$startStop.text()
    if (buttonText == 'Start') {
      Buttons.styleAsStart()
    } else {
      Buttons.styleAsStop()
    }
  },

  toggleResetAppearance: function() {
    // check whether timers are running
    // based on that, toggle to or away from grayish appearance
  },

  styleAsStart: function() {

  },

  styleAsStop: function() {

  }
}