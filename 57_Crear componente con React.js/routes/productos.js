var express = require('express');
var router = express.Router();

const collection = 'productos';

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

router.get('/', function(req, res, next) {
  /*if (req.session.autenticado == true) {
      //
  }else {

  }
  res.send("");*/
  //Recuperar la base de datos
  var db = req.app.get('db');
  db.collection(coleccion).find().toArray((err, documentos)=>{
    if (!error) {
      res.send({
        productos:documentos
      });
    }else {
      res.status(500).send("ERROR");
    }
  });
});

module.exports = router;
