

// Funcion al evento click Comprar

const comprarContenedor = document.getElementById('comprar__contenedor');

const btnComprar = document.getElementById('btn-comprar');


const arrayCompra = [];

const funcionComprar = () => {

    let arrayCompra = localStorage.getItem("carrito") ? JSON.parse(localStorage.getItem("carrito")) : [];
    arrayCompra
    let modalCompra = document.createElement('div');

    modalCompra.className = 'modal__comprar comprar-active';
    modalCompra.innerHTML = `
    <div class="titulo-carrito">
        <h3>Compra a realizar</h3>
    </div>
    <hr>
    <h3> Seleccionar medio de pago:</h3>
    <div>
    <input type="radio" class="radio" id="opcion1" checked>
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

// Boton Comprar
const mostrarComprar = document.querySelector('.comprar-active');

btnComprar.addEventListener('click', () => {
    mostrarComprar.classList.toggle('comprar-active');
    contenedorCarrito.classList.toggle('comprar-active');

});


// Boton Volver
const btnVolver = document.getElementById('btn-volver');
btnVolver.addEventListener("click", () => {

    mostrarComprar.classList.toggle('comprar-active');
    contenedorCarrito.classList.toggle('comprar-active');
});


const btnVaciar = document.getElementById("btn-vaciar");

const vaciarCarrito = (producto) => {

    const btnVaciarTotal = document.querySelector(".boton-eliminar");

    if (carritoDeCompras.length > 0) {

        btnVaciarTotal.parentElement.remove();
        localStorage.clear(producto);
        eliminarProductoCarrito(producto.id);

        Swal.fire({
            title: 'Vaciaste el Carrito',
            text: 'Todos tus productos se han quitado',
            icon: 'success',
            backdrop: true,
            allowOutsideClick: false,
            confirmButtonText: 'OK'
        })

    } else {
        // Muestro mensaje de advertencia.
        Swal.fire({
            title: 'Atención',
            text: 'El carrito no contiene productos',
            icon: 'warning',
            showConfirmButton: false,
            timer: '3000'
        })
    }

};
btnVaciar.addEventListener("click", vaciarCarrito)






const ultimaCompra = [];

const btnFinalizarCompra = document.getElementById('btn-fincompra');
btnFinalizarCompra.addEventListener('click', () => {
    window.location = "/html/comprobante.html";

    const finalizarCompra = () => {
        ultimaCompra.push()
        localStorage.setItem('Coprobante', JSON.stringify(ultimaCompra));
    }

    finalizarCompra();
})

const datos = JSON.parse(localStorage.getItem('Coprobante'));

const comprobanteDeCompras = () =>{
    const pComprobante = getElementById("comprobante")

    let  = document.createElement('div');
    div.classList.add('productoEnCarrito');
    div.innerHTML = `<p>${producto.nombre}</p>
        <p>Precio: ${producto.precio}</p>
        <p id="cantidad${producto.id}">Cantidad: ${producto.cantidad}</p>
        <button id="eliminar${producto.id}" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>`;

    pComprobante.appendChild(div);
}
