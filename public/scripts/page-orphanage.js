const options = {
    dragging: false,
    touchZoom: false,
    doubleZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

//Create map
const map = L.map('mapid', options).setView([-27.2196961, -49.6499164], 15);

//Create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 
    {attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}
).addTo(map);

//Create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
});

//Create and marker
L.marker([-27.2196961, -49.6499164], { icon }).addTo(map);

/* image gallery */
function selectImage(event) {
    const button = event.currentTarget;
    const buttons = document.querySelectorAll(".images button");

    buttons.forEach((button) => {
        button.classList.remove("active");
    });

    /*buttons.forEach(removerActiveClass);

    function removerActiveClass(button) {
        button.classList.remove("active");
    }*/

    const image = button.children[0];
    const imageContainer = document.querySelector(".orphanage-details > img");

    imageContainer.src = image.src;

    button.classList.add("active");

}
