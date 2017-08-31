
//Opcion 1 (no es funcion flecha)
var x = function(a,b){
  c= a+b;
  return c;
}
//Opcion 2 (no es funcion flecha)
var y = function(a,b){c=a+b; return c;}
//Opcion 3
//Formato para funcion flecha
var z = (a,b) => a+b;

console.log(x(3,4));
console.log(y(5,4));
console.log(z(5,15));
