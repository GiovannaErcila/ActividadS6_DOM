
// DATOS

const productos = [

    {
        id: 1,
        nombre: "Notebook Lenovo",
        categoria: "Notebook",
        precio: 32000,
        stock: 5
    },

    {
        id: 2,
        nombre: "Mouse Logitech",
        categoria: "Accesorio",
        precio: 1200,
        stock: 10
    },

    {
        id: 3,
        nombre: "Notebook HP",
        categoria: "Notebook",
        precio: 38500,
        stock: 0
    },

    {
        id: 4,
        nombre: "Teclado Redragon",
        categoria: "Accesorio",
        precio: 2800,
        stock: 6
    },

    {
        id: 5,
        nombre: "Monitor Samsung",
        categoria: "Monitor",
        precio: 11500,
        stock: 3
    },

    {
        id: 6,
        nombre: "Notebook Asus",
        categoria: "Notebook",
        precio: 42000,
        stock: 2
    },

    {
        id: 7,
        nombre: "Auriculares HyperX",
        categoria: "Accesorio",
        precio: 3500,
        stock: 0
    },

    {
        id: 8,
        nombre: "Monitor LG",
        categoria: "Monitor",
        precio: 9800,
        stock: 7
    }

];


// ELEMENTOS DEL DOM

const catalogo =
    document.querySelector("#catalogo");

const buscador =
    document.querySelector("#buscador");

const btnTodos =
    document.querySelector("#btnTodos");

const btnDisponibles =
    document.querySelector("#btnDisponibles");

const btnNotebooks =
    document.querySelector("#btnNotebooks");

const btnCuatro =
    document.querySelector("#btnCuatro");

const cantidadProductos =
    document.querySelector("#cantidadProductos");

const sinResultados =
    document.querySelector("#sinResultados");


// EJERCICIO 1
// MOSTRAR PRODUCTOS EN LA PÁGINA

function mostrarProductos(listaProductos) {

    catalogo.innerHTML = "";

    cantidadProductos.textContent =
        listaProductos.length;

    if (listaProductos.length === 0) {

        sinResultados.classList.remove("d-none");

    } else {

        sinResultados.classList.add("d-none");

    }

    listaProductos.forEach(producto => {

        catalogo.innerHTML += `

            <div class="col-sm-6 col-lg-4">

                <div class="card h-100">

                    <div class="card-body">

                        <h5 class="card-title">
                            ${producto.nombre}
                        </h5>

                        <p class="card-text">
                            Categoría:
                            ${producto.categoria}
                        </p>

                        <p class="card-text">
                            Precio: $
                            ${producto.precio}
                        </p>

                        <p class="card-text">
                            Stock:
                            ${producto.stock}
                        </p>

                    </div>

                </div>

            </div>

        `;

    });

}

// EJERCICIO 2
// MOSTRAR SOLAMENTE PRODUCTOS DISPONIBLES

function mostrarDisponibles() {

    const disponibles = productos.filter(producto => {

        return producto.stock > 0;

    });

    mostrarProductos(disponibles);

}


// EJERCICIO 3
// MOSTRAR SOLAMENTE NOTEBOOKS

function mostrarNotebooks() {

    const notebooks = productos.filter(producto => producto.categoria === "Notebook");

    mostrarProductos(notebooks);

}


// EJERCICIO 4
// MOSTRAR LOS PRIMEROS CUATRO PRODUCTOS

function mostrarCuatroProductos() {

    // PASO 1:
    // Obtener los primeros cuatro productos.

    const primerosCuatro = productos.slice(0, 4);

mostrarProductos(primerosCuatro);
}


// EJERCICIO 5
// BUSCAR PRODUCTOS POR NOMBRE

function buscarProductos() {

    // PASO 1:
    // Obtener lo que escribió el usuario
    // y convertirlo a minúsculas.

    const textoBuscado = buscador.value.toLowerCase();


    // PASO 2:
    // Obtener únicamente aquellos productos
    // cuyo nombre contenga el texto buscado.

const resultados = productos.filter(producto =>
    producto.nombre.toLowerCase().includes(textoBuscado)
);

mostrarProductos(resultados);

}


// EVENTOS

btnTodos.addEventListener("click", function () {

    mostrarProductos(productos);

});


btnDisponibles.addEventListener(
    "click",
    mostrarDisponibles
);


btnNotebooks.addEventListener(
    "click",
    mostrarNotebooks
);


btnCuatro.addEventListener(
    "click",
    mostrarCuatroProductos
);


buscador.addEventListener(
    "input",
    buscarProductos
);


mostrarProductos(productos);