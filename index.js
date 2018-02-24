const MAP_URL = "https://maps.googleapis.com/maps/api/place/textsearch/json";
const MAP_API_KEY = "AIzaSyCO2JUg6qbtk_gGZRWS78YmABZEgtC95iQ";

$(function() {
	// Type into landing form  [Map]
	$("#search").submit(function(event) {
		event.preventDefault();
		userQuery = $("#search-query").val();
		$("#search-query").val("");

		const searchParams = {
			key: "AIzaSyCO2JUg6qbtk_gGZRWS78YmABZEgtC95iQ",
			query: userQuery
		};
		requestData(searchParams);
	});
});

function requestData(params) {
	$.ajax({
		url: MAP_URL,
		type: "GET",
		data: params,
		success: function(data) {
			displayMapData(data);
		},
		dataType: "json"
	});
}

function displayMapData(data) {
	console.log(data);
	var searchLocation = data.results[0].geometry.location;
	data.results.map(function(location) {
		console.log(location);
	});

	initMap(searchLocation);
}

function initMap(location) {
	var userLocation = { lat: location.lat, lng: location.lng };
	var map = new google.maps.Map(document.getElementById("map"), {
		zoom: 4,
		center: userLocation
	});
	var marker = new google.maps.Marker({
		position: userLocation,
		map: map
	});
}
