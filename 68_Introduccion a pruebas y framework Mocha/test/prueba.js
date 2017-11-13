var assert = require("assert"); // librera aserción - lanzar errores

var Calculadora = require("../calculadora.js");

describe("Calculadora", function() {
    var c = new Calculadora();

    describe("#Sumar", function() {
        // prueba -
        it("La suma de dos números es realizada correctamente", function() {
            assert.equal(
                c.Sumar(2, 3),
                5,
                "La suma es incorrecta");
        });

        it("Cuando un valor es nulo, debe transformarse en 0", function() {
            assert.equal(c.Sumar(2, null), 2, "null no equivale a 0");
        })

        // una especificación
        it("NaN siempre debe interpretarse como 0", function() {
            assert.equal(c.Sumar(2, NaN), 2, "NaN no equivale a 0");
        })
    });
});
