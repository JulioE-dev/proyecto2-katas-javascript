const jedi = {nombre: "Luke Skywalker", edad: 19};
jedi.edad = 25;
console.log("La Edad de Luke es:", jedi.edad);

let nombre = "Leia";
let apellido = "Organa";
let edad = 20;
let mensaje = "Soy " + nombre + " " + apellido + " y tengo " + edad + " años" + " y soy princesa de Alderaan.";
console.log(mensaje);

const sable1 = {nombre: "Shoto de Yoda", precio: 1500};
const sable2 = {nombre: "Sable de Darth Vader", precio: 2000};
let preciototalSables = sable1.precio + sable2.precio;
console.log("El precio total de los sables es:", preciototalSables);

let precioBaseGlobal = 10000;
precioBaseGlobal = 25000;
const nave1 = {nombre: "Ala-X", precioBase: 50000, precioFinal: 60000};
const nave2 = {nombre: "Halcón Milenario", precioBase: 70000, precioFinal: 80000};
nave1precioFinal = nave1.precioBase + precioBaseGlobal;
nave2precioFinal = nave2.precioBase + precioBaseGlobal;
console.log("El precio final del Ala-X es:", nave1precioFinal);
console.log("El precio final del Halcón Milenario es:", nave2precioFinal);