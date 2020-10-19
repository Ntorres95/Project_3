// Create the map object with layers
var myMap = L.map("map-id", {
  center: [42.3601, -71.0589],
  zoom: 12
});

// Create the tile layer that will be the background of the map
L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "satellite-streets-v11",
    accessToken: API_KEY
}).addTo(myMap);

d3.csv("Resources/listings.csv", function(data) { 
  console.log(data);
  for (var i = 0; i < data.length; i++) {
    var listing = data[i];
    L.marker([
      parseFloat(listing["latitude"]),
      parseFloat(listing["longitude"])
    ])
      .addTo(myMap)
      .bindPopup(listing.name)
}});