// Repetidor de cantidad del producto en el modal y cesta.
const contarProductosRepetidos = (prodRepetido, producto) => {
    if (prodRepetido) {
        // Operador avanzado ++
        prodRepetido.cantidad++
        // console.log(prodRepetido);
        document.getElementById(`cantidad${prodRepetido.id}`)
            .innerHTML = `<p id=cantidad${prodRepetido.id}>Cantidad:${prodRepetido.cantidad}</p>`;
        actualizarCarrito(carritoDeCompras);
    } else {
        renderProductosCarrito(producto);
    }
}
