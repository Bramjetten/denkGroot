jQuery(document).ready(function($) {

  $("nav a, .get-to-know-us").bind('click', function(e) {
    var $anchor = $(this);

    $('[data-spy="scroll"]').each(function() {
      var $spy = $(this).scrollspy('refresh')
    });

    $('html,body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top
    }, 800, "easeInOutExpo");

    e.preventDefault();
  });

});
