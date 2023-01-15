const express = require('express');
const jwt = require('jsonwebtoken');
require('dotenv').config()
const verificacion = express.Router();
const key = process.env.JWT_KEY
const logDilfer = require('../debug/logDilfer');

/*
    1dia = 86400 ----->Segundos
    1dia = 86,400,000 ----->milisegundos
    TIME_CONTROL_TOKEN --> SETEAR EN HORAS
    0.01666666666 en horas ->equivale a 1 minuto 
    horas->milisegundos
*/

//Si la diferencia entre (fechaActual - fechageneracionToken) < TiempoValido = Acceso a la app.
const tiempoValido = process.env.TIME_CONTROL_TOKEN * 3600000 //en milisegundos

verificacion.use((req, res, next) => {

    let token = req.headers['x-access-token'] || req.headers['authorization']

    if (token == 'Bearer' || !token) {
        res.status(401).send({
            "message": 'No se encontró el Token de acceso o es invalido.'
        });

        return
    }

    if (token.startsWith('Bearer ')) {
        token = token.slice(7, token.length);
    }

    if (token) {
        jwt.verify(token, key, (error, decoded) => {

            if (error) {
                res.json({
                    message: "token invalido"

                })

            }
            else {
                //logDilfer(decoded);//data jwt

                const fecha_generacion = decoded.iat * 1000 //fecha generacion token a milisegundos
                const fecha_hoy = new Date().getTime(); //en milisegundos 
                const diferencia = fecha_hoy - fecha_generacion
                const acceso = tiempoValido >= diferencia

                const myJson = {
                    fecha_generacion: fecha_generacion,
                    fecha_hoy: fecha_hoy,
                    diferencia: diferencia,
                    tieneAcceso: acceso,
                    tiempoValido: tiempoValido
                }

                // logDilfer(`  Data Auth Token:`)
                // logDilfer(myJson)
                // logDilfer('\n')

                //(fechaActual - fechGeneracionToken ) > tiempo valido = Acceso a la app
                if (!acceso) {
                    logDilfer(`La Fecha de generacion mayor a ${tiempoValido / 3600000}hs`)

                    const jsonResponse = {
                        code: 02,
                        message: "Token Expirado"
                    }
                    res.status(200).json(jsonResponse);
                    return
                }

                req.decoded = decoded;
                next();
            }
        })
    }
});





module.exports = verificacion
