
const formulario = document.querySelector("#formulario");
console.log("formulario")

// crear evento

formulario.addEventListener( "submit", validarFormulario )

function validarFormulario(e){
    e.preventDefault();
    const nombre = document.querySelector("#nombre").value
    const apellido= document.querySelector("#apellido").value

    console.log( `Hola que deseas el dia de hoy, ${nombre} ${apellido}`)

   
}
const comidas = ['arroz', 'mole verde', 'mole rojo', 'chilaquiles', 'carne asada', 'chiles en nogada'];

// Creamos un array para almacenar las opciones que va a comprar el cliente
const opciones = [];

// recorremos los elementos del DOM y añadimos las opciones al array

for (let i = 0; i < comidas.length; i++) {
   opciones.push(comidas[i]);
}
console.log(opciones);

//Obtenemos el precio de la opcion
const precio = elemento.querySelector(".precio").textContent;

// añadimos la opcion al array
opciones.push({
    nombre: nombre,
    precio: precio
  });

  // mostramos las opciones al cliente
  console.log(opciones);



