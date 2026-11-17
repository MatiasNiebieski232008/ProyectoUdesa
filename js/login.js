let formularioLogin = document.querySelector(".form");
let campoEmail = document.querySelector("#email");
let campoClave = document.querySelector("#clave");
let errorEmail = document.querySelector(".error-email");
let errorClave = document.querySelector(".error-clave");

formularioLogin.addEventListener("submit", function (evento) {
    evento.preventDefault();

    let email = campoEmail.value;
    let clave = campoClave.value;
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

    if (formularioValido) {
        localStorage.setItem("email", email);
        location.href = "./index.html";
    }
});
