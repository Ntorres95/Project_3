// Create the tile layer that will be the background of the map
var lightmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "light-v10",
    accessToken: API_KEY
});

  // Create a baseMaps object to hold the lightmap layer
var layers = {
    AVAILABLE: new L.LayerGroup(),
    TOP_10: new L.LayerGroup(),
    EMPTY: new L.LayerGroup()
};

  // Create the map object with layers
var map = L.map("map-id", {
    center: [37.0902, -95.7129],
    zoom: 12,
    layers: [
        layers.AVAILABLE,
        layers.TOP_10,
        layers.EMPTY
    ]
});

// Add our 'lightmap' tile layer to the map
lightmap.addTo(map);

// Create an overlayMaps object to hold the available, top10, empty layers
var overlayMaps = {
    "Available": layers.AVAILABLE,
    "Top 10": layers.TOP_10,
    "EMPTY": layers.EMPTY
};

// Create a layer control, pass in the baseMaps and overlayMaps. Add the layer control to the map
L.control.layers(null, overlays).addTo(map);