var Socket = {
  io: io.connect('http://localhost:1337'),
  init: function() {
    this.io.on('update', function(data){
      $('#server-side .counter').text(data.time)
    })
  }
}