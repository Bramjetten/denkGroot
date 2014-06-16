jQuery(document).ready(function($) {

  function sniffer() {
    var introduction = $('.introduction');
    var windowHeight = $(window).height();
    var introHeight = introduction.height();

    introduction.css("top", windowHeight / 2 - introHeight / 2 + "px");
  }
  
  sniffer();

  // Video BG



});

$(document).on("click", "li.nav-toggle a", function() {
  $("body nav > ul").toggleClass('nav-opened');
  return false;
});