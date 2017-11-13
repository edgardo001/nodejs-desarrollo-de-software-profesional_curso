//Maneja procesos que se crean en forma de hijos, en formato json (sin necesidad de parseo)
var spawn = require('child_process').fork;
// carga pesada de trabajo
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // sumar todos los elementos
//var resultado = arr.reduce((a, x) => a + x);
//console.log(resultado);
var a1 = arr.slice(0, 4);
var a2 = arr.slice(4, arr.length);
//Para ser ejecutados por procesos diferentes (no es multihilo, solo se ejecuta en procesos diferentes, mejorando la velocidad).
var h1 = spawn("worker.js");
var h2 = spawn("worker.js");

var resultado = 0;
h1.send({
    arreglo: a1
});
h2.send({
    arreglo: a2
});

//Se ejecuta asincrono
h1.on('message', (data) => {
    resultado += data.resultado;
    console.log(resultado);

});
//Se ejecuta asincrono
h2.on('message', (data) => {
    resultado += data.resultado;
    console.log(resultado);
});

// no siempre da el mismo resultado, esto por q muestra la data que se logra retornar primero
//Posibilidad 1
//45 //Se ejecuto primero la segunda mitad
//55 //Luego se suma la primera mitad

//Posibilidad 2
//10 //Se ejecuto primero la mitad inicial
//55 //Se ejecuto la segunda mitad y se sumo al resultado
