var Socket = {
  server: io.connect('http://localhost:1337'),
  init: function() {
    this.server.on('update', function(data){
      $('#server-side .counter').text(data.time)
    })
  }
}