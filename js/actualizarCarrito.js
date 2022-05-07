
const contadorCarrito = document.getElementById('contador-carrito');
const precioTotal = document.getElementById('precioTotal');


 const actualizarCarrito = (carritoDeCompras) => {

  // Sumar Cantidad del modal
  contadorCarrito.innerText = carritoDeCompras.reduce((acc, el) => acc + el.cantidad, 0);

  precioTotal.innerText = carritoDeCompras.reduce((acc, el) => acc + (el.precio * el.cantidad), 0);

  //Funcion guardar pedido en localstorage
  localStorage.setItem('carrito', JSON.stringify(carritoDeCompras));
}



