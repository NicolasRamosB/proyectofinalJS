

// Const del Id producto en el modal.
const contenedorCarrito = document.getElementById('vaciarCarrito');
// Array de productos al evento click en sumar producto al carrito.
let carritoDeCompras = [];

const carrito = (producto) => {
    // Llamo del localStorage los productos guardados 
    // Operador avanzado TERNARIO
    carritoDeCompras = localStorage.getItem("carrito") ? JSON.parse(localStorage.getItem("carrito")) : [];

    console.log(carritoDeCompras);
    console.log(producto);
    let productoRepetido = carritoDeCompras.find(prod => prod.id === producto.id);

    if (!productoRepetido) {
        carritoDeCompras.push(producto);

        localStorage.setItem('carrito', JSON.stringify(carritoDeCompras));
        console.log(productoRepetido);
    }

    contarProductosRepetidos(productoRepetido, producto);
    eliminarProductoCarrito(producto.id);
    
}

// Logica de Producto en el Modal
const renderProductosCarrito = (producto) => {

    producto.cantidad = 1;
    let div = document.createElement('div');
    div.classList.add('productoEnCarrito');
    div.innerHTML = `<p>${producto.nombre}</p>
        <p>Precio: ${producto.precio}</p>
        <p id="cantidad${producto.id}">Cantidad: ${producto.cantidad}</p>
        <button id="eliminar${producto.id}" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>`;

    contenedorCarrito.appendChild(div);

    // Llamo la funcion contador del producto (Precio total) y localStorage setItem.
    actualizarCarrito(carritoDeCompras);

}
