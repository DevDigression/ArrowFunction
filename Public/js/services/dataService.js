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


    this.getAllMarkers = function () {
        return WebServiceCall('/default.aspx/getAllMarkers', JSON.stringify({}));
    };

    this.addProvider = function (provider) {
        return WebServiceCall('/default.aspx/addProvider', JSON.stringify({provider: provider}));
    };
}]);