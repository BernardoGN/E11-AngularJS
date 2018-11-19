
var app = angular.module('my-app', ['ngRoute']);

/* Configuração das Rotas */
app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "home.html"
        })
        .when("/about", {
            templateUrl: "about.html",
        })
        .when("/documentation", {
            templateUrl: "documentation.html",
        })
        .when("/erro", {
            templateUrl: "erro.html"
        })
        .otherwise({
            redirectTo: '/erro'
        });
});
