// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with center at the San Francisco airport.
// Create the map object with center and zoom level.


// Coordinates for each point to be used in the polyline.
// let line = [
//   [33.9416, -118.4085],
//   [37.6213, -122.3790],
//   [40.7899, -111.9791],
//   [47.4502, -122.3088]
// ];
//   // Create a polyline using the line coordinates and make the line red.
// L.polyline(line, {
//   color: "yellow"
// }).addTo(map);
 // We create the tile layer that will be the background of our map.

let light = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        accessToken: API_KEY
    });
    // We create the dark view tile layer that will be an option for our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      accessToken: API_KEY
  });
  // Create a base layer that holds both maps.
let baseMaps = {
  Light: light,
  Dark: dark
};
// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
  center: [44.0, -80.0],
  zoom: 2,
  layers: [light]
})
// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);
    let airportData = "https://raw.githubusercontent.com/dubes1/Mapping_Earthquakes/main/majorAirports.json";
    
    // Then we add our 'graymap' tile layer to the map.
    // Accessing the airport GeoJSON URL
// Grabbing our GeoJSON data.
// Accessing the Toronto airline routes GeoJSON URL.
let torontoData = "https://raw.githubusercontent.com/dubes1/Mapping_Earthquakes/main/torontoRoutes.json";
// Grabbing our GeoJSON data.
d3.json(torontoData).then(function(data) {
  console.log(data);
// Creating a GeoJSON layer with the retrieved data.
L.geoJson(data, {
  color: "#ffffa1",
  weight: 2,
  onEachFeature: function(feature, layer){
    layer.bindPopup("<h3> Airline" + feature.properties.airline + "</h3><hr><h3> Destination: "+feature.properties.dst+"</h3>")
  }
}).addTo(map);
});