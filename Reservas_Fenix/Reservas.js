const servicio = document.getElementById("servicio");
const barbero = document.getElementById("barbero");

const summaryService = document.getElementById("summaryService");
const summaryBarber = document.getElementById("summaryBarber");
const summaryHour = document.getElementById("summaryHour");
const summaryPayment = document.getElementById("summaryPayment");

const selectedMethod = document.getElementById("selectedMethod");

const btnReservar = document.getElementById("btnReservar");

const paymentOptions = document.querySelectorAll(".payment-option");
const hourCards = document.querySelectorAll(".hour-card");

let metodoSeleccionado = "";
let horaSeleccionada = "";

servicio.addEventListener("change", () => {

    summaryService.textContent = servicio.value;

});

barbero.addEventListener("change", () => {

    summaryBarber.textContent = barbero.value;

});

hourCards.forEach(card => {

    card.addEventListener("click", () => {

        hourCards.forEach(item => {

            item.classList.remove("hour-selected");

        });

        card.classList.add("hour-selected");

        horaSeleccionada = card.textContent.trim();

        summaryHour.textContent = horaSeleccionada;

    });

});

paymentOptions.forEach(option => {

    option.addEventListener("click", (e) => {

        e.preventDefault();

        metodoSeleccionado = option.dataset.method;

        selectedMethod.textContent = metodoSeleccionado;

        summaryPayment.textContent = metodoSeleccionado;

    });

});

const pseModalElement = document.getElementById("pseModal");
const cardModalElement = document.getElementById("cardModal");
const successModalElement = document.getElementById("successModal");

const pseModal = new bootstrap.Modal(pseModalElement);
const cardModal = new bootstrap.Modal(cardModalElement);
const successModal = new bootstrap.Modal(successModalElement);

const btnPagarPSE =
document.getElementById("btnPagarPSE");

btnPagarPSE.addEventListener("click", () => {

    pseModal.hide();

    mostrarConfirmacion();

});

const toastElement = document.getElementById("reservationToast");

const reservationToast = new bootstrap.Toast(
    toastElement,
    {
        delay: 3000
    }
);

btnReservar.addEventListener("click", () => {

    if (!horaSeleccionada) {

        alert("Selecciona una hora disponible.");

        return;

    }

    if (!metodoSeleccionado) {

        alert("Selecciona un método de pago.");

        return;

    }


    if (metodoSeleccionado === "PSE") {

        pseModal.show();

        return;

    }


    if (metodoSeleccionado === "Tarjeta de Crédito") {

        cardModal.show();

        return;

    }

    if (metodoSeleccionado === "Efectivo") {

        mostrarConfirmacion();

    }

});


const botonesReserva = document.querySelectorAll(".btn-reserve");

// Se usan los botones internos de los modales
botonesReserva.forEach(btn => {

    btn.addEventListener("click", () => {

        const texto = btn.textContent.trim();

        if (
            texto === "Continuar con PSE" ||
            texto === "Pagar Ahora"
        ) {

            pseModal.hide();
            cardModal.hide();

            mostrarConfirmacion();

        }

    });

});

function mostrarConfirmacion() {

    successModal.show();

    reservationToast.show();

    actualizarNotificacion();

}

function actualizarNotificacion() {

    const badge = document.querySelector(
        ".notification-badge"
    );

    if (badge) {

        let cantidad = parseInt(
            badge.textContent
        );

        cantidad++;

        badge.textContent = cantidad;

    }

}

const dias = document.querySelectorAll(".day");

dias.forEach(dia => {

    dia.addEventListener("click", () => {

        dias.forEach(item => {

            item.classList.remove(
                "selected-day"
            );

        });

        dia.classList.add(
            "selected-day"
        );

    });

});


summaryService.textContent = servicio.value;
summaryBarber.textContent = barbero.value;
summaryHour.textContent = "No seleccionada";
summaryPayment.textContent = "No seleccionado";
selectedMethod.textContent = "Ninguno";