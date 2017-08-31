var Cliente = require("./cliente.js");

var clienteGitHub = new Cliente("api.github.com","443", "https");

console.log(clienteGitHub);

//Si se implementa de esta manera, la consulta bloqueara el sistema hasta que obtenga una respuesta
//Para evitarlo, se debera pasar como un callback
//var respuesta = clienteGitHub.get("/users/edgardo001");

// autenticar nuestro cliente...
var respuesta = clienteGitHub.get("/users/edgardo001", (respuesta) => {
  console.log(respuesta)
});


//Para Probar, usar "npm start" en este directorio
