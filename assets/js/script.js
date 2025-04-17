// $(window).on("scroll", function () {
//   var $header = $("header");

//   if ($(this).scrollTop() > 0) {
//     $header.addClass("sticky");
//   } else {
//     $header.removeClass("sticky");
//   }
// });

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top', 
    offset: 50
});  
// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});
// The Smooth Scroll Effect
$(document).on('click', 'a[href^="#"]', function(event){
  event.preventDefault();
  if($.attr(this, 'href')!="#"){
    $('html, body').animate({
       scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 800, 'swing');    
  }
});
// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});