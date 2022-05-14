

// Funcion al evento click Comprar

const comprarContenedor = document.getElementById('comprar__contenedor');
const btnComprar = document.getElementById('btn-comprar');
const arrayCompra = [];

const funcionComprar = () => {


    let modalCompra = document.createElement('div');

    modalCompra.className = 'modal__comprar comprar-active';
    modalCompra.innerHTML = `
            <hr>
            <h3> Seleccionar medio de pago:</h3>
            
            <form class="opcionesPago">
                <label class="opcion">
                    <input type="radio" name="pagos" class="radio" id="pago1" checked>
                    <i class="fas fa-money-check-alt icono"><span>Pago Virtual</span></i>
                </label>
                <label class="opcion">
                    <input type="radio" name="pagos" class="radio" id="pago2">
                    <i class="fas fa-credit-card icono"><span>Tarjeta de crédito</span></i>
                </label>
            </form>
        <div id="formasDePago" >
            <div id="pagoTarjeta class="activeForm">
                <h1>Pago con tarjeta</h1> 
            </div>

            <div id="pagoEfectivo">
                <h1>Pago con Efectivo</h1> 
            </div>
        </div>
    <div>
        <button id="btn-volver" class="btn-danger btn-modal">Volver</button>
        <button id="btn-fincompra" class="btn-success btn-modal">Finalizar Compra</button>
    </div>
    `;

    comprarContenedor.appendChild(modalCompra);
}
funcionComprar();




// Boton Comprar
const mostrarComprar = document.querySelector('.comprar-active');
btnComprar.addEventListener('click', () => {
    if (carritoDeCompras.length > 0) {
        mostrarComprar.classList.toggle('comprar-active');

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

});

// Boton Volver
const btnVolver = document.getElementById('btn-volver');
btnVolver.addEventListener("click", () => {

    mostrarComprar.classList.toggle('comprar-active');
});



// const opcionesPago = document.getElementsByName("pagos");
// opcionesPago.addEventListener('change', () => {

//     mostrarComprar.classList.toggle('comprar');

// });




// const opcionesPago = document.getElementsByName("pagos");
// opcionesPago.forEach((radio) => {
//     radio.addEventListener("change", () => {
//         const contCuotas = document.getElementById("pagoTarjeta");
//         if (radio.checked && radio.value === "pagoTarjeta") {
//             contCuotas.classList.toggle("cuotas-hide");
//         };
//     });
// })





