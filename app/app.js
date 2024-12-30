const productos = [
    {
        nombre: "Lentes 3D",
        precio: 90
    },
    {
        nombre: "Perfume 9",
        precio: 450
    },
    {
        nombre: "Bandeja para Papas",
        precio: 150
    }
];

let productosCards = "";

let contenedorProductos = document.getElementById("contenedor-productos");
let listaCarrito = document.getElementById("carrito-lista");
let totalCarrito = document.getElementById("carrito-total")
let botonBorrar = document.getElementById("carrito-boton-borrar");
let botonPagar = document.getElementById("carrito-boton-pagar");
let textoPagarCarrito = document.getElementById("mensajeCarrito");

let totalAPagar = 0;

function crearListenersBotonesAgregar() {

    const botonAgregarProducto = document.querySelectorAll(".productos__caja__boton");

    console.log(botonAgregarProducto.length);

    for (let indice = 0; indice < botonAgregarProducto.length; indice++) {
        
        function agregarElemCarrito() {
            const elementoLi = document.createElement("li");

            elementoLi.innerText = `Caja ${productos[indice].nombre} a $ ${productos[indice].precio} c/u`;
            listaCarrito.appendChild(elementoLi);
            totalAPagar += productos[indice].precio;
            totalCarrito.innerText = "Total a Pagar: $" + totalAPagar;
            textoPagarCarrito.innerText = "";
        }

        botonAgregarProducto[indice].addEventListener("click", agregarElemCarrito);
    }
}

function borrarCarrito() {
    listaCarrito.innerHTML = "";
    totalCarrito.innerHTML = "Total a Pagar: $0";
    totalAPagar = 0;
    textoPagarCarrito.innerText = "";
}

function pagarTotalCarrito() {
    if (listaCarrito.innerText === "") {
        textoPagarCarrito.innerText = "No has seleccionado ningún producto";
    } else {
        window.location.href = "pagos.html";
    }
}