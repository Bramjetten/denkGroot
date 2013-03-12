jQuery(document).ready(function($) {
  $("nav a, .get-to-know-us").click(function(e){
    e.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 800, "easeInOutExpo");
  });
});