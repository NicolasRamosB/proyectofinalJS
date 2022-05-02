import { actualizarCarrito } from "/js/actualizarCarrito.js";
import { mostrarProductos } from "/js/main.js";
import { productos } from "./stock.js";


// Const del Id producto en el modal.
const contenedorCarrito = document.getElementById('carrito__contenedor');
// Array de productos al evento click en sumar producto al carrito.
let carritoDeCompras = [];




export const carrito = (productoId) => {
    // Llamo del localStorage los productos guardados 
    // Operador avanzado TERNARIO
    carritoDeCompras = localStorage.getItem("carrito") ? JSON.parse(localStorage.getItem("carrito")): [];

    console.log(carritoDeCompras);
    let productoRepetido = carritoDeCompras.find(producto => producto.id == productoId);
    contarProductosRepetidos(productoRepetido, productoId);
    eliminarProductoCarrito(productoId);

}




// Logica de Producto en el Modal
const renderProductosCarrito = (productoId) => {

    // Trae el producto del objeto lit de Productos.
    let producto = productos.find(producto => producto.id == productoId);
    // Push al Array
    carritoDeCompras.push(producto);
    // Identificacion cantidad 1
    producto.cantidad = 1;

    // DOM del producto en el modal_active.
    // Creo la etiqueta
    let div = document.createElement('div');
    // Adiero la clase
    div.classList.add('productoEnCarrito');
    // Creo las etiquetas en el HTML
    div.innerHTML = `<p>${producto.nombre}</p>
        <p>Precio: ${producto.precio}</p>
        <p id="cantidad${producto.id}">Cantidad: ${producto.cantidad}</p>
        <button id="eliminar${producto.id}" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>`;
    //Las adiero como hijos. 
    contenedorCarrito.appendChild(div);

    // Llamo la funcion contador del producto (precio x cantidad) y localStorage setItem.
    actualizarCarrito(carritoDeCompras);

}




// Repetidor de cantidad del producto en el modal.
const contarProductosRepetidos = (prodRepetido, productoId) => {
    if (prodRepetido) {
        // Operador avanzado ++
        prodRepetido.cantidad++
        document.getElementById(`cantidad${prodRepetido.id}`).innerHTML = `<p id=cantidad${prodRepetido.id}>Cantidad:${prodRepetido.cantidad}</p>`;
        actualizarCarrito(carritoDeCompras);
    } else {
        renderProductosCarrito(productoId);
    }
}



// logica y Evento de eliminar producto en el modal.
const eliminarProductoCarrito = (productoId, productoNombre) => {

    // Operador avanzado AND
    carritoDeCompras = localStorage.getItem("carrito") && JSON.parse(localStorage.getItem("carrito"));
    
    console.log(carritoDeCompras);
    let botonEliminar = document.getElementById(`eliminar${productoId}`);
    botonEliminar.addEventListener('click', () => {

        // SWEET ALERT
        Swal.fire({
            title: '¿Desea eliminar el producto?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar'
          }).then((result) => {
            if (result.isConfirmed) {
                botonEliminar.parentElement.remove();
                carritoDeCompras = carritoDeCompras.filter(el => el.id != productoId);
                actualizarCarrito(carritoDeCompras);
            }
          })
          
        
    });
}




// Array de productos en el localStorage
let carritoStorage = [];

// Logica de obtencion del localStorage
document.addEventListener("DOMContentLoaded", () => {

    mostrarProductos();

    if (localStorage.getItem("carrito")) {
        carritoStorage = JSON.parse(localStorage.getItem("carrito"));

        // Map para recorrer los productos en el localStorage
        carritoStorage.map((producto) => {
            let div = document.createElement('div');
            div.classList.add('productoEnCarrito');
            div.innerHTML = ` <p>${producto.nombre}</p>
                        <p>Precio:${producto.precio}</p>
                        <p id=cantidad${producto.id}>Cantidad:${producto.cantidad}</p>
                        <button id=eliminar${producto.id} class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
                      `
            contenedorCarrito.appendChild(div);

            actualizarCarrito(carritoStorage);
            eliminarProductoCarrito(producto.id, producto.nombre);
        })
    }
    
})


