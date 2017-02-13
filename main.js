  var app = angular.module('myApp', [
      "ngRoute",
      "mobile-angular-ui",
      "ngStorage",
  ]);

  app.config(function($routeProvider, $locationProvider) {
      $routeProvider.when('/', {
          templateUrl: "contatos.html"
      })
      .when('/add', {
        templateUrl: "add.html"
      });
  });

app.controller('MainController', function($scope, $localStorage) {
  $scope.contatos = ["Ana Bastos", "Ana Maria", "Bianca", "2345meia78"];
  $localStorage.contatos = $scope.contatos

  $scope.letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm','n','o','p','q','r','s','t','u','v','x','y','z'];


  $scope.add = function(form) {
      $localStorage.contatos.push(form.nome);
      $scope.contatos = $localStorage.contatos;
  }
})
