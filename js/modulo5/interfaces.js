"use strict";
(function () {
    function enviarEmail(mensaje) {
        // envía el mensaje
    }
    var mensaje = {
        cuerpo: "Este es el cuerpo",
        asunto: "Este es un asunto",
        email: "ejemplo@hotmail.com",
        prioritario: true,
        otraPropiedad: "puedo?"
    };
    enviarEmail(mensaje);
})();
