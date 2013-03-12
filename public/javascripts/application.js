jQuery(document).ready(function($) {

  $("nav a, .get-to-know-us").bind('click', function(e) {
    $('html,body').stop().animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 800, "easeInOutExpo");

    e.preventDefault();
  });

});
