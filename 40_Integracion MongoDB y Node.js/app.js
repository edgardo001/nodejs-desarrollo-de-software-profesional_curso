var cliente = require('mongodb').MongoClient;

// cadena de conexion
//var url = 'mongodb://user:password@127.0.0.1:27017/mibase';
var url = 'mongodb://127.0.0.1:27017/mibase';

//conexion, los calback de mongo siempre llevan un "error" y un retorno, en este caso retorna una "db"
cliente.connect(url, (error, db) => {
  // colecciones

  //opcion de trabajo con callback
  db.collection('animales')
    .insertOne({
      nombre: "Luna",
      especie: "Perro"
    }, (error, result) => {
      db.collection('animales').findOne((error, result) => {
        console.log(result);
        db.close();//cierro la conexion
      });
    });

  //Opcion de trabajo con promesas
  //var promesa = db.collection('animales').insertOne({
  //  nombre: "Luna",
  //  especie: "Perro"
  //});
});
