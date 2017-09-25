var express = require('express');
var router = express.Router();
// coleccion
// usuarios
const coleccion = 'usuarios';

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/:nombre', (req, res, next) => {
  var db = req.app.get('db'); //Obtencion de la BD
  //canal, por cada resultado, se dispara un evento de data
  var cursor = db.collection(coleccion).find({
    nombre: req.params.nombre
  });
  var resultado;
  cursor.on('data', (d) => {
    resultado = d;
  })
  cursor.on('end', () => res.send(resultado));

});

// usuario
//nombre, password, email {nombre:"",password:"",email:""}
router.post('/', (req, res, next) => {
  var db = req.app.get('db'); //Obtencion de la BD
  var usuario = req.body; //envie la data en cuerpo de la peticion HTTP
  //Logica de validacion
  if (validarRegistro(usuario) == true) {
    db.collection(coleccion).insertOne(usuario, (err, resp) => {
      res.send(resp);
    });
  } else {
    res.status(403).send("ERROR");
  }
});

function validarRegistro(usuario) {
  if ((usuario == undefined) || (usuario == null)) {
    return false;
  }
  if (!usuario.nombre) {
    return false;
  }
  if (!usuario.password) {
    return false;
  }
  if (!usuario.email) { //Mejorar la validacion utilizando expresiones regulares
    return false;
  }
  return true;
}

module.exports = router;
