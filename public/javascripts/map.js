var mymap = L.map('mapid').setView([-34.628393, -58.466300], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibW9mYWxpdXMiLCJhIjoiY2tsdTQ4aDByMGM5eTJ3cWZjbHAwb3N5aSJ9.TcMWVqItCGS9HXFfhGMDAA'
}).addTo(mymap);

L.marker([-34.494304, -58.583124]).addTo(mymap)
L.marker([-34.628393, -58.466300]).addTo(mymap)