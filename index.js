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

		const userSearchParams = {
			key: "AIzaSyCO2JUg6qbtk_gGZRWS78YmABZEgtC95iQ",
			query: userQuery
		};
		findUser(userSearchParams);
	});
});

function findUser(params) {
	$.ajax({
		url: MAP_URL,
		type: "GET",
		data: params,
		success: function(data) {
			var lat = data.results[0].geometry.location.lat;
			console.log(lat);
			var lng = data.results[0].geometry.location.lng;
			const nearbyParams = {
				key: "AIzaSyCO2JUg6qbtk_gGZRWS78YmABZEgtC95iQ",
				location: `${lat}, ${lng}`,
				radius: 40000
			};

			nearbySearch(nearbyParams);
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
		var currentMarker = markers[i];
		var name = markers[i].name;
		console.log(name);
		marker = new google.maps.Marker({
			position: { lat: location.lat, lng: location.lng },
			map: map
			// icon: STEM icon img url
		});

		// infoWindow = new google.maps.InfoWindow({
		// 	content: name
		// });
		// marker.addListener("click", function() {
		// 	infoWindow.open(map, marker);
		// });
		var infowindow = new google.maps.InfoWindow();
		google.maps.event.addListener(
			marker,
			"click",
			(function(marker, name, infowindow) {
				return function() {
					infowindow.setContent(name);
					infowindow.open(map, marker);
					google.maps.event.addListener(map, "click", function() {
						infowindow.close();
					});
				};
			})(marker, name, infowindow)
		);
	}
	// console.log(markers);
}
