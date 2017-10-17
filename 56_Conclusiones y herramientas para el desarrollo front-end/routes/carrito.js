var express = require('express');
var router = express.Router();
var validator = require('validator');

const coleccion = 'carritos';

//Middlerware para validar login
function validarUsuarioLogeado(req, res, next) {
  if (req.session.autenticado == true) {
    next();
  } else {
    res.status(401).send("No estas autorizado");
  }
}

//Cargo el Middlerware
router.use(validarUsuarioLogeado);

//req.session.autenticado
router.post('/', function(req, res, next) {
  var articulos = req.body.carrito;
  if (validarCarrito(articulos) == true) {
    //Secuencia
    var db = req.app.get('db');

    articulos.usuario = {
      nombre:req.session.nombre,
      email:req.session.email
    };

    db.collection(coleccion).insertOne(articulos, (err, resp)=>{
      if (!error) {
        res.status(201);
        res.send(resp);
      }else {
        res.status(500);
        res.send("ERROR");
      }
    });


  } else {
    res.status(403).send("ERROR");
  }
});

//en caso de querer eliminar un carrito
//router.delete('/:id',(req, res, next) =>{
//  //Implementacion de borrado
//});

//Usar libreria validartor
//npm install validator --save
function validarCarrito(articulos) {
  //Implementar una logica de validacion
  /*
  {
    productos:[
      {id,nombre,precio}...
    ]
  }
  */
  //Debe ser json
  if (validator.isJSON(JSON.parse(articulos)) == false) {
    return false;
  }
  //Debe contener articulos
  if (articulos['productos'] == undefined) {
    return false;
  }
  //Debe contener arreglos
  if (Array.isArray(articulos.productos) == false) {
    return false;
  }

  //Recorro los elementos del array y valido 1 por 1
  articulos.productos.forEach((elementos)=>{
    if (!elementos.id instanceof String) {
      return false;
    }
    if (!elementos.nombre instanceof String) {
      return false;
    }
    if (!elementos.precio instanceof String) {
      return false;
    }
  });

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
