
var app = angular.module('my-app', ['ngRoute']);

/* Configuração das Rotas */
app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "home.html",
            controller: "MainController",
            controllerAs: "ctrl"
        })
        .when("/about", {
            templateUrl: "about.html",
        })
        .when("/documentation/:age", {
            templateUrl: "documentation.html",
            controller: "DocsController",
            controllerAs: "docsCtrl"
        })
        .when("/erro", {
            templateUrl: "erro.html"
        })
        .otherwise({
            redirectTo: '/erro'
        });
});

app.controller("MainController", function($location) {
    this.text = '';
    this.enter = function(age) {
        if (age >= 18){
            $location.path("documentation/" + age);
        }else{
            this.text = "Muito jovem :(";
        }
      };
  });

  app.controller("DocsController", function($routeParams, $location) {  
    this.age = $routeParams.age;
    if (this.age < 18){
        $location.path("/");
    }
  });