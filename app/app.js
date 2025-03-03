const productos = [
    {
        nombre: "Lentes 3D",
        imagen: "./images/Len1",
        precio: 90
    },
    {
        nombre: "Perfume 9",
        imagen: "./images/Per9",
        precio: 450
    },
    {
        nombre: "Bandeja para Papas",
        imagen: "./images/Ban2",
        precio: 150
    }
];

let contenedorProductos = document.getElementById("contenedor-productos");
let listaCarrito = document.getElementById("carrito-lista");
let totalCarrito = document.getElementById("carrito-total")
let botonBorrar = document.getElementById("carrito-boton-borrar");
let botonPagar = document.getElementById("carrito-boton-pagar");

let totalAPagar = 0;

function crearListenersBotonesAgregar() {

    const botonAgregarProducto = document.querySelectorAll(".productos__caja__boton");

    for (let indice = 0; indice < botonAgregarProducto.length; indice++) {
        
        function agregarElemCarrito() {
            const elementoLi = document.createElement("li");

            elementoLi.innerText = `Caja ${productos[indice].nombre} a $ ${productos[indice].precio} c/u`;
            listaCarrito.appendChild(elementoLi);
            totalAPagar += productos[indice].precio;
            totalCarrito.innerText = "Total a Pagar: $" + totalAPagar;
        }

        botonAgregarProducto[indice].addEventListener("click", agregarElemCarrito);
    }
}

function borrarCarrito() {
    listaCarrito.innerHTML = "";
    totalCarrito.innerHTML = "Total a Pagar: $0";
    totalAPagar = 0;
}

function pagarTotalCarrito() {
    if (listaCarrito.innerText === "") {
        totalCarrito.innerText = "No has seleccionado ningún producto";
    } else {
        window.location.href = "pago.html";
    }
}

crearListenersBotonesAgregar();
botonBorrar.addEventListener("click", borrarCarrito);
botonPagar.addEventListener("click", pagarTotalCarrito);