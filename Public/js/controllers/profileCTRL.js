app.controller('profileCTRL', ['$scope', 'dataService', function ($scope, dataService) {
    $scope.init = function () {
        dataService.getAllMarkers().then(function (response) {

            console.log(response);

        }, function error(response) {

            console.log(response);

        });
    }

    $scope.init();
}]);