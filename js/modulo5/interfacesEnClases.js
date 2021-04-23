"use strict";
(function () {
    var Mayusculas = /** @class */ (function () {
        function Mayusculas() {
        }
        Mayusculas.prototype.transformarString = function (valor) {
            return valor.toUpperCase();
        };
        return Mayusculas;
    }());
    var Invertir = /** @class */ (function () {
        function Invertir() {
        }
        Invertir.prototype.transformarString = function (valor) {
            var valorInvertido = valor.split('')
                .map(function (char, index, arr) { return arr[arr.length - 1 - index]; }).join('');
            return valorInvertido;
        };
        return Invertir;
    }());
    function procesar(valor) {
        var transformaciones = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            transformaciones[_i - 1] = arguments[_i];
        }
        var respuesta = valor;
        for (var i = 0; i < transformaciones.length; i++) {
            var transformacion = transformaciones[i];
            respuesta = transformacion.transformarString(respuesta);
        }
        return respuesta;
    }
    var mayusculas = new Mayusculas();
    var invertir = new Invertir();
    var nombre = "felipe";
    var nombre2 = "Claudia";
    var nombre3 = "Roberto";
    console.log(procesar(nombre, mayusculas));
    console.log(procesar(nombre2, invertir));
    console.log(procesar(nombre3, mayusculas, invertir));
})();
