app = angular.module('LinkSTEM', ['ngRoute']).config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "/Public/views/app.html"
        })
        .when("/main", {
            templateUrl: "/Public/views/main.html"
        })
        .when("/login", {
            templateUrl: "/Public/views/login.html"
        })
        .when("/register", {
            templateUrl: "/Public/views/register.html"
        })
        .when("/profile", {
            templateUrl: "/Public/views/profile.html"
        });
});