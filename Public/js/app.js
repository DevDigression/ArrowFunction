app = angular.module('LinkSTEM', ['ngRoute']).config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "/Public/views/About.html"
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
        })
        .when("/markeradd", {
            templateUrl: "/Public/views/markerAdd.html"
        });
});