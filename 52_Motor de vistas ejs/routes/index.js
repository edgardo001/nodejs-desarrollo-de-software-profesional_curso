var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //Nombre de la vista contenida por la carpeta views, es el nombre del archivo.ejs
  res.render('index', {
    title: 'Express',
    pagina: 'pagina/introduccion',
    data:{
      nombre: 'edgardo'
    }

  });
});

//Test y ejemplo para uso de driver mongodb, instanciado en "bin/www.js" linea "app.set('db', db);"
router.get('/db', function(req, res, next) {
  var db = req.app.get('db');
  console.log(db);
  res.send("Peticion recibida");
});

module.exports = router;
