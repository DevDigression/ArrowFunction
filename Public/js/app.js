app = angular.module('LinkSTEM', ['ngRoute']).config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "Public/views/login.html"
        })
        .when("/contacts", {
            templateUrl: "Public/views/contacts.html"
        })
        .when("/newuser", {
            templateUrl: "Public/views/newuser.html"
        })
        .when("/profile", {
            templateUrl: "Public/views/profile.html"
        });
});