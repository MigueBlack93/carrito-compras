const productos[
    {
        nombre: "Lentes 3D",
        imagen: "./images/Len1",
        precio: 90
    },
    {
        nombre: "Perfume 9",
        imagen: "./images/Per9,
        precio: 450
    },
    {
        nombre: "Bandeja para Papas",
        imagen: "./images/Ban2",
        precio: 150
    }
];

let productosCards = "";


const contenedorProductos = document.getElementById("contenedor-productos");
const listaCarrito = document.getElementById("carrito-lista");
const totalCarrito = document.getElementById("carrito-total")
const botonBorrar = document.getElementById("carrito-boton-borrar");
const botonPagar = document.getElementById("carrito-boton-pagar");
const textoPagarCarrito = document.getElementById("mensajeCarrito");
let totalAPagar = 0;

