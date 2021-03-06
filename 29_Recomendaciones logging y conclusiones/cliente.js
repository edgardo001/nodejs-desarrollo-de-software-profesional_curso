//Cliente HTTP/HTTPS

const fs = require('fs');

class Cliente{
  constructor(host, puerto, protocolo){
    this.host = host;
    this.puerto = puerto;
    this.protocolo = protocolo;
    if (protocolo != "http" && protocolo != "https") {
      console.log("ERROR!!!!");
    }
    //Para crear un nuevo archivo de log (esta linea solo crea una carpeta, no el log)
    this.logDir = fs.mkdtempSync("c:/tmp/cliente-http-");
  }

  //Metodo de autenticacion HTTP BASIC
  autenticarBasic(user, pass){
    this.basicAuth = new Buffer(user+":"+pass).toString("base64");
  }

  //Procesar HEADERS para mantener session -> se realiza en la peticion(o request)
  procesarHeaders(){
    var headers = {
      "Accept":"*/*",//Cualquier tipo de informacion es aceptada
      "User-Agent": "Cliente Node.js"//Al ser un cliente personal, puede entregarse cualquier data, pero debe ir si o si para evitar fallas con servidores como por ejemplo en github
    };

    if (this.basicAuth != undefined) {
      headers.Authorization = "Basic " + this.basicAuth;
    }

    return headers;
  }

  //Realizar peticiones HTTP de tipo Get (Obtener informacion)
  get(uri, callback){
      var opciones ={
        hostname : this.host,
        port: this.puerto,
        method: 'GET',
        path: this.propocolo + "://" + this.host + uri,// https://api.github.com/users/edgardo001
        headers: this.procesarHeaders()
      }
      this.request(opciones, null, callback);
  }
  post(uri, data, callback){
    var opciones ={
      hostname : this.host,
      port: this.puerto,
      method: 'POST',
      path: this.propocolo + "://" + this.host + uri,// https://api.github.com/users/edgardo001
      headers: this.procesarHeaders()
    }
    this.request(opciones, data, callback);
  }

  // request (manejo de peticiones)
  request(opciones, data, callback){
    // http o https
    var http = require(this.protocolo);//http, o https
    var respuesta = {
      status:null,
      body:"",
      headers: null
    };

    var peticion = http.request(opciones, (canalRespuesta) => {
      //chunk son pedasos de datos, por ejemplo para transferir videos, no se pasa completamente el video al cliente, este es entregado por partes
      canalRespuesta.on('data', (chunk) => {
        respuesta.body += chunk;//Se ira almacenando poco a poco, a medida lleguen los chunk con la data
      });
      //Se dispara cuando se envien todos los datos.
      canalRespuesta.on('end', ()=>{
        respuesta.status = canalRespuesta.statusCode;
        respuesta.headers = canalRespuesta.headers;
        //Para dejar registro en la carpeta de log
        fs.appendFile(this.logDir + "/cliente.log", "lorem ipsum");
        callback(respuesta);
      });
    });

    //Para envio de informacion al server, en caso de entregar info
    if (data != undefined && data != null) {
      peticion.write(JSON.stringify(data));
    }

    peticion.end();
  }
}

module.exports = Cliente;
