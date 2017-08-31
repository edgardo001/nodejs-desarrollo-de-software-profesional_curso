const fs = require('fs');

// Leer un archivo (texto.txt)

//Leer archivo de forma sincrona,
//se refiere a que el archivo no se mostrara hasta que este haya sido terminado de leer por node
archivo = fs.readFileSync('./texto.txt');
//Retorna el buffer de informacion que contiene el archivo
console.log(archivo);
//Retorna la data del archivo
console.log(archivo.toString());

//===============================
var archivo_2;
//Leer un archivo de forma asincrona
//el segundo parametro se ejecuta al finalizar la lectura, osea un callback async
fs.readFile('./texto.txt',(err,data)=>{
  //console.log(data);//imprime el buffer al finalizar la lectura
  archivo_2 = data;//vuelca la data en una varibla al finalizar la lectura, debera dar "undefined" para el console.log externo
  console.log("error: " + err);
  console.log("Dentro del callback: ");
  console.log(archivo_2);//muestra el archivo_2, al terminar de leer, ya que se ejecuta el callback
});

console.log("Fuera del callback: " + archivo_2);
