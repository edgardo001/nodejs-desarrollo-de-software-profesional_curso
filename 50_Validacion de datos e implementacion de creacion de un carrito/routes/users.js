var express = require('express');
var router = express.Router();
var crypto = require('crypto');//Para hashear la password

// coleccion
// usuarios
const coleccion = 'usuarios';

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', (req, res, next) => {
  var autenticado = req.session.autenticado;
  var db = req.app.get.('db'); //Para obtener la instancia de la DB

  if (!autenticado) {
    //Logica de autenticacion/login
    //autenticar utilizando email & password
    var email = req.body.email;
    var password = req.body.password;
    if (!email || !password) {//Linea con error, se debe reparar, no inicar node
      res.status.(403).send("ERROR");
    }
    // verificar que el email y el password encuentren un usuaris
    var cursor = db.collection(coleccion).find({
      email: email,
      password: crypto.createHash('sha384').update(password, 'utf8').digest();
    });

    var resultado = null;
    cursor.on('data', (u) => {
      resultado = u; //ha encontrado el usuario
    });

    cursor.on('end', () => {
      if (resultado != null) {
        req.session.autenticado = true;
        req.session.nombre = resultado.nombre;
        req.session.email = resultado.email;
        
        res.status(200).send("Login correcto!");
      } else {
        req.session.autenticado = false;
        res.status(401).send("No autorizado");
      }
    });

  } else {
    req.session.autenticado = false;
    res.send("El usuario esta autenticado favor deslogearse");
  }
});

//Solo para testear el ingreso del usuario
/*router.get('/:nombre', (req, res, next) => {
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

});*/

// usuario
//nombre, password, email {nombre:"",password:"",email:""}
router.post('/', (req, res, next) => {
  var db = req.app.get('db'); //Obtencion de la BD
  var usuario = req.body; //envie la data en cuerpo de la peticion HTTP
  //Logica de validacion
  if (validarRegistro(usuario) == true) {
    //Hasheo la password antes de almacenar
    usuario.password = crypto.createHash('sha384').update(usuario.password, 'utf8').digest();

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
