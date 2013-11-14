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

  // Slider
  jQuery.rsCSS3Easing.easeOutBack = 'cubic-bezier(0.175, 0.885, 0.320, 1.275)';
  $('#homepage_slider').royalSlider({
    autoPlay: {
      enabled: true,
      pauseOnHover: false,
      delay: 6000
    },
    arrowsNav: false,
    controlNavigationSpacing: 0,
    controlNavigation: 'bullets',
    imageScaleMode: 'none',
    slidesSpacing: 0,
    blockLoop: true,
    controlInside: false,
    loop: true,
    numImagesToPreload: 6,
    keyboardNavEnabled: true,
    block: {
      delay: 300
    }
  });

});
