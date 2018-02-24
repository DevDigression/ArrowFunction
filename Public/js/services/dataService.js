app.service('dataService', ['$http', function ($http) {

    function WebServiceCall(url, data) {
        return $http({
            method: 'POST',
            dataType: 'json',
            url: url,
            data: data,
            headers: { 'Content-Type': 'application/json' }
        });
    };

}]);