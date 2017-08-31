var Objeto = function(){}//Para crear un objeto vacio

Objeto.prototype.Saludar = function (msg){
    console.log(msg);
}

module.exports = Objeto;

/*
Windows PowerShell
Copyright (C) 2016 Microsoft Corporation. Todos los derechos reservados.

No se puede cargar el módulo de PSReadline. Se está ejecutando la consola sin PSReadl
ine.
PS C:\Users\datasoft-edgardo\Desktop\Curso Udemy nodejs-desarrollo-de-software-profes
ional> cd '.\16_Evaluando código en REPL'
PS C:\Users\datasoft-edgardo\Desktop\Curso Udemy nodejs-desarrollo-de-software-profes
ional\16_Evaluando código en REPL> node
> var Objeto = require("./modulo.js");
undefined
> var o1 = new(Objeto);
undefined
> o1.Saludar("hola mundo");
hola mundo

undefined
>

*/
