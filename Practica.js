const div = document.getElementById("id1");
const id = document.getElementById("Foto");
const h1  = document.createElement("h1");
h1.textContent = "Como añadir un efecto a una imagen"

const texto = document.getElementById("Texto");
texto.textContent = "Existen muchos plugins para insertar efectos especiales a las imagenes cuando se les pasa el curso por encima. Todos esos plugins añaden un monton de codigo a la pagina, que terminan afectando a la velocidad de la web en si. Si quieres utilizar muy poco codigo para asi optimizar la carga de tu web, nuestro script para generar un efecto de zoom es perfecto para ti.";

const button = document.createElement('button');
button.type = 'button';
button.innerText = 'Leer Mas';
document.body.appendChild(button);
button.id = 'Buton';

console.log(h1);

div.appendChild(h1);
div.appendChild(texto);
div.appendChild(button);