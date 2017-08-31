//POO
//ES6 class --> nos permite definir clases

var Objecto = function(){}

//Prototype sirve para extender las funcionalidades de un objeto
Objecto.prototype.Saludar = function(msg){
  console.log("Saludo", msg)
}
//Instanciar (un objeto puede ser extendido al extender su prototipo)
var o = new Objecto();
o.Saludar("demo");

//Extendiendo el objeto.
Objecto.prototype.Despedirse = function(){
  console.log("Adios");
}
o.Despedirse();
