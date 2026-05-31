document.addEventListener("DOMContentLoaded", function () {
    
    const imagenes = [
        "img/imagen1.webp",
        "img/imagen2.webp",
        "img/imagen3.webp",
        "img/imagen4.webp",
        "img/imagen5.webp",
        "img/imagen6.webp",
        "img/imagen7.webp",
        "img/imagen8.webp",
        "img/imagen9.webp",
        "img/imagen10.webp",
        "img/imagen11.webp"   
    ];

    const contenedorImagenes = document.getElementById("carrusel-imagenes");

    imagenes.forEach((url, index) => {
        const item = document.createElement("div");
        item.classList.add("carousel-item");
        item.setAttribute("data-bs-interval", "4000"); 

        
        if (index === 0) {
            item.classList.add("active");
        }

        
        item.innerHTML = `<img src="${url}" class="d-block w-100" alt="imagenes ${index + 1}">`;

        
        contenedorImagenes.appendChild(item);
    });
}); 