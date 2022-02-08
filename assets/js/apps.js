 var landing = angular.module("landing", ["ngRoute"]).run(["$rootScope", "$anchorScroll" , function ($rootScope, $anchorScroll) {
    $rootScope.$on("$locationChangeSuccess", function() {
                $anchorScroll();
    });
}]);;

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
