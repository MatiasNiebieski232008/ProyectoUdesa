let emailGuardado = localStorage.getItem("email");

let itemLogin = document.querySelector(".link-login");
let itemRegistro = document.querySelector(".link-registro");
let itemSaludo = document.querySelector(".saludo");
let itemLogout = document.querySelector(".link-logout");

if (emailGuardado != null) {
    itemSaludo.innerText = "Bienvenido: " + emailGuardado;

    itemSaludo.style.display = "block";
    itemLogout.style.display = "block";

    itemLogin.style.display = "none";
    itemRegistro.style.display = "none";
}
