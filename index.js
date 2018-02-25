const MAP_URL = "https://maps.googleapis.com/maps/api/place/textsearch/json";
const NEARBY_URL =
	"https://maps.googleapis.com/maps/api/place/nearbysearch/json";
const MAP_API_KEY = "AIzaSyCO2JUg6qbtk_gGZRWS78YmABZEgtC95iQ";
var map, marker, infoWindow;

$(function() {
	// Type into landing form  [Map]
	$("#search").submit(function(event) {
		event.preventDefault();
		var userQuery = $("#search-query").val();
		$("#search-query").val("");

		const searchParams = {
			key: "AIzaSyCO2JUg6qbtk_gGZRWS78YmABZEgtC95iQ",
			query: userQuery
		};

		const nearbyParams = {
			key: "AIzaSyCO2JUg6qbtk_gGZRWS78YmABZEgtC95iQ",
			location: "-10, 35",
			radius: 40000
		};
		// requestData(searchParams);
		nearbySearch(nearbyParams);
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

function nearbySearch(params) {
	var nearbyLocation = "";
	$.ajax({
		url: NEARBY_URL,
		type: "GET",
		data: params,
		success: function(data) {
			initMap(data);
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

function displayNearbyData(data) {
	console.log(data);
	var nearbyLocation = data.results[0].geometry.location;
	// createMarkers(data.results);
	// data.results.map(function(location) {
	// 	console.log(location);
	// });

	initMap(nearbyLocation);
}

function initMap(data) {
	var centerLocation = {
		lat: data.results[0].geometry.location.lat,
		lng: data.results[0].geometry.location.lng
	};
	map = new google.maps.Map(document.getElementById("map"), {
		zoom: 4,
		center: centerLocation
	});
	// marker = new google.maps.Marker({
	// 	position: centerLocation,
	// 	map: map
	// });
	var markers = data.results;
	for (var i = 0; i < markers.length; i++) {
		var location = markers[i].geometry.location;
		marker = new google.maps.Marker({
			position: { lat: location.lat, lng: location.lng },
			map: map
			// icon: STEM icon img url
		});
		// markers.push(marker);
	}
	console.log(markers);
}

function createMarkers(data) {
	console.log(data);
	var markers = [];
	for (var i = 0; i < data.length; i++) {
		var location = data[i].geometry.location;
		marker = new google.maps.Marker({
			position: { lat: location.lat, lng: location.lng },
			map: map
			// icon: STEM icon img url
		});
		markers.push(marker);
	}

	infoWindow = new google.maps.InfoWindow({
		content: "<h1>Title</h1>"
	});

	marker.addListener("click", function() {
		infoWindow.open(map, marker);
	});
	console.log(markers);
	// var markerCluster = new MarkerClusterer(map, markers);
}
