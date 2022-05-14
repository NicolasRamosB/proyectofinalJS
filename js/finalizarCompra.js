
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

const comprobanteDeCompras = () => {
    const pComprobante = getElementById("comprobante")

    let = document.createElement('div');
    div.classList.add('productoEnCarrito');
    div.innerHTML = `<p>${producto.nombre}</p>
        <p>Precio: ${producto.precio}</p>
        <p id="cantidad${producto.id}">Cantidad: ${producto.cantidad}</p>
        <button id="eliminar${producto.id}" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>`;

    pComprobante.appendChild(div);
}
