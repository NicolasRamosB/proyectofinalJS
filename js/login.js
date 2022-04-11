document.getElementById ("btn__registrar").addEventListener("click", register);
document.getElementById ("btn__login").addEventListener("click", iniciarSesion);

let contenedor_login_register = document.querySelector(".contenedor__login-register");
let formulario_login = document.querySelector(".formulario__login");
let formulario_register = document.querySelector(".formulario__register");
let bg_login = document.querySelector(".bg__login");
let bg_register = document.querySelector(".bg__register");

function iniciarSesion(){
    formulario_register.style.display = "none";
    contenedor_login_register.style.left="10px";
    formulario_login.style.display="bloke";
    bg_register.style.opacity="1";
    bg_login.style.opacity="0";
}

function register(){
    formulario_register.style.display = "block";
    contenedor_login_register.style.left="410px";
    formulario_login.style.display="none";
    bg_register.style.opacity="0";
    bg_login.style.opacity="1";
}