app.controller("mainCTRL", [
	"$scope",
	"dataService",
	function($scope, dataService) {
const MAP_URL = "https://maps.googleapis.com/maps/api/place/textsearch/json";
const NEARBY_URL =
	"https://maps.googleapis.com/maps/api/place/nearbysearch/json";
const GEOCODE_URL = "https://maps.googleapis.com/maps/api/geocode/json";
const MAP_API_KEY = "AIzaSyCO2JUg6qbtk_gGZRWS78YmABZEgtC95iQ";
var map, marker, infoWindow, userQuery, userKeyword;

var providers = [
	{
		name: "Sally Science",
		image: "https://thumbs.dreamstime.com/b/friendly-teacher-22068188.jpg",
		email: "sally@sfsc.com",
		company: "South Florida Science Center",
		keywords: ["Technology", "Physics", "Chemistry", "Aeronautics"],
		address: "4801 Dreher Trail North, West Palm Beach, FL",
		website: "https://www.sfsciencecenter.org/",
		services: ["Fields Trips", "Lectures", "Experiments"]
	},
	{
		name: "Ted Technology",
		image:
			"https://png.pngtree.com/element_origin_min_pic/16/10/29/97d5546f88c1fa877434748dabb26235.jpg",

		email: "ted@palmbeachtech.org",
		company: "Palm Beach Tech",
		keywords: ["Programming", "Engineering", "Math", "Technology"],
		address: "313 Datura St, Suite 100, West Palm Beach, FL",
		website: "https://palmbeachtech.org/",
		services: ["Internships", "Tutoring", "Meetups"]
	},
	{
		name: "Edward Engineer",
		image:
			"https://i.pinimg.com/236x/ac/d9/d7/acd9d7df89783e2650a9f76d2c3bd0d0.jpg",
		email: "info@southfloridamuseum.org",
		company: "South Florida Museum",
		keywords: ["Biology", "Chemistry", "Physics"],
		address: "201 10th St. W Bradenton, FL",
		website: "http://www.southfloridamuseum.org/",
		services: ["Tutoring", "Field Trips", "Internships"]
	}
];

$(function() {
	$("#search").submit(function(event) {
		event.preventDefault();
		userQuery = $("#search-query").val();
		$("#search-query").val("");

		address = $("#address").val();
		$("#address").val("");
		const geoParams = {
			address: address,
			key: "AIzaSyCO2JUg6qbtk_gGZRWS78YmABZEgtC95iQ"
		};
		userKeyword = $("#keyword-query").val();
		$("#keyword-query").val("");

		const userSearchParams = {
			key: "AIzaSyCO2JUg6qbtk_gGZRWS78YmABZEgtC95iQ",
			query: userQuery
		};
		geoCode(geoParams);
		// findUser(userSearchParams);
	});

	var providersList = providers.map(provider => renderProviders(provider));

	$(".providers").html(providersList);

	$(".provider").on("click", "span", function(event) {
		var providerAddress = $(this).text();
		const providerParams = {
			address: providerAddress,
			key: "AIzaSyCO2JUg6qbtk_gGZRWS78YmABZEgtC95iQ"
		};
		geoCode(providerParams);
	});

	$(".services").on("click", function(event) {
		$(this)
			.find("ul")
			.toggleClass("hidden");
	});
});

function renderProviders(provider) {
	return `
		<div class="provider">
		<img src="${provider.image}" />
		<h2>${provider.name}</h2>
		<h3>${provider.company}</h3>
		<p>${provider.email}</p>
		<p><span>${provider.address}</span></p>
		<a href=${provider.website} target="_blank">${provider.website}</a>
		<div class="services">Services
			<ul class="hidden">
				${provider.services
					.map(service => {
						return `<li>${service}</li>`;
					})
					.join("")}
			</ul>
		</div>
		</div>
      `;
}

function findUser(params) {
	$.ajax({
		url: MAP_URL,
		type: "GET",
		data: params,
		success: function(data) {
			var lat = data.results[0].geometry.location.lat;
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
		zoom: 12,
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
					google.maps.event.addListener(map, "click", function() {
						infowindow.close();
					});
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

]);
