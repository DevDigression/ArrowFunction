const MAP_URL = "https://maps.googleapis.com/maps/api/place/textsearch/json";
const MAP_API_KEY = "AIzaSyCO2JUg6qbtk_gGZRWS78YmABZEgtC95iQ";

$(function() {
	// Type into landing form  [Map]
	$("#search").submit(function(event) {
		event.preventDefault();
		userQuery = $("#search-query").val();
		$("#search-query").val("");

		const searchParams = {
			query: userQuery
		};
		requestData("displayMapData");
	});
});

function requestData(callback) {
	$.ajax({
		url: MAP_URL,
		type: "GET",
		data: {
			key: MAP_API_KEY,
			query: "Miami"
		},
		success: function(data) {
			console.log(data);
		},
		dataType: "json",
		jsonpCallback: callback
	});
}

function displayMapData() {
	console.log("displayMapData");
}
