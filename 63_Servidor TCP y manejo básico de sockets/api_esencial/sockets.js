// sockets - TCP
var net = require("net");

var connecciones =[];

var servidor = net.createServer((socket) => {
    socket.write("Server: echo..:\n");
    connecciones.push(socket);
    socket.on('data', (d) => {
      socket.write("no me gusta tu mensaje: " + d);
      connecciones.forEach((s)=>{
        s.write(d);
      });
    });
    socket.on('close', ()  => {
        console.log("Cliente desconectado...");
    });
});
servidor.listen(1234, () => {console.log("Servidor escuchando clientes...")});
