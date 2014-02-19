var Socket = {
  server: io.connect('http://two-timers.herokuapp.com'),
  init: function() {
    this.server.on('update', function(data){
      $('#server-side .counter').text(data.time)
    })
  }
}