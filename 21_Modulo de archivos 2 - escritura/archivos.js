const fs = require('fs');//filesystem

//Se crea el archivo
//const archivo = fs.createWriteStream('escritura.txt');//por defecto toma el modo W(write)
const archivo = fs.createWriteStream('escritura.txt', {
  flags: 'r+',//Permite sobreescribir partes del archivo
  start: 4,//Donde inicia a escribir.
});
//escribo en el archivo
archivo.write("Hola Mundo!!");

//Se cierra la escritura
//archivo.end();
archivo.end("---");
