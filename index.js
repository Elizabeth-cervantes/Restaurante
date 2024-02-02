
const formulario = document.querySelector("#formulario");

const opciones =[];
formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  const nombre = document.querySelector("#nombre").value;
  const apellido = document.querySelector("#apellido").value;

  console.log(`Hola que deseas el dia de hoy, ${nombre} ${apellido}`);

  // Obtenemos el precio de la opción
  const precio = document.querySelector(".precio").textContent;

  // Añadimos la opción al array
  opciones.push({
    nombre: nombre,
    precio: precio,
  });

  // Mostramos las opciones al cliente
  console.log(opciones);
});