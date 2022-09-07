

// Productos DOM HTML.
// LLamado a los productos del JSON, por GetData.

const mostrarProductos = async () => {

  const cards = document.getElementById("card-group");
  const productos = await getData();

  productos.forEach(producto => {

    const div = document.createElement('div');
    div.classList.add('card-container');
    
    div.innerHTML += `<div class="card-image ">
                               <img src=${producto.img} class="img-remera">
                               <span class="card-title text-center">${producto.nombre}</span>
                               
                            
                            <div class="card-content">
                                <p class="info ">${producto.info}</p>
                                
                                <p class="price">$${producto.precio} <a class="btn-add" id=boton${producto.id}><i class="fa-solid fa-cart-plus"></i></a></p>
                                
                            </div> 
                      </div>`
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











