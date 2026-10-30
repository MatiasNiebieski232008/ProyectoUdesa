API para información dinámica
El sitio web obtendrá información dinámica utilizando una API de productos  Dummy Json. La documentación para trabajar con la API está en este link. 
IMPORTANTE: únicamente deben tomar la información del endpoint en color verde. La estructura de fetch debe ser la vista en clase. Deberás identificar cuál es el endpoint correcto para cada sección del proyecto.



Organización y prolijidad.
El código de cada archivo debe estar correctamente indentado.
La nomenclatura adecuada de archivos y carpetas debe respetar: estar en minúsculas, sin espacios ni caracteres especiales.
La organización de archivos y carpetas de acuerdo a lo visto en clase: carpeta ppal del proyecto con archivos .html, subcarpetas para css, para imágenes y para javascript.
Header y footer.
El header debe tener al menos:
El logo de su sitio. Hacer click sobre el logo llevará a la página principal.
Un formulario con un buscador que al buscar debe enviarnos a la página “resultados de búsqueda”. El buscador deberá validar:
Que el campo de búsqueda no esté vacío. Si está vacío debe avisarle al usuario por pantalla.
Que el término buscado tenga al menos 3 caracteres. Si no los tiene debe avisarle al usuario por pantalla.
El menú de navegación debe contar con los links necesarios para una navegación fluida.
El footer debe tener al menos el nombre de los integrantes del equipo.
Menú de navegación
El proyecto mantendrá los dos tipos de navegación presentes en todas las páginas.
Navegación superior horizontal: allí se encontrará el logo o nombre del sitio web, un link "Home” que permite navegar a la página principal, los links de acceso al formulario de login, de registro y el campo de búsqueda con su correspondiente botón "buscar".
Navegación de forma vertical (tipo columna) para acceder a las categorías de producto detalladas más abajo*. Hacer click en cualquiera de los elementos del menú  debe llevar al detalle de esa categoría (Punto 5). La información de la “Lista de categorías”debe venir de manera dinámica desde la API.
Página: home del sitio. 
La página principal del sitio deberá mostrar 2 secciones de datos con al menos 10 elementos cada uno. Cada grupo elegirá, dentro de todas las categorías disponibles, dos categorías para mostrar una en cada sección. La información de los productos de cada sección debe venir de manera dinámica desde la API.
Cada sección de datos tendrá un título que lo identifica.
Cada elemento tendrá:
Una foto
Un texto con el título del producto.
Una descripción.
El precio
Un link (con estilo de botón) con el texto "ver detalle". Al hacer click sobre "ver detalle" pasaremos a la página de detalle del elemento clickeado. 
Entregable: Archivo index.html e index.js junto con todos los recursos necesarios y estilos de css.

Página detalle de producto.
Es la página a la que accede el usuario al hacer click en un producto. La url de acceso debe incluir mediante querystring la información necesaria para obtener los datos del producto desde la API. 
Toda la información del producto debe venir de manera dinámica desde la API. Los datos provenientes de la API deben insertarse individualmente en cada elemento html según corresponda. 

En la página debe figurar:
Nombre del producto (destacado)
Marca
Descripción
Precio
Foto
Categoría:  hacer click debe llevar a la página de la categoría.
Stock
Lista de tags (hasta 3)

Sección de reviews: debajo de los datos del producto debe figurar una sección de comentarios de los usuarios con los siguientes datos por cada comentario:
Rating.
Texto del comentario.
Fecha
Nombre del usuario.

Toda la información de reviews debe venir de manera dinámica desde la API. 
Entregable: archivo product.html y archivo product.js junto con todos los recursos necesarios y estilos de css.
Página: Productos por Categoría.
Es la página a donde el usuario podrá ver todos los productos de una categoría. Al hacer click en una categoría del menú de navegación el sitio deberá mostrar una página con todos los productos de esa categoría.
Toda la información de los productos de cada categoría debe venir de manera dinámica desde la API. Deben verse en pantalla únicamente los productos de la categoría seleccionada. La url debe incluir mediante querystring la información necesaria para obtener los datos de cada categoría desde la API.
Al hacer click en un producto el sitio deberá llevar a la página de detalle del producto seleccionado utilizando querystring.
Entregable: Archivo category.html y archivo category.js, estilos compartidos en archivo CSS e imágenes.
Página: login.
	7.a Validación y guardado de datos en storage.
Es la página con el formulario de login del sitio. El formulario debe estar centrado en la página tanto horizontal como verticalmente. Debe contar con los siguientes campos:
Email.
Contraseña
Botón con la leyenda "ingresar". 
Link al formulario de registro con el texto "No tengo cuenta".
Enviar el formulario debe llevarnos a la página principal.
Al enviarse el formulario deberá:
Validar que el campo email es obligatorio (no debe estar vacío). Si está vacío debe avisarle al usuario por pantalla y el formulario no se enviará.
Validar que el campo contraseña es obligatorio (no debe estar vacío). Si está vacío debe avisarle al usuario por pantalla  y el formulario no se enviará.
Validar que la contraseña tenga al menos una longitud de 6 caracteres. Si tiene menos de 6 caracteres mostrar al usuario el texto "La contraseña debe tener al menos 6 caracteres" y el formulario no se enviará.
Solo si el formulario cumple con las validaciones deberá guardar el email del usuario en localstorage y redirigir a la página principal.
Entregable: Archivo login.html y archivo login.js, estilos compartidos en archivo CSS e imágenes.

7.b Saludo y modificación de menú.
Si el formulario de login se procesa correctamente, utilizando Javascript y los datos guardados en local storage deberán desarrollar las siguientes funcionalidades:
En el header de todas las páginas deberá verse la leyenda "Bienvenido:  elEmailDelUsuario" y un link con el texto "logout".
Deberán desaparecer del menú los elementos "login" y "registro".
	La funcionalidad no tiene asociado un archivo html específico. Puede estar en muchas partes del proyecto. Deberán desarrollarla en un archivo javascript individual e identificar en qué htmls deben relacionarlo.
	Entregable:  archivo saludo.js.
Funcionalidad Logout.
Hacer click en "Logout" creado en el punto anterior debe:
Eliminar los datos del usuario de local storage.
Ocultar la leyenda "Bienvenido: elEmailDelUsuario" y el link con el texto "logout".
Volver a mostrar los elementos "login" y "registro" en el menú.
	La funcionalidad no tiene asociado un archivo html específico. Puede estar en muchas partes del proyecto. Deberán desarrollarla en un archivo javascript individual e identificar en qué htmls deben relacionarlo.
	Entregable: archivo archivo logout.js.
Página: Registro.
Es la página con el formulario de registro del sitio. El formulario debe estar centrado en la página tanto horizontal como verticalmente. Debe contar con los siguientes campos:
Email.
Contraseña
Repetir contraseña.
Botón con la leyenda "Registrarme" .
Un checkbox con la leyenda "Acepto términos y condiciones".
Link al formulario de login con el texto "Ya tengo una cuenta".
Al enviarse el formulario deberá:
Validar que el campo email es obligatorio (no debe estar vacío). Si está vacío debe avisarle al usuario por pantalla y el formulario no se enviará.
Validar el campo contraseña. es obligatorio (no debe estar vacío). Si está vacío debe avisarle al usuario por pantalla y el formulario no se enviará.
Validar que la contraseña tenga al menos una longitud de 6 caracteres. Si tiene menos de 6 caracteres mostrar al usuario el texto "La contraseña debe tener al menos 6 caracteres" y el formulario no se enviará.
Validar que coincidan los datos del campo contraseña y de repetir contraseña. En caso de no coincidir mostrar al usuario el texto en pantalla "Las contraseñas no coinciden" y el formulario no se enviará.
Solo si  el formulario cumple con las validaciones deberá redirigir al formulario de login.
Entregable: Archivo register.html y register.js, estilos compartidos en archivo CSS e imágenes.
Resultados de búsqueda.
Es la página donde el usuario podrá ver los resultados de la búsqueda que realizó en el buscador que se encuentra en Header.
La página deberá mostrar:
El texto “Resultados de búsqueda para: elTérminoPuestoEnElBuscador”.
La lista de resultados que coincidan con el término buscado.
Los resultados de la búsqueda deben permitir navegación hacia sus páginas de detalle.
Si la búsqueda no trae resultados avisar al usuario por pantalla mostrando el texto “No hay resultados para el término: elTérminoPuestoEnElBuscador”.
Entregable: Archivo search-results.html y search-results.js junto con todos los recursos necesarios, estilos de css e imágenes.
Toda la información de los resultados debe venir de manera dinámica desde la API.
Cierre
Lleva tiempo organizarse y muy posiblemente se presenten conflictos en el camino. Les recomendamos comenzar lo antes posible y avisar a sus profesores si surgen conflictos dentro del equipo para que podamos ayudarlos.
