let contenedorPerfumes = document.querySelector(".contenedor-perfumes");
let contenedorAutos = document.querySelector(".contenedor-autos");

fetch("https://dummyjson.com/products/category/fragrances")
    .then(function (respuesta) {
        return respuesta.json();
    })
    .then(function (datos) {
        let productos = datos.products;

        for (let i = 0; i < productos.length; i++) {
            let producto = productos[i];

            contenedorPerfumes.innerHTML += '<article class="producto">' +
                '<img src="' + producto.thumbnail + '" alt=""' + producto.title + '"">' +
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

fetch("https://dummyjson.com/products/category/vehicle")
    .then(function (respuesta) {
        return respuesta.json();
    })
    .then(function (datos) {
        let productos = datos.products;

        for (let i = 0; i < productos.length; i++) {
            let producto = productos[i];

            contenedorAutos.innerHTML += '<article class="producto">' +
                '<img src="' + producto.thumbnail + '"" alt=""' + producto.title + '"">' +
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
