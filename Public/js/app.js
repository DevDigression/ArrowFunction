app = angular.module('LinkSTEM', ['ngRoute']).config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "/Public/views/main.html"
        })
        .when("/login", {
            templateUrl: "/Public/views/login.html"
        })
        .when("/profile", {
            templateUrl: "/Public/views/profile.html"
        })
        .when("/createUser", {
            templateUrl: "/Public/views/profile.html"
        });
});