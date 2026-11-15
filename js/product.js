let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get("id");

let imagen = document.querySelector(".detalle-imagen");
let nombre = document.querySelector(".detalle-nombre");
let marca = document.querySelector(".detalle-marca");
let descripcion = document.querySelector(".detalle-descripcion");
let precio = document.querySelector(".detalle-precio");
let categoria = document.querySelector(".detalle-categoria");
let stock = document.querySelector(".detalle-stock");
let listaTags = document.querySelector(".tags");
let seccionReviews = document.querySelector(".reviews");

fetch("https://dummyjson.com/products/" + id)
    .then(function (respuesta) {
        return respuesta.json();
    })
    .then(function (producto) {
        imagen.src = producto.images[0];
        imagen.alt = producto.title;
        nombre.innerText = producto.title;
        descripcion.innerText = producto.description;
        precio.innerText = "Precio: $" + producto.price;
        categoria.innerText = producto.category;
        categoria.href = "./category.html?categoria=" + producto.category;
        stock.innerText = "Stock: " + producto.stock;

        if (producto.brand == undefined) {
            marca.innerText = "Marca: sin marca";
        } else {
            marca.innerText = "Marca: " + producto.brand;
        }

        for (let i = 0; i < producto.tags.length; i++) {
            if (i < 3) {
                listaTags.innerHTML += '<li>' + producto.tags[i] + '</li>';
            }
        }

        for (let i = 0; i < producto.reviews.length; i++) {
            let review = producto.reviews[i];

            seccionReviews.innerHTML += '<article class="review">' +
                '<p>Rating: ' + review.rating + '/5</p>' +
                '<p>' + review.comment + '</p>' +
                '<p>Fecha: ' + review.date + '</p>' +
                '<p>Usuario: ' + review.reviewerName + '</p>' +
                '</article>';
        }
    })
    .catch(function (error) {
        console.log(error);
    });
