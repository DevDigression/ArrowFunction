﻿app.controller('markerCTRL', ['$scope', 'dataService', function ($scope, dataService) {
    $scope.AddMarker = function () {
        dataService.addMarker.then(function (response) {

            console.log(response);

        }, function error(response) {

            console.log(response);

        });
    }

    $scope.init();
}]);