var spawn = require('child_process').spawn;
//var cat = spawn('cat', ['-n','procesos.js']);//Linux
var cat = spawn('more', ['procesos.js']);//Windows, no funciona Get-Content de powershell

cat.stdout.on('data', (data) =>{
  console.log(data);//bytes
  console.log(new String(data));//bytes
});
