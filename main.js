  var app = angular.module('myApp', [
      "ngRoute",
      "mobile-angular-ui"
  ]);

  app.config(function($routeProvider, $locationProvider) {
      $routeProvider.when('/', {
          templateUrl: "contatos.html"
      })
      .when('/add', {
        templateUrl: "add.html"
      });
  });
