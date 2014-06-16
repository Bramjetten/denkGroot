jQuery(document).ready(function($) {

  function sniffer() {
    var introduction = $('.introduction');
    var windowHeight = $(window).height();
    var introHeight = introduction.height();

    introduction.css("top", windowHeight / 2 - introHeight / 2 + "px");
  }
  
  sniffer();

  // Video BG

  var videoBG = $('#home').videoBG({
    position: "absolute",
    zIndex: -1,
    mp4: 'javascripts/main.mp4',
    ogv: 'javascripts/main.ogv',
    webm: 'javascripts/main.webm',
    poster: 'javascripts/poster.jpg',
    opacity: .35
  });
  if(typeof window.orientation !== 'undefined') {
    $('#home').css({"background": 'url("/javascripts/poster.jpg") center'});
  }

});

$(document).on("click", "li.nav-toggle a", function() {
  $("body nav > ul").toggleClass('nav-opened');
  return false;
});