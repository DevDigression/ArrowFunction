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

    this.addMarker = function () {
        return WebServiceCall('/default.aspx/getAllMarkers', JSON.stringify({}));
    };

    this.getAllMarkers = function () {
        return WebServiceCall('/default.aspx/getAllMarkers', JSON.stringify({}));
    };

    this.getProviderMarkers = function (providerID) {
        return WebServiceCall('/default.aspx/getProviderMarkers', JSON.stringify({ providerID: providerID}));
    };

    this.addProvider = function (provider) {
        return WebServiceCall('/default.aspx/addProvider', JSON.stringify({ provider: provider}));
    };

    this.getProvider = function (username, password) {
        return WebServiceCall('/default.aspx/getProvider', JSON.stringify({ username: username, password: password }));
    };
}]);