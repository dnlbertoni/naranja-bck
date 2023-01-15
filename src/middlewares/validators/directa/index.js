const jsonResponse = require('./jsonResponse');
const { check, validationResult } = require('express-validator');

const validateAuth = [

    check('tipo_operacion')
        .exists().withMessage(
            jsonResponse('No existe Parametro tipo_operacion')
        )
        .not()
        .isEmpty().withMessage(
            jsonResponse('Parametro tipo_operacion no debe quedar vacio')

        )
        .isString().withMessage(
            jsonResponse('Parametro tipo_operacion debe ser string')
        ),
    check('cod_cliente')
        .exists().withMessage(
            jsonResponse('No existe Parametro cod_cliente')
        )
        .not()
        .isEmpty().withMessage(
            jsonResponse('Parametro cod_cliente no debe quedar vacio')

        )
        .isLength({ min: 1, max: 12 }).withMessage(
            jsonResponse('Longitud cod_cliente Invalida ')

        )
        .isString().withMessage(
            jsonResponse('Parametro cod_cliente debe ser string ')
        ),
    check('id_item')
        .exists().withMessage(
            jsonResponse('No existe Parametro id_item')
        )
        .not()
        .isEmpty().withMessage(
            jsonResponse('Parametro id_item no debe quedar vacio')

        )
        .isString().withMessage(
            jsonResponse('Parametro id_item debe ser string')
        ),
    check('utility')
        .exists().withMessage(
            jsonResponse('No existe parametro utility')
        )
        .not()
        .isEmpty().withMessage(
            jsonResponse('Parametro utility no debe quedar vacio')

        )
        .isString().withMessage(
            jsonResponse('Parametro utility debe ser string')
        ),
    check('cod_trx')
        .exists().withMessage(
            jsonResponse('No existe parametro cod_trx')
        )
        .not()
        .isEmpty().withMessage(
            jsonResponse('Parametro cod_trx no debe quedar vacio')

        )
        .isString().withMessage(
            jsonResponse('Parametro cod_trx debe ser string')
        ),
    check('cod_barra')
        .exists().withMessage(
            jsonResponse('No existe parametro cod_barra')
        )
        .not()
        .isEmpty().withMessage(
            jsonResponse('Parametro cod_barra no debe quedar vacio')

        )
        .isString().withMessage(
            jsonResponse('Parametro cod_barra debe ser string')
        ),
    check('terminal')
        .exists().withMessage(
            jsonResponse('No existe parametro terminal')
        )
        .not()
        .isEmpty().withMessage(
            jsonResponse('Parametro terminal no debe quedar vacio')

        )
        .isString().withMessage(
            jsonResponse('Parametro terminal debe ser string')
        ),
    check('fecha')
        .exists().withMessage(
            jsonResponse('No existe Parametro fecha')
        )
        .not()
        .isEmpty().withMessage(
            jsonResponse('Parametro fecha no debe quedar vacio')

        )
        .isString().withMessage(
            jsonResponse('Parametro fecha debe ser string')
        ),
    check('hora')
        .exists().withMessage(
            jsonResponse('No existe Parametro hora')
        )
        .not()
        .isEmpty().withMessage(
            jsonResponse('Parametro hora no debe quedar vacio')

        )
        .isString().withMessage(
            jsonResponse('Parametro hora debe ser string')
        ),
    check('secuencia')
        .exists().withMessage(
            jsonResponse('No existe Parametro secuencia')
        )
        .not()
        .isEmpty().withMessage(
            jsonResponse('Parametro secuencia no debe quedar vacio')

        )
        .isString().withMessage(
            jsonResponse('Parametro secuencia debe ser string')
        ),
    check('importe')
        .exists().withMessage(
            jsonResponse('No existe Parametro importe')
        )
        .not()
        .isEmpty().withMessage(
            jsonResponse('Parametro importe no debe quedar vacio')

        )
        .isNumeric().withMessage(
            jsonResponse('Los datos importe deben ser numericos')
        )
        .isFloat({ min: 0 }).withMessage(
            jsonResponse('Parametro importe no debe ser menor a 0')
        )
        .isString().withMessage(
            jsonResponse('Parametro importe debe ser string')
        )
    ,
    check('cod_operacion')
        .exists().withMessage(
            jsonResponse('No existe Parametro cod_operacion')
        )
        .not()
        .isEmpty().withMessage(
            jsonResponse('Parametro cod_operacion no debe quedar vacio')

        )
        .isString().withMessage(
            jsonResponse('Parametro cod_operacion debe ser string')
        ),

    (req, res, next) => {
        try {
            validationResult(req).throw();
            return next();
        } catch (error) {
            const firstError = error.array()[0].msg;
            res.status(200).json(firstError);
        }
    }
]



module.exports = validateAuth