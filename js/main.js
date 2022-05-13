

// Productos HTML.

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
        // let productos = productos.find(producto => producto.id == productoId);
          carrito(productos[producto.id -1]);
        // ALERT LIBRERIA TOASTIFY
          Toastify({

            text: `Haz agregado ${producto.nombre} al carrito`,
            style: {
                background: "rgba(140, 228, 82, 0.753)",
              },
            duration: 1500
            
            }).showToast();
        })

    });
      
}
    










