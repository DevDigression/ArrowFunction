app.controller("mainCTRL", [
	"$scope",
	"dataService",
	function($scope, dataService) {
		const MAP_URL =
			"https://maps.googleapis.com/maps/api/place/textsearch/json";
		const NEARBY_URL =
			"https://maps.googleapis.com/maps/api/place/nearbysearch/json";
		const GEOCODE_URL = "https://maps.googleapis.com/maps/api/geocode/json";
		const MAP_API_KEY = "AIzaSyCO2JUg6qbtk_gGZRWS78YmABZEgtC95iQ";
		var map, marker, infoWindow, userQuery, userKeyword, fullAddress;

		$(function() {
			$("#search").submit(function(event) {
				event.preventDefault();

				address = $("#address").val();
				$("#address").val("");
				userQuery = $("#search-query").val();
				$("#search-query").val("");
				userKeyword = $("#keyword-query").val();
				$("#keyword-query").val("");

				fullAddress = address + " " + userQuery;

				const geoParams = {
					address: fullAddress,
					key: "AIzaSyCO2JUg6qbtk_gGZRWS78YmABZEgtC95iQ"
				};

				const userSearchParams = {
					key: "AIzaSyCO2JUg6qbtk_gGZRWS78YmABZEgtC95iQ",
					query: userQuery
				};
				geoCode(geoParams);
				// findUser(userSearchParams);
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
						keyword: userKeyword,
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
			console.log(data);
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
				var icon = {
					url: markers[i].icon,
					size: new google.maps.Size(71, 71),
					origin: new google.maps.Point(0, 0),
					anchor: new google.maps.Point(17, 34),
					scaledSize: new google.maps.Size(25, 25)
				};
				marker = new google.maps.Marker({
					position: { lat: location.lat, lng: location.lng },
					map: map,
					icon: icon
				});

				var infowindow = new google.maps.InfoWindow();
				google.maps.event.addListener(
					marker,
					"click",
					(function(marker, name, infowindow) {
						return function() {
							infowindow.setContent(name);
							infowindow.open(map, marker);
							google.maps.event.addListener(
								map,
								"click",
								function() {
									infowindow.close();
								}
							);
						};
					})(marker, name, infowindow)
				);
			}
		}

		function geoCode(params) {
			$.ajax({
				url: GEOCODE_URL,
				type: "GET",
				data: params,
				success: function(data) {
					initMap(data);
				},
				dataType: "json"
			});
		}
	}
]);
