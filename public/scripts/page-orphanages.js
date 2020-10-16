//setView([latitude, longitude],zoom)
//Create map
const map = L.map('mapid').setView([-23.5835824,-46.5931261], 17);


//Create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29,68],
    popupAnchor: [170,2]
})

//Create popup overlay
const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent
('Casa Madre Assunta Marchetti <a href="/orphanage?id=1" class="choose-orphanage"><img src="/images/arrow-white.svg"></a>')


//create and add TileLayer
L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    ).addTo(map);


    //Create and add marker
L.marker([-23.5835824,-46.5931261],{icon:icon})
    .addTo(map)
    .bindPopup(popup)

