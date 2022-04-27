const modalContenedor = document.querySelector('.modal__contenedor');
const abrirCarrito = document.getElementById('cesta__carrito');
const cerrarCarrito = document.getElementById('btn-cerrar-carrito');
const modalCarrito = document.querySelector('.modal__carrito');

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

