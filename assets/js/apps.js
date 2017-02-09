var landing = angular.module("landing", ["ngRoute"]);
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
    // .when("/resume",{
    //   templateUrl: "views/resume.html"
    // })
    .otherwise({
      redirectTo: "/home"

    });

});
console.log("and again");
