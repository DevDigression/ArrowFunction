app.controller('loginCTRL', ['$scope', '$location', function ($scope, $location) {
    $scope.SignIn = function () {
        if ($scope.Email && $scope.Password) {
            $location.path('/profile');
        } else {
            alert("No username/password! Please, try again.")
        }
    }
}]);