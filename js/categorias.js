let listaCategorias = document.querySelector(".lista-categorias");

fetch("https://dummyjson.com/products/categories")
    .then(function (respuesta) {
        return respuesta.json();
    })
    .then(function (categorias) {
        for (let i = 0; i < categorias.length; i++) {
            let categoria = categorias[i];

            listaCategorias.innerHTML += '<li><a href="./category.html?categoria=' + categoria.slug + '">' + categoria.name + '</a></li>';
        }
    })
    .catch(function (error) {
        console.log(error);
    });
