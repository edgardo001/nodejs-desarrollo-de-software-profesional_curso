var driver = require('sqlite');

//Este modulo sqlite opera con promesas.


// abrir una conexion
var promesa = driver.open('./base.sqlite');

//then, catch
//Si se ejecuta 2 veces, debera salir un error:
//UnhandledPromiseRejectionWarning: Unhandled promise rejection (rejection id: 1): Error: SQLITE_ERROR: table usuarios already exists
//promesa.then((drive) => {
//  driver.exec('CREATE TABLE usuarios (nombre TEXT, edad INT);')
//    .then((driver) => {
//      driver.exec('INSERT INTO usuarios VALUES("Edgardo", 27);')
//        .then((driver) => {
//          driver.get('SELECT * FROM usuarios')
//            .then((resultado) => {
//              console.log(resultado);
//            });
//        });
//    });
//});

//No deberia causar errores, si lo causa, debe capturarlo con catch
promesa.then((drive) => {
  driver.exec('CREATE TABLE IF NOT EXISTS usuarios (nombre TEXT, edad INT);')
    .then((driver) => {
      driver.exec('INSERT INTO usuarios VALUES("Edgardo", 27);')
        .then((driver) => {
          driver.get('SELECT * FROM usuarios')
            .then((resultado) => {
              console.log(resultado);
            });
        });
    }).catch((causa) => {
      console.log(causa);
    });
});

// operaciones
