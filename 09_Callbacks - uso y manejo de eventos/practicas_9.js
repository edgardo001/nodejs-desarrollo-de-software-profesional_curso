//POO
//ES6 class --> nos permite definir clases

var Objecto = function(){}

//Prototype sirve para extender las funcionalidades de un objeto
Objecto.prototype.Saludar = function(msg, callback){
  console.log("Saludo", msg);
  //Valido que callback sea una funcion
  if (typeof callback === 'function') {
    callback();//Un callback siempre se usara al final de la funcion.
  }else {
    console.log("callback no es una funcion");
  }
}
//Instanciar (un objeto puede ser extendido al extender su prototipo)
var o = new Objecto();
o.Saludar("demo", function(){console.log("ejecutado!!")});
//Esto se caera, ya que el callback debe ser una funcion ejecutable
o.Saludar("hey...", 5);
