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

        // Obligatorio: La primera imagen tiene que iniciar con la clase active
        if (index === 0) {
            item.classList.add("active");
        }

        // AQUÍ QUEDÓ CORREGIDO: comillas después del + 1 y luego el >
        item.innerHTML = `<img src="${url}" class="d-block w-100" alt="imagenes ${index + 1}">`;

        // Lo metemos al contenedor del HTML
        contenedorImagenes.appendChild(item);
    });
}); // <--- Asegúrate de tener estas llaves y paréntesis para cerrar el DOMContentLoaded