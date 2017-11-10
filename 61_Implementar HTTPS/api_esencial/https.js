var https = require("https");
var fs = require("fs")//Para leer los certificados desde los arhchivos .pem

/**
//Para generar los certificados:
openssl req -x509 newkey rsa:2048 -keyout llave.pem -out cert cert.pem -days 365
**/

var opt = {
    key: fs.readFileSync('llave.pem'),
    cert: fs.readFileSync('cert.pem'),
    passphrase: "12345"
};

// llaves, key pair
// llave_priv, llave_pub

https.createServer(opt, (req, res) => {
    res.writeHead(200);
    res.end("Hola mundo");
}).listen(8000);

//Para ejecutar: "node .\https.js"
