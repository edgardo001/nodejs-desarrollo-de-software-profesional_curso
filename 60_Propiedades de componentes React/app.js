var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
//Importo el modulo para las sessiones de express
var session = require('express-session');

var index = require('./routes/index');

//Importar las archivos para usarlos en las rutas
var users = require('./routes/users');
var carrito = require('./routes/carrito.js');
var pedidos = require('./routes/pedidos.js');
var productos = require('./routes/productos.js');


var app = express();

// setup de las vistas, se configura la carpeta de las vistas
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(session({
    secret: "proyecto-api"
}));

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
//Agrega un directorio de uso publico, estara expuesto para compartir imagenes, css, js u otros archivos necesarios para su uso
//Para accederlo "http://localhost:3000/stylesheets/style.css"
//Ya que se indica 'public' en la funcion, no se debera usar "http://localhost:3000/public/stylesheets/style.css"
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);

//Crear las rutas con los modulos importados
app.use('/users', users);
app.use('/carrito', carrito);
app.use('/pedidos', pedidos);
app.use('/productos', productos);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;