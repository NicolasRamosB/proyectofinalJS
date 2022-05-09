

const comprarContenedor = document.getElementById('comprar__contenedor');

const btnComprar = document.getElementById('btn-comprar');




const funcionComprar = () => {

    
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
    <p></p>
    <p class="precioProducto">Precio total: $<span id="precioTotal"></span></p>
        <p id="cantidad$">Cantidad:</p>
    
        <button id="btn-volver" class=" btn-modal">Volver</button>
        <button id="btn-fincompra" class=" btn-modal">Finalizar Compra</button>
    </div>
    `;

    comprarContenedor.appendChild(modalCompra);
}

funcionComprar();


const mostrarComprar = document.querySelector('.comprar-active');

btnComprar.addEventListener('click', () => {
    mostrarComprar.classList.toggle('comprar-active');
    contenedorCarrito.classList.toggle('comprar-active');

});

const btnVolver = document.getElementById('btn-volver');
btnVolver.addEventListener("click", () => {
    
    mostrarComprar.classList.toggle('comprar-active');
    contenedorCarrito.classList.toggle('comprar-active');
});







// btnComprar.addEventListener("click", () => {
//   div.classList.toggle("ocultarProducto");
//   modalCompra.classList.toggle("");
// });

// //Boton Volver.
// const btnVolver = document.getElementById("btn-volver");

