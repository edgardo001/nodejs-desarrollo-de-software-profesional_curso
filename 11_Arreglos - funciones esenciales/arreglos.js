var arr = [6,-23,12,45,-9,0,1,4,99];

//forEach - iterador
for (var i = 0; i < arr.length; i++) {
  console.log(arr[i])
}

arr.forEach(function(a,b) {
  console.log(a,b)
});

//o en formato "funcion flecha"
arr.forEach((a,b)=>console.log(a,b));

//=====================================================================
//=====================================================================
//FILTER
var resultado = arr.filter((valor) => { return valor > 5});
console.log(resultado);

//=====================================================================
//=====================================================================
//MAP
var resultado2 = arr.map(function(valor){
  //Manipulacion de datos
  return valor*valor;//eleva al cuadrado
});
console.log(resultado2);
//=====================================================================
//MAP y encadenar otra funcion
var resultado2 = arr.map(function(valor){
  return valor*valor;
}).filter((x) => x>2000);
console.log(resultado2);

//=====================================================================
//=====================================================================
//Reduce - reducir a un resultado unico basado en el arreglo
var resultado3 = arr.reduce((acumulador,valor) => acumulador+valor,0);//El 0 es un inicializador, con cuanto empezara el valor previo, osea "a", si no lo coloco, siempre sera 0
//En a se guardar el valor previo y en b el actual
console.log(resultado3);
//=====================================================================
//Reduce - reducir a un resultado unico basado en el arreglo
var resultado3 = arr.reduce((acumulador,valor) => {
  acumulador.valor = acumulador.valor+valor;
  return acumulador;
}, { valor: 0});//Tambien se puede pasar un objeto json como acumulador
console.log(resultado3);

//Para mas informacion, se puede buscar en la documentacion de mozilla
//se recomienda buscar info en ingles, simepre es mas completra
//Ingresar en google "mdn arreglos"
