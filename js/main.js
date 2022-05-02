
import { carrito } from "/js/carrito.js";

import { getData } from "/js/getData.js";

// Productos HTML.
export const mostrarProductos = async () => {

    const cards = document.getElementById("card-group");
    const productos = await getData();
    productos.forEach(producto => {
        
        const div = document.createElement('div');
        
        div.classList.add('card');
        
        div.style.width = "100%";
        
        div.innerHTML += `<div class="card-image ">
                               <img src=${producto.img}>
                               <span class="card-title text-center">${producto.nombre}</span>
                               <a class="btn-floating halfway-fab wabes-effect waves-light" id=boton${producto.id}><i class="fa-solid fa-cart-plus">cart-plus</i></a>
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

          carrito(producto.id);

        // ALERT LIBRERIA TOASTIFY
          Toastify({

            text: `Haz agregado ${producto.nombre} al carrito`,
            style: {
                background: "rgba(140, 228, 82, 0.753)",
              },
            duration: 2000
            
            }).showToast();
        })

        
        
    });
};










