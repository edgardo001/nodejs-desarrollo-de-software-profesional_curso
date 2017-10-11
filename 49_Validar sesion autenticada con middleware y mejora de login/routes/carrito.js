var express = require('express');
var router = express.Router();

//Middlerware para validar login
function validarUsuarioLogeado(req,res,next){
  if (req.session.autenticado == true) {
    next();
  }else {
    res.status(401).send("No estas autorizado");
  }
}

//Cargo el Middlerware
router.use(validarUsuarioLogeado);

//req.session.autenticado
router.post('/', function(req,res,next){
  var articulos = req.body.carrito;
  if (validarCarrito(articulos) == true) {
    //Secuencia
  }else {
      res.status(403).send("ERROR");
  }
});

function validarCarrito(articulos){
  //Implementar una logica de validacion
  return true;
}

/*
{
    carrito: [
      {}//Producto
      {nombre:"",precio:123, departamento:"carniceria,bebidas,frutas..."}
    ]
}
*/
module.exports = router;
