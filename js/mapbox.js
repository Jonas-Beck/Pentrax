mapboxgl.accessToken = "pk.eyJ1Ijoiam9uYTYzbTIiLCJhIjoiY2xocmo0MDhmMGVjcjNqc2lnZDNuYnVmaiJ9.Y7CapCGzopDZBo5-Z3kWkA" //FIXME Hide api key
var map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11", // Example style, you can choose others
    center: [9.522, 55.71], // Set the initial center coordinates
    zoom: 15, // Set the initial zoom level
})

 
// Create a new marker.
const marker = new mapboxgl.Marker().setLngLat([9.522, 55.71]).addTo(map)
