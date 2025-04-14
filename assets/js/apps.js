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


$(document).ready(function () {
  $('a[href*=#]').bind('click', function (e) {
    e.preventDefault(); // prevent hard jump, the default behavior

    var target = $(this).attr("href"); // Set the target as variable

    // perform animated scrolling by getting top-position of target-element and set it as scroll target
    $('html, body').stop().animate({
      scrollTop: $(target).offset().top
    }, 600, function () {
      location.hash = target; //attach the hash (#jumptarget) to the pageurl
    });

    return false;
  });
});
