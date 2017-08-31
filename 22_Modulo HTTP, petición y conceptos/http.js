var http = require('http');

//opciones
var opciones = {
  port:80,
  hostname:"google.com",
  methos: "get",
  path: "http://google.com"
}
//Esto es una peticion asincrona
var req = http.request(opciones, (respuesta) => {
  //la 'respuesta' es un CANAL de Lectura
  //Cada vez que reciba un "chunck" los imprimira
  respuesta.on('data',(chunck) => {
    console.log(chunck.toString());
  });
  //AL finalizar la recepcion, imprimira la respuesta
  respuesta.on('end', () => {
    console.log(respuesta.headers);
  })
});

//WriteStream: lanza la comunicacion del request
req.end();//para enviar este canal de informacion al servidor google
console.log("Peticion lanzada");
