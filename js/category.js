let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let categoria = queryStringObj.get("categoria");

let tituloCategoria = document.querySelector(".titulo-categoria");
let subtituloCategoria = document.querySelector(".subtitulo-categoria");
let contenedorCategoria = document.querySelector(".contenedor-categoria");

tituloCategoria.innerText = categoria;
subtituloCategoria.innerText = "Productos de " + categoria;

fetch("https://dummyjson.com/products/category/" + categoria)
    .then(function (respuesta) {
        return respuesta.json();
    })
    .then(function (datos) {
        let productos = datos.products;

        for (let i = 0; i < productos.length; i++) {
            let producto = productos[i];

            contenedorCategoria.innerHTML += '<article class="producto">' +
                '<img src="' + producto.thumbnail + '" alt="' + producto.title + '">' +
                '<h3>' + producto.title + '</h3>' +
                '<p>' + producto.description + '</p>' +
                '<p>Precio: $' + producto.price + '</p>' +
                '<a href="./product.html?id=' + producto.id + '">Ver detalle</a>' +
                '</article>';
        }
    })
    .catch(function (error) {
        console.log(error);
    });
