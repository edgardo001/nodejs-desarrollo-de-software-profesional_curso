//Programacion funcional

//1. inmutabilidad - valores
var a = [1,2,3,4];
//a[0] = 10;//no es funcional

var b = a.map((x)=>x * 2);//Esto es inmutable. Se pasa a otra variable sin alterar la origuinal
console.log(a,b);


//2. funciones como parametros, funciones que regresan funciones
// - Reutilizacion de codigo
var suma = function(a,b){
  return a+b;
};
console.log(suma(2,2));

var suma2 = function(a){
  return function(b){
    return a+b;
  }
}
console.log(suma(2,2), suma2(2)(3));

var suma10 = suma2(10);
var suma11 = suma2(11);
console.log(suma(2,2), suma10(7));
console.log(suma(2,2), suma11(7));



var f = function(callback){
  //ejecucion de una secuencia
  if (typeof callback == 'function') {
    return callback();
  }
};

//3. En Programacion Funcional siempre se debe de regresar un resultado unico
// raiz cuadrada de 4 = 2, = -2 // no es Funcional
