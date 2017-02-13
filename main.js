  var app = angular.module('myApp', [
      "ngRoute",
      "mobile-angular-ui",
  ]);

  app.config(function($routeProvider, $locationProvider) {
      $routeProvider.when('/', {
          templateUrl: "contatos.html"
      })
      .when('/add', {
        templateUrl: "add.html"
      });
  });

app.controller('MainController', function($scope) {
  $scope.contatos = ["Ana Bastos", "Ana Maria", "Bianca", "2345meia78"];

  $scope.add = function(form) {
      $scope.contatos.push(form.nome);
    }
})
