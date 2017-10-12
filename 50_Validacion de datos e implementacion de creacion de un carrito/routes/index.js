var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

//Test y ejemplo para uso de driver mongodb, instanciado en "bin/www.js" linea "app.set('db', db);"
router.get('/db', function(req, res, next) {
  var db = req.app.get('db');
  console.log(db);
  res.send("Peticion recibida");
});

module.exports = router;
