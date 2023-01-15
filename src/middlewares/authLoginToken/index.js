const dbora = require('../../servicios/dbora');

require('dotenv').config()
const idAplicacion = process.env.APP_ID;


//authLoginToken: Verifica que exita el token en la tabla auth_Login_Token, en caso de que no exista
//impide el flujo del endpont primario. 

const authLoginToken = async (req, res, next) => {

    try {
        let token = req.headers['x-access-token'] || req.headers['authorization']

        if (token == 'Bearer' || !token || token == null || token == undefined) {
            res.status(401).send({
                "message": 'No se encontró el Token de acceso.'
            });
            console.log('No se encontró el Token de acceso.')
            return
        }

        if (token.startsWith('Bearer ')) {           
            //Si el token ingresado es por bearer:
            token = token.slice(7, token.length);
           
        }

        const sql = `select count(*) registros from auth_login_token where id_aplication=:iID_APLICATION and token=:iTOKEN`;

        const params = {
            iID_APLICATION: { val: idAplicacion, dir: dbora.BIND_INOUT },
            iTOKEN: { val: token, dir: dbora.BIND_INOUT },
        }

        const result = await dbora.Open(sql, params, false);
        console.log(result);


        const registroToken = parseInt(result.rows[0][0]);


        if (registroToken == 0 || registroToken == undefined) {
            console.log(`Token invalido \nToken: ${token}`);

            //token invalido 
            const jsonResponse = {
                "code": 01,
                "message": "Ups! Sucedió un error por favor comunicate con el numero xxx-xxxx-xxx",
                "result": null
            }
            return res.status(200).json(jsonResponse);
        }

        next();

    } catch (error) {
        console.log(error)

        //token invalido o error consulta DB
        console.log(`Token invalido o error consulta DB ${token}`);
        const jsonResponse = {
            "code": 02,
            "message": "Ups! Sucedió un error por favor comunicate con el numero xxx-xxxx-xxx",
            "result": null
        }
        res.status(200).json(jsonResponse);

    }
}

module.exports = authLoginToken;

