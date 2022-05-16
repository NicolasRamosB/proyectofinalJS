
// Funcion Eliminar producto del carrito. 

const eliminarProductoCarrito = (productoId, productoNombre) => {

    // Operador avanzado AND, getItem.
    carritoDeCompras = localStorage.getItem("carrito") && JSON.parse(localStorage.getItem("carrito"));

    console.log(carritoDeCompras);
    let botonEliminar = document.getElementById(`eliminar${productoId}`);
    botonEliminar.addEventListener('click', () => {

        // SWEET ALERT confirmar delete del producto
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
        });
    });
}
