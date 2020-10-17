const URI = "/listing";
d3.json(URI).then(function(data) { 
  data.index = +data.index;
  data.id = +data.id;
  data.listing_url = +data.listing_url;
  data.name = +data.name;
  data.price_y = +data.price_y;
  data.number_of_reviews = +data.number_of_reviews;
  data.review_scores_rating = +data.review_scores_rating;
  data.date = +data.date;
  data.available = +data.available;
  data.neighbourhood = +data.neighbourhood;
  data.latitude = +data.latitude;
  data.longitude = +data.longitude;
  data.propert_type = +data.propert_type;
  data.bedrooms = +data.bedrooms;
  data.beds = +data.beds;

console.log(data)
}
// Create the tile layer that will be the background of the map
var lightmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "light-v10",
    accessToken: API_KEY
});

// layers for avail, top10, empty data
var Available = new L.LayerGroup();
var Top_10 = new L.LayerGroup();
var Empty = new L.LayerGroup();

// Create the map object with layers
var map = L.map("map-id", {
    center: [42.3601, -71.0589],
    zoom: 12,
    layers: [lightmap]
});

// baseMap object
var baseMap = {
    "Light Map": lightmap
  };

// Add our 'lightmap' tile layer to the map
lightmap.addTo(map);

// Create an overlayMaps object to hold the layers of data
var overlayMaps = {
    "Availables": availables,
    "top10s": top10s
  };

// Create a layer control, pass in the baseMaps and overlayMaps. Add the layer control to the map
L.control.layers(baseMap, overlayMaps, { 
    collapsed: false
  }).addTo(map);

// Create an overlayMaps object to hold the available, top10, empty layers
var overlayMaps = {
    "Available": layers.AVAILABLE,
    "Top 10": layers.TOP_10,
    "EMPTY": layers.EMPTY
};

// Create a layer control, pass in the baseMaps and overlayMaps. Add the layer control to the map
L.control.layers(null, overlays).addTo(map);
