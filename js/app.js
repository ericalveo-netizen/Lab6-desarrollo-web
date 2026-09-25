// ===== JAVASCRIPT DEL LABORATORIO 6 =====

document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.querySelector("form");

    if (formulario) {
        formulario.addEventListener("submit", function (evento) {
            evento.preventDefault();
            alert("Solicitud de cita registrada correctamente.");
        });
    }

    console.log("Clínica veterinaria - Laboratorio 6 cargado correctamente.");
});
