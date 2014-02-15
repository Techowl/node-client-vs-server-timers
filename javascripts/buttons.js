Buttons = {
  $startStop: null,
  $reset: null,
  init: function() {
    this.$startStop = $('button#start-stop')
    this.$reset = $('button#reset')
    this.addStartStopListener()
  },

  addStartStopListener: function() {
    Buttons.$startStop.click(function() {
      // ClientTimer.toggle()
      // ServerTimer.toggle()
      Buttons.toggleStartStop()
    })
  },

  // reset button event handler: do ClientTimer.reset(), ServerTimer.reset(), and add disabled class back to self

  toggleStartStop: function() {
    var buttonText = Buttons.$startStop.text()
    if (buttonText == 'Start') {
      Buttons.styleAsStop()
      // bind listener to reset button
      // remove disabled class from reset button
    } else {
      Buttons.styleAsStart()
      // unbind listener from reset button
      // add disabled class to reset button
    }
  },

  styleAsStart: function() {
    Buttons.$startStop.removeClass('stop').addClass('start')
    Buttons.$startStop.text('Start')
  },

  styleAsStop: function() {
    Buttons.$startStop.removeClass('start').addClass('stop')
    Buttons.$startStop.text('Stop')
  }
}