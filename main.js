  var app = angular.module('myApp', [
      "ngRoute",
      "mobile-angular-ui",
      "ngStorage",
      "firebase"
  ]);

  app.config(function($routeProvider, $locationProvider) {
      $routeProvider.when('/', {
          templateUrl: "contatos.html"
      })
      .when('/add', {
        templateUrl: "add.html"
      });
  });

app.controller('MainController', function($scope, $localStorage, $firebase) {
  console.log($localStorage.contatos)
  $scope.contatos = $localStorage.contatos;
  // $localStorage.contatos = $scope.contatos

  // $letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm','n','o','p','q','r','s','t','u','v','x','y','z'];


  $scope.add = function(form) {
      $scope.contatos.push(form.nome)
      console.log($scope.contatos)

      // ref.push(form.nome)
  }
})
