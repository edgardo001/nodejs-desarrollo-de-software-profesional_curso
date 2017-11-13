var assert = require("assert"); // librera aserción - lanzar errores//integrada con node
var Calculadora = require("../calculadora.js");

//Se describe que realizaca la clase calculadora
describe("Calculadora", function() {
    var c = new Calculadora();//Se instancia la calculadora para ser usada

    //Se describen los metodos, es convencion usar # antes del nombre del metodo
    describe("#Sumar", function() {
        // prueba -
        it("La suma de dos números es realizada correctamente", function() {
            //se entrega el metodo y sus parametros, el resultado, la respuesta en caso de fallo.
            assert.equal(c.Sumar(2, 3),5,"La suma es incorrecta");
        });

        it("Cuando un valor es nulo, debe transformarse en 0", function() {
            assert.equal(c.Sumar(2, null), 2, "null no equivale a 0");
        })

        // una especificación
        it("NaN siempre debe interpretarse como 0", function() {
            assert.equal(c.Sumar(2, NaN), 2, "NaN no equivale a 0");
        })
    });

    describe("#Restar", function(){
      it("Cuando se restan 2 numeros, debe hacerse correctamente.", ()=>{
        //assert.equal(c.Restar(10,3),7,"La resta no esta funcionando.");//OK
        assert.equal(c.Restar(10,3),8,"La resta no esta funcionando.");//MAL
      });
    });
});
