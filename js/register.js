let formularioRegister = document.querySelector(".form");

let campoEmail = document.querySelector("#email");
let campoClave = document.querySelector("#clave");
let campoConfContra = document.querySelector("#confcontra");

let errorEmail = document.querySelector(".error-email");
let errorClave = document.querySelector(".error-clave");
let errorConfContra = document.querySelector(".error-confcontra");


formularioRegister.addEventListener("submit", function(evento) {

    evento.preventDefault();

    let email = campoEmail.value;
    let clave = campoClave.value;
    let confContra = campoConfContra.value;

    let formularioValido = true;


    if (email == "") {
        errorEmail.innerText = "El email es obligatorio.";
        formularioValido = false;
    } else {
        errorEmail.innerText = "";
    }


    if (clave == "") {
        errorClave.innerText = "La contraseña es obligatoria.";
        formularioValido = false;

    } else if (clave.length < 6) {
        errorClave.innerText = "La contraseña debe tener al menos 6 caracteres";
        formularioValido = false;

    } else {
        errorClave.innerText = "";
    }


    if (clave != confContra) {
        errorConfContra.innerText = "Las contraseñas no coinciden";
        formularioValido = false;

    } else {
        errorConfContra.innerText = "";
    }


    if (formularioValido) {
        location.href = "./login.html";
    }

});