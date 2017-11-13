class Calculadora {
    Sumar(a, b) {
        if (isNaN(a)) {
            a = 0;
        }
        if (isNaN(b)) {
            b = 0;
        }
        return a + b;
    }
}

module.exports = Calculadora;

//Instalacion de mocha de forma global en node
//npm install --global mocha
//Para ejecutar mocha, se debe realizar desde
//el directorio del proyecto con "mocha",
//este automaticamente ira a la carpeta test, y ejecutara su contenido.
//Tambien se puede ir a la ruta de la prueba y ejecutarla con:
//"mocha .\test\prueba.js"
