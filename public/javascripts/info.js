Info = {
  $button: null,

  init: function() {
    this.$button = $('#info i')
    this.$button.on('click', this.showHandler.bind(this));
  },

  showHandler: function() {
    this.release();
    this.expand();
    setTimeout(function() {
      Info.$button.on('click', Info.hideHandler.bind(Info));
    }, 600);
  },

  hideHandler: function() {
    this.release();
    this.hideText();
    setTimeout(function() {
      Info.$button.on('click', Info.showHandler.bind(Info));
    }, 600);
  },

  release: function() {
    this.$button.off('click')
  },

  expand: function() {
    $('div#info').animate({'width': '346px', 'height': '201px'}, 400, this.showText)
  },

  shrink: function() {
    $('div#info').animate({'width': '37px', 'height': '37px'}, 400)
  },

  showText: function() {
    $('#about').fadeIn(200)
  },

  hideText: function() {
    $('#about').fadeOut(200)
    setTimeout(this.shrink, 200)
  }
};