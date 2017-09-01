//Agrego los modulos para convertir este .js en una ruta para express
var express = require('express');
var router = express.Router();

router.get('/',(req,res,next)=>{
  res.send("Recurso de animales");
});


//Exporto el modulo para que pueda ser usado como ruta en la app principal
module.exports = router;


//Desde el app principal, se debe agregar:
// var users = require('./routes/animales');//Para importar el modulo
// app.use('/animales', animales);//Para agregar el recurso a la URI correspondiente
