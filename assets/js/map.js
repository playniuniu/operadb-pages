// Mapbox token setting
var mapbox_id = "mapbox.streets"
var mapbox_token="pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw"

function display_leaflet_map() {
    // Init view location and view level
    var view_location = [51.5129211,-0.1243863];
    var view_level = 14;

    // Init Leaflet map
    var map = L.map("map",{
        zoomControl: false,
        scrollWheelZoom: false,
        minZoom: 2
    });
    
    // map.addControl(new backButton());
    map.setView(view_location, view_level);

    // Set map params
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: '&copy; 中国国家大剧院',
        maxZoom: 18,
        id: mapbox_id,
        accessToken: mapbox_token
    }).addTo(map);

    // Add zoom
    L.control.zoom({
        position:'topleft'
    }).addTo(map);
    
    // Add marker
    var marker = L.marker(view_location).addTo(map);
    marker.bindPopup("<h2>英国皇家歌剧院</h2><p>Bow Street Covent Garden London WC2E 9DD</p>").openPopup();
}