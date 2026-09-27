// =========================================================
// NAVEGACIÓN ENTRE LOS MOMENTOS DE LA CLASE
// =========================================================

const botones = document.querySelectorAll(".navegacion-momentos button");
const momentos = document.querySelectorAll(".momento");

function mostrarMomento(idMomento) {

    // Ocultar todos los momentos
    momentos.forEach(function (momento) {
        momento.classList.remove("momento-visible");
    });

    // Mostrar el momento seleccionado
    const momentoSeleccionado = document.getElementById(idMomento);

    if (momentoSeleccionado) {
        momentoSeleccionado.classList.add("momento-visible");
    }
}


// Activar los botones de navegación
botones.forEach(function (boton) {

    boton.addEventListener("click", function () {

        // Quitar estado activo
        botones.forEach(function (b) {
            b.classList.remove("tab-activo");
        });

        // Activar botón seleccionado
        boton.classList.add("tab-activo");

        // Mostrar momento correspondiente
        mostrarMomento(boton.dataset.momento);

    });

});


// Mostrar Momento 1 al cargar
mostrarMomento("momento1");


// =========================================================
// MOSTRAR Y OCULTAR PISTAS
// =========================================================

const botonesPista = document.querySelectorAll(".boton-pista");

botonesPista.forEach(function (boton) {

    boton.addEventListener("click", function () {

        const idPista = boton.dataset.pista;
        const pista = document.getElementById(idPista);

        pista.classList.toggle("oculto");

        if (pista.classList.contains("oculto")) {

            boton.textContent = "💡 Mostrar pista";

        } else {

            boton.textContent = "🔎 Ocultar pista";

        }

    });

});