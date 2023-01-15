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
    check('campos_busqueda[0].campo1')
        .exists().withMessage(
            jsonResponse('No existe Parametro campos_busqueda[0].campo1 (dni)')
        )
        .not()
        .isEmpty().withMessage(
            jsonResponse('Parametro campos_busqueda[0].campo1 no debe quedar vacio (dni)')

        )
        .isLength({ min: 7, max: 8 }).withMessage(
            jsonResponse('Longitud campos_busqueda[0].campo1 Invalida (dni)')

        )
        .isString().withMessage(
            jsonResponse('Parametro campos_busqueda[1].campo2 debe ser string')
        ),

    check('campos_busqueda[1].campo2')
        .exists().withMessage(
            jsonResponse('No existe Parametro campos_busqueda[1].campo2 (genero)')
        )
        .not()
        .isEmpty().withMessage(
            jsonResponse('Parametro campos_busqueda[1].campo2 no debe quedar vacio (genero)')

        )
        .isString().withMessage(
            jsonResponse('Parametro campos_busqueda[1].campo2 debe ser string')
        )
    ,
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
            // ver si de aca se contabiliza para las metricas de error
        }
    }
]

module.exports = validateAuth