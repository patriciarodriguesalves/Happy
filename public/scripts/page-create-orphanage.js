//setView([latitude, longitude],zoom)
//Create map
const map = L.map('mapid').setView([-23.5835824,-46.5931261], 17);

//create and add TileLayer
L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    ).addTo(map);

//Create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29,68]
})

let marker;

//Create and add marker
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    //remove icon
    marker && map.removeLayer(marker);
    
    //Add icon layer
    marker = L.marker([lat, lng], {icon}).addTo(map);

})   

//add photos field
function addPhotoField(){
    
    const container = document.querySelector('#images');
    const fieldsContainer =  document.querySelectorAll('.new-upload');
    
    //Get position 0 with length-1
    const newFieldContainer = fieldsContainer[fieldsContainer.length -1].cloneNode(true);

    const input = newFieldContainer.children[0];

    if(input.value == ""){
        return
    }

    input.value = "";

    container.appendChild(newFieldContainer);
}

function deleteField(event){
    const span = event.currentTarget;

    const fieldsContainer =  document.querySelectorAll('.new-upload');

    if(fieldsContainer.length < 2){
        span.parentNode.children[0].value = "";
        return
    }

    span.parentNode.remove();

}

function toggleSelect(event){

    document.querySelectorAll('.button-select button')
    .forEach(button => button.classList.remove('active'));

    const button =  event.currentTarget;
    button.classList.add('active');

    const input = document.querySelector('#open_on_weekends');
    
    //Get the value of the button's data-value
    input.value = button.dataset.value;
}

function validate(event){
    
    let needsLatAndLng;
    const lat = document.querySelector('[name="lat"]');
    const lng = document.querySelector('[name="lng"]');

    if (lat.value == "" && lng.value == ""){
       needsLatAndLng = true; 
    } 

    if(needsLatAndLng){
        event.preventDefault();
        alert('Selecione um ponto no mapa para incluir o endereço do Orfanato');
    } 

    needsLatAndLng = false;

}