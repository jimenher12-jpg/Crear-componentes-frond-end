const images = [
    "img/computador.jpg",
    "img/mouse.jpg",
    "img/teclado1.jpg"
];

let index = 0;

function showImage() {
    document.getElementById("carouselImage").src = images[index];
}

function nextImage() {
    index++;
    if (index >= images.length) {
        index = 0;
    }
    showImage();
}

setInterval(nextImage, 3000);


var myModal = new bootstrap.Modal(document.getElementById('elmodal'));
myModal.show();
