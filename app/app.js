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

let totalAPagar = 0;

function crearListenersBotonesAgregar() {

    const botonAgregarProducto = document.querySelectorAll(".productos__caja__boton");

    for (let indice = 0; indice < botonAgregarProducto.length; indice++) {
        
        function agregarElemCarrito() {
            const elementoLi = document.createElement("li");
            const elementoImg = document.createElement("img");

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