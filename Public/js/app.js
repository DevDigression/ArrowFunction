app = angular.module('LinkSTEM', []).config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "Public/views/login.html"
        });
});;