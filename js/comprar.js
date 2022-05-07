
modalContenedor = document.querySelector('.modal__contenedor');
const mostrarComprar = document.querySelector('.comprar-active');
const btnComprar = document.getElementById('btn-comprar');
const btnVolver = document.getElementById('btn-volver');




// btnVolver.addEventListener('click', () =>{
//     mostrarComprar.classList.toggle('modal-active');
// })

btnComprar.addEventListener('click', () => {
    modalContenedor.classList.toggle('modal__active');

    const funcionComprar = (productoId) => {
        let producto = productos.find(producto => producto.id == productoId);
        let modalCompra = document.createElement('div');
    
        modalCompra.className = 'modal__comprar comprar-active';
        modalCompra.innerHTML = `
        <div class="titulo-carrito">
            <h3>Compra a realizar</h3>
        </div>
        <hr>
        <h3> Seleccionar medio de pago:</h3>
        <div>
        <i class="fas fa-money-check-alt">Pago Virtual</i>
        <i class="fas fa-credit-card">Tarjeta de crédito</i>
        </div>
        <p>${producto.nombre}</p>
        <p class="precioProducto">Precio total: $<span id="precioTotal"></span></p>
            <p id="cantidad${producto.id}">Cantidad: ${producto.cantidad}</p>
        
            <button id="btn-volver" class=" btn-modal">Volver</button>
            <button id="btn-fincompra" class=" btn-modal">Finalizar Compra</button>
        </div>
        `;
    
        contenedorCarrito.appendChild(modalCompra);
    }
    
    funcionComprar();
});




