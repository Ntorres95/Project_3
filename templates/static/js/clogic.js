// Create the map object with layers
var myMap = L.map("map", {
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

var greenIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

d3.csv("Resources/listings.csv", function(data) { 
  console.log(data);
  for (var i = 0; i < data.length; i++) {
    var listing = data[i];
    L.marker([
      parseFloat(listing["latitude"]),
      parseFloat(listing["longitude"]),
      {icon: greenIcon}
    ])
      .addTo(myMap)
      .bindPopup("<h6>" + "Listing URL: " + listing.listing_url + "</h6>"
      + "<br>Property Type: " + listing.property_type
      + "<br>Number of Reviews: " + listing.number_of_reviews 
      + "<br>Number of beds: " + listing.beds
      + "<br>Price Per Night: " + listing.price)
}});

var highReviews = [];

d3.csv("Resources/listings.csv", function(data) {
  for (var i = 0; i < data.length; i++) {
    if (data[i].number_of_reviews > 200) {
      highReviews.push(data[i])
      }
  }console.log(highReviews)
})

L.marker([
  parseFloat(highReviews["latitude"]), 
  parseFloat(highReviews["longitude"]), 
  {icon: greenIcon}
])
  .addTo(myMap)
  .bindPopup("Listing Name: " + highReviews.name + "<br>Number of Reviews: " + highReviews.number_of_reviews)
