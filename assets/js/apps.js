$(window).scroll(function () {
    var scrollDistance = $(window).scrollTop();

    // Show/hide menu on scroll
    //if (scrollDistance >= 850) {
    //		$('nav').fadeIn("fast");
    //} else {
    //		$('nav').fadeOut("fast");
    //}

    // Assign active class to nav links while scrolling
    $('.page-section').each(function (i) {
        if ($(this).position().top <= scrollDistance) {
            $('.navigation link a.active').removeClass('active');
            $('.navigation link a').eq(i).addClass('active');
        }
    });
}).scroll();

var landing = angular.module("landing", ["ngRoute"]).run(["$rootScope", "$anchorScroll", function ($rootScope, $anchorScroll) {
  $rootScope.$on("$locationChangeSuccess", function () {
    $anchorScroll();
  });
}]);;

console.log("working");
landing.config(function ($routeProvider) {
  console.log("and now");
  $routeProvider

    .when("/bio", {
      templateUrl: "template/views/bio.html"

    })
    .when("/projects", {
      templateUrl: "template/views/projects.html"

    })

    .otherwise({
      redirectTo: "/home"

    });

});
console.log("and again");

