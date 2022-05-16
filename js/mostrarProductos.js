

// Productos DOM HTML.
// LLamado a los productos del JSON, por GetData.

const mostrarProductos = async () => {

  const cards = document.getElementById("card-group");
  const productos = await getData();

  productos.forEach(producto => {

    const div = document.createElement('div');
    div.classList.add('card');
    div.style.width = "100%";
    div.innerHTML += `<div class="card-image ">
                               <img src=${producto.img}>
                               <span class="card-title text-center">${producto.nombre}</span>
                               <a class="btn-floating halfway-fab wabes-effect waves-light" id=boton${producto.id}><i class="fa-solid fa-cart-plus"></i></a>
                            </div>
                            <div class="card-content">
                                <p>${producto.info}</p>
                                <p>Talle: ${producto.talle}</p>
                                <p>$${producto.precio}</p>
                            </div> `
    cards.appendChild(div);

    // BOTON AÑADIR AL CARRITO.
    const boton = document.getElementById(`boton${producto.id}`);
    boton.addEventListener('click', () => {
      carrito(productos[producto.id - 1]);

      // ALERT producto agregado al carrito.
      const Toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        title: producto.nombre + ' añadido al carrito.'
      })
    })

  });


}











