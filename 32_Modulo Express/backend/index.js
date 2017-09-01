var express = require('express');
var app = express();

// ruta (route)
app.get('/', function(req,res){
  res.send('Hello World');
});

//Restorna un JSON con los datos.
app.get('/usuarios', (req,res) => {
  res.send({usuarios:["Jorge","Carlos","Juan"]});
});


app.listen(3000);
console.log("Servidor iniciado en: 'localhost:3000'");
