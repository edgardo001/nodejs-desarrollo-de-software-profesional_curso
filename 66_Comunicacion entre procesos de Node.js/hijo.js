//escuchar mensajes, llega en formato json
process.on('message', (mensaje)=>{
  var m = JSON.parse(mensaje);
  console.log(m);//No se vera desde el lanzador, ya que sera otro proceso con otro pid
  process.send({msg:"mensaje recibido"});
});
