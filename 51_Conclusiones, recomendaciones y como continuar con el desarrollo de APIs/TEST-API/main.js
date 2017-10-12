var Cliente = require("./cliente.js");

var cliente = new Cliente("localhost", "3000", "http");
cliente.post("/users/", {
  nombre: "edgardo",
  password: "123456",
  email: "email@email.com"
}, (res) => {});
