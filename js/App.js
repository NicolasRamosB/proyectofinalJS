
import { productos } from "/js/stock.js";

const mostrarProductos = (productos) => {

    const cards = document.getElementById("card-group");
    productos.forEach(producto => {
        const div = document.createElement('div');
        div.classList.add('card');
        div.style.width="100%";
        div.innerHTML += `<div class="card-image ">
                               <img src=${producto.img}>
                               <span class="card-title text-center">${producto.nombre}</span>
                               <a class="btn-floating halfway-fab wabes-effect waves-light red" id=boton${producto.id}><i class="material-icons">add_shopping_cart</i></a>
                            </div>
                            <div class="card-content">
                                <p>${producto.info}</p>
                                <p>Talle: ${producto.talle}</p>
                                <p>$${producto.precio}</p>
                            </div>
                            `

    cards.appendChild(div);


    });
};



mostrarProductos(productos);






