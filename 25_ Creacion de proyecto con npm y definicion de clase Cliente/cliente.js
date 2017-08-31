//Cliente HTTP/HTTPS

class Cliente{
  constructor(host, puerto, protocolo){
    this.host = host;
    this.puerto = puerto;
    this.protocolo = protocolo;
  }

  //Procesar HEADERS para mantener session -> se realiza en la peticion(o request)
  procesarHeaders(req){
    return req;
  }

  //Realizar peticiones HTTP de tipo Get (Obtener informacion)
  get(uri){

  }
  post(uri, data){

  }
}

module.exports = Cliente;
