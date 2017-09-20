//Agrego los modulos para convertir este .js en una ruta para express
var express = require('express');
var router = express.Router(); //Para hacer uso de las rutas de node

var contadorVisitas = function(req, res, next) {
  if (req.session.vistas == undefined) {
    req.session.vistas = 0;
  }
  req.session.vistas++;
  next(); //Callback, se le prodrian pasar funciones u otros parametros
  //next indica que se ejecuten las siguientes funciones
};
//Middleware, parte del codigo se ejecuta en router antes de los otros metodos de router.
//esto se ejecutara antes que las vistas.
//puede ser usado para validar sessiones u otras acciones previas a las respuestas al cliente
router.use(contadorVisitas);

router.get('/', (req, res, next) => {
  console.log(req.session); //Para obtener la cookie que contiene la session
  res.send("Recurso de animales ha sido visto " + req.session.vistas + " veces");
});

//Crear un animal
router.post('/', (req, res, next) => {
  console.log(req.body);

  //Guardarlo en memoria
  if (!req.session.animales) {
    req.session.animales = [];
  }

  var body = req.body;
  // {nombre, especie}
  if (req.get('content-type') == "application/json") {
  //if (req.get('content-type') == "text/plain") {
    console.log("Validado")
  } else {
    res.status(403);
    res.send("ERROR");
  }


  req.session.animales.push(req.body);
  //console.log(req.session);
  res.send("Peticion ha sido recibida");
});


//Exporto el modulo para que pueda ser usado como ruta en la app principal
module.exports = router;


//Desde el app principal, se debe agregar:
// var users = require('./routes/animales');//Para importar el modulo
// app.use('/animales', animales);//Para agregar el recurso a la URI correspondiente
