let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let termino = queryStringObj.get("search");

let terminoBuscado = document.querySelector(".termino-buscado");
let productosResultados = document.querySelector(".productos-resultados");
let contenedorProductos = document.querySelector(".contenedor-productos");
let sinResultados = document.querySelector(".sin-resultados");
let mensajeSinResultados = document.querySelector(".sin-resultados p");


terminoBuscado.innerText = "Resultados de búsqueda para: " + termino;

sinResultados.style.display = "none";


fetch("https://dummyjson.com/products/search?q=" + termino)

    .then(function(respuesta) {

        return respuesta.json();

    })

    .then(function(datos) {

        let productos = datos.products;


        if (productos.length == 0) {

            productosResultados.style.display = "none";

            sinResultados.style.display = "block";

            mensajeSinResultados.innerText =
                "No hay resultados para el término: " + termino;

        } else {

            productosResultados.style.display = "block";

            sinResultados.style.display = "none";


            for (let i = 0; i < productos.length; i++) {

                let producto = productos[i];

                contenedorProductos.innerHTML +=
                    '<article class="producto">' +
                        '<img src="' + producto.thumbnail + '" alt="' + producto.title + '">' +
                        '<h3>' + producto.title + '</h3>' +
                        '<p>' + producto.description + '</p>' +
                        '<p>Precio: $' + producto.price + '</p>' +
                        '<a href="./product.html?id=' + producto.id + '">Ver detalle</a>' +
                    '</article>';

            }

        }

    })

    .catch(function(error) {

        console.log(error);

    });