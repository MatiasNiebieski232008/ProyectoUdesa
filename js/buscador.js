let formularioBusqueda = document.querySelector(".header-search");
let campoBusqueda = document.querySelector(".header-search input");
let mensajeError = document.querySelector(".mensaje-error");

formularioBusqueda.addEventListener("submit", function (evento) {
    let termino = campoBusqueda.value;

    if (termino == "") {
        evento.preventDefault();
        mensajeError.innerText = "Escribí algo para buscar.";
    } else if (termino.length < 3) {
        evento.preventDefault();
        mensajeError.innerText = "El término debe tener al menos 3 caracteres.";
    } else {
        mensajeError.innerText = "";
    }
});
