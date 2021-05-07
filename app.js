/*const {Frutas, Precio} = require('./Frutero');

Frutas.forEach(element => {
    console.log(element);
});

Precio.forEach(element => {
    console.log(element);
});*/

/*const user = require('./usuario');

console.log('Saludos mi nombre es', user.Nombre + ',saludos desde', user.Pais);*/

const user = require('./Usuario');

user.forEach(user=>{
    console.log("Saludos mi nombre es "+ user.Nombre + ",saludos desde " + user.Pais);
});