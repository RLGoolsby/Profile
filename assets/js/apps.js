 var landing = angular.module("landing", ["ngRoute"]).value('$anchorScroll', angular.noop);
 console.log("working");
 landing.config(function($routeProvider){
  console.log("and now");
  $routeProvider

    .when("/bio",{
      templateUrl: "template/views/bio.html"

    })
    .when("/projects",{
      templateUrl: "template/views/projects.html"

    })

    .otherwise({
      redirectTo: "/home"

    });

});
console.log("and again");
