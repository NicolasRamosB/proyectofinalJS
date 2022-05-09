const modalContenedor = document.querySelector('.modal__contenedor');
const abrirCarrito = document.getElementById('cesta__carrito');
const cerrarCarrito = document.getElementById('btn-cerrar-carrito');
const modalCarrito = document.querySelector('.modal__carrito');

// const btnComprar = document.getElementById('btn-comprar');
// const mostrarComprar = document.querySelector('.comprar-active');


// Boton Carrito
abrirCarrito.addEventListener('click', () => {
    modalContenedor.classList.toggle('modal__active');
})

// Boton X cerrar
cerrarCarrito.addEventListener('click', () => {
    modalContenedor.classList.toggle('modal__active');
})


modalContenedor.addEventListener('click', () => {
    cerrarCarrito.click()
})

modalCarrito.addEventListener('click', (e) => {
    e.stopPropagation();
})



// btnComprar.addEventListener('click', () => {
//     mostrarComprar.classList.toggle('comprar-active');


//     const funcionComprar = () => {
        
//         let modalCompra = document.createElement('div');
    
//         modalCompra.className = 'modal__comprar comprar-active';
//         modalCompra.innerHTML = `
//         <div class="titulo-carrito">
//             <h3>Compra a realizar</h3>
//         </div>
//         <hr>
//         <h3> Seleccionar medio de pago:</h3>
//         <div>
//         <i class="fas fa-money-check-alt">Pago Virtual</i>
//         <i class="fas fa-credit-card">Tarjeta de crédito</i>
//         </div>
//         <p></p>
//         <p class="precioProducto">Precio total: $<span id="precioTotal"></span></p>
//             <p id="cantidad">Cantidad: </p>
        
//             <button id="btn-volver" class=" btn-modal">Volver</button>
//             <button id="btn-fincompra" class=" btn-modal">Finalizar Compra</button>
//         </div>
//         `;
    
//         contenedorCarrito.appendChild(modalCompra);
//     }
    
//     funcionComprar();
// });




