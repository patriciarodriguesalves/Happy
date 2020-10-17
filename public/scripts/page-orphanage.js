const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

//Get values from html
const lat = document.querySelector('span[data-lat]').dataset.lat;
const lng = document.querySelector('span[data-lng]').dataset.lng;

//setView([latitude, longitude],zoom)
//Create map
const map = L.map('mapid', options).setView([lat,lng], 17);


//Create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29,68],
    popupAnchor: [170,2]
})


//create and add TileLayer
L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    ).addTo(map);

L.marker([lat,lng],{icon})
    .addTo(map)

/*image galery*/
function selectImage(event){
    //clicked button
    const button = event.currentTarget;

    //Remove class "active"
    const buttons = document.querySelectorAll('.images button');
    buttons.forEach((button) => {
        button.classList.remove('active');
    });

    //Select clicked image 
    const image = button.children[0];
    const imageContainer = document.querySelector('.orphanage-details > img');

    //Update the image container
    imageContainer.src = image.src;

    //Add class "active" to the clicked button
    button.classList.add('active');
}


