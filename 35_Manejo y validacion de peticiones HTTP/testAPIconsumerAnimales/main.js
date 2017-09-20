var Cliente = require("./cliente.js");

var cliente = new Cliente("localhost", "3000", "http");

cliente.post("/animales/", {
    nombre: "Luna",
    especie: "perro"
}, (respuesta) => console.log(respuesta));
