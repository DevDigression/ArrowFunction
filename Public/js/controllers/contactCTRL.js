app.controller('contactCTRL', ['$scope', function ($scope) {

    const ORGANIZATION_SEARCH_URL =
        "https://api.linkedin.com/v2/search?q=companiesV2";
    const CLIENT_ID = "78k3tjnxafhvea";
    const CLIENT_SECRET = "cFp691FCCYnyhSIi";
    const AUTH_URL = "https://www.linkedin.com/oauth/v2/authorization";
    const TOKEN_URL = "https://www.linkedin.com/oauth/v2/accessToken";
    const LINKEDIN_URL =
        "https://api.linkedin.com/v1/people/~?oauth2_access_token=";

    let userQuery;

    $(function () {
        $("#search").submit(function (event) {
            event.preventDefault();
            userQuery = $("#search-query").val();
            $("#search-query").val("");

            const params = {
                "baseSearchParams.keywords": userQuery
            };
            // const params = {
            // 	response_type: "code",
            // 	client_id: CLIENT_ID,
            // 	redirect_uri: "http://apply.useast.appfog.ctl.io/api/signin.php",
            // 	state: "arrowfunction"
            // 	// scope: ,
            // };
            // authRequest(params);
            organizationSearch(params);
        });
    });

    // function displayData(params) {
    // 	console.log(params);
    // }

    function organizationSearch(params) {
        console.log(params);

        $.ajax({
            url: ORGANIZATION_SEARCH_URL,
            type: "GET",
            data: params
            // dataType: "json"
        }).done(function (res) {
            console.log(res);
        });
    }

    // function authRequest(params) {
    // 	console.log("requestData");

    // 	$.ajax({
    // 		url: AUTH_URL,
    // 		type: "GET",
    // 		data: Object.assign(params, LINKEDIN_PARAMS),
    // 		dataType: "json"
    // 	}).done(function() {
    // 		tokenRequest(params);
    // 	});
    // }

    // function tokenRequest(params) {
    // 	console.log("tokenRequest");

    // 	$.ajax({
    // 		grant_type: "authorization_code",
    // 		client_id: CLIENT_ID,
    // 		client_secret: CLIENT_SECRET,
    // 		redirect_uri: "http://apply.useast.appfog.ctl.io/api/signin.php"
    // 	}).done(function() {
    // 		console.log(data);
    // 	});
    // }
}]);