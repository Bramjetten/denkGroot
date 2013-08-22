jQuery(document).ready(function($) {

  function sniffer() {
    var introduction = $('.introduction');
    var windowHeight = $(window).height();
    var introHeight = introduction.height();

    introduction.css("top", windowHeight / 2 - introHeight / 2 + "px");
  }
  
  sniffer();

  $("nav a, .get-to-know-us, .navlink").bind('click', function(e) {
    $('html,body').stop().animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 800, "easeInOutExpo");

    e.preventDefault();
  });

  //on window resize event
  $(window).resize(function(){
    sniffer();
    $('[data-spy="scroll"]').scrollspy('refresh');
  });

  // Video BG
  var videoBG = $('#home').videoBG({
    position: "fixed",
    zIndex: -1,
    mp4: 'javascripts/main.mp4',
    ogv: 'javascripts/main.ogv',
    webm: 'javascripts/main.webm',
    poster: 'javascripts/poster.jpg',
    opacity: .35
  });

});
