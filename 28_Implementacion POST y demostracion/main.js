var Cliente = require("./cliente.js");

var clienteGitHub = new Cliente("api.github.com","443", "https");

console.log(clienteGitHub);

//Para hacer la peticion actual funcional, se debe pasar la contraseña correcta
clienteGitHub.autenticarBasic("edgardo001", "***");

//Si se implementa de esta manera, la consulta bloqueara el sistema hasta que obtenga una respuesta
//Para evitarlo, se debera pasar como un callback
//var respuesta = clienteGitHub.get("/users/edgardo001");

// autenticar nuestro cliente...
clienteGitHub.get("/users/edgardo001", (respuesta) => {
  console.log(respuesta)
});

clienteGitHub.post("/repos/jorgevgut/uuid/issues/2/comments",{
  "body":"esta es una prueba"
}, (respuesta) => console.log(respuesta));


//Para Probar, usar "npm start" en este directorio
