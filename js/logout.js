let botonLogout = document.querySelector(".link-logout a");

botonLogout.addEventListener("click", function (evento) {
    evento.preventDefault();

    localStorage.removeItem("email");

    document.querySelector(".saludo").style.display = "none";
    document.querySelector(".link-logout").style.display = "none";

    document.querySelector(".link-login").style.display = "block";
    document.querySelector(".link-registro").style.display = "block";
});
