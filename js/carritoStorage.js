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

