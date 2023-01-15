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

        ),
    check('utility')
        .exists().withMessage(
            jsonResponse('No existe parametro utility')
        )
        .not()
        .isEmpty().withMessage(
            jsonResponse('Parametro utility no debe quedar vacio')

        ),
    check('cod_trx')
        .exists().withMessage(
            jsonResponse('No existe parametro cod_trx')
        )
        .not()
        .isEmpty().withMessage(
            jsonResponse('Parametro cod_trx no debe quedar vacio')

        ),
    check('terminal')
        .exists().withMessage(
            jsonResponse('No existe Parametro terminal')
        )
        .not()
        .isEmpty().withMessage(
            jsonResponse('Parametro terminal no debe quedar vacio')

        ),
    check('fecha')
        .exists().withMessage(
            jsonResponse('No existe Parametro fecha')
        )
        .not()
        .isEmpty().withMessage(
            jsonResponse('Parametro fecha no debe quedar fecha')

        ),
    check('hora')
        .exists().withMessage(
            jsonResponse('No existe Parametro hora')
        )
        .not()
        .isEmpty().withMessage(
            jsonResponse('Parametro hora no debe quedar hora')

        ),

    check('secuencia')
        .exists().withMessage(
            jsonResponse('No existe Parametro secuencia')
        )
        .not()
        .isEmpty().withMessage(
            jsonResponse('Parametro secuencia no debe quedar vacio')

        ),

    check('importe')
        .exists().withMessage(
            jsonResponse('No existe Parametro importe')
        )
        .not()
        .isEmpty().withMessage(
            jsonResponse('Parametro importe no debe quedar vacio')

        ),

    check('cod_operacion')
        .exists().withMessage(
            jsonResponse('No existe Parametro cod_operacion')
        )
        .not()
        .isEmpty().withMessage(
            jsonResponse('Parametro cod_operacion no debe quedar vacio')

        ),



    // check('ParametroBusqueda')
    //     .exists().withMessage({
    //         code: 113,
    //         message: 'No existe Parametro ParametroBusqueda'
    //     })
    //     .not()
    //     .isEmpty().withMessage({
    //         code: 114,
    //         message: 'Parametro ParametroBusqueda no debe quedar vacio'
    //     })
    //     .isNumeric().withMessage({
    //         code: 115,
    //         message: 'Los datos ParametroBusqueda deben ser numericos'
    //     })
    //     .isLength({ min: 1, max: 100 }).withMessage({
    //         code: 116,
    //         message: 'Longitud ParametroBusqueda Invalida'
    //     }),

    // check('id_item')
    //     .exists().withMessage({
    //         code: 113,
    //         message: 'No existe Parametro sexo'
    //     })
    //     .not()
    //     .isEmpty().withMessage({
    //         code: 114,
    //         message: 'Parametro sexo no debe quedar vacio'
    //     })
    //     .isNumeric().withMessage({
    //         code: 115,
    //         message: 'Los datos sexo deben ser numericos'
    //     })
    //     .isLength({ min: 1, max: 1 }).withMessage({
    //         code: 116,
    //         message: 'Longitud sexo Invalida'
    //     }),

    // check('utility')
    //     .exists().withMessage({
    //         code: 113,
    //         message: 'No existe Parametro sexo'
    //     })
    //     .not()
    //     .isEmpty().withMessage({
    //         code: 114,
    //         message: 'Parametro sexo no debe quedar vacio'
    //     })
    //     .isNumeric().withMessage({
    //         code: 115,
    //         message: 'Los datos sexo deben ser numericos'
    //     })
    //     .isLength({ min: 1, max: 1 }).withMessage({
    //         code: 116,
    //         message: 'Longitud sexo Invalida'
    //     }),

    // check('cod_trx')
    //     .exists().withMessage({
    //         code: 113,
    //         message: 'No existe Parametro sexo'
    //     })
    //     .not()
    //     .isEmpty().withMessage({
    //         code: 114,
    //         message: 'Parametro sexo no debe quedar vacio'
    //     })
    //     .isNumeric().withMessage({
    //         code: 115,
    //         message: 'Los datos sexo deben ser numericos'
    //     })
    //     .isLength({ min: 1, max: 1 }).withMessage({
    //         code: 116,
    //         message: 'Longitud sexo Invalida'
    //     }),

    // check('cod_barra')
    //     .exists().withMessage({
    //         code: 113,
    //         message: 'No existe Parametro sexo'
    //     })
    //     .not()
    //     .isEmpty().withMessage({
    //         code: 114,
    //         message: 'Parametro sexo no debe quedar vacio'
    //     })
    //     .isNumeric().withMessage({
    //         code: 115,
    //         message: 'Los datos sexo deben ser numericos'
    //     })
    //     .isLength({ min: 1, max: 1 }).withMessage({
    //         code: 116,
    //         message: 'Longitud sexo Invalida'
    //     }),

    // check('terminal')
    //     .exists().withMessage({
    //         code: 113,
    //         message: 'No existe Parametro sexo'
    //     })
    //     .not()
    //     .isEmpty().withMessage({
    //         code: 114,
    //         message: 'Parametro sexo no debe quedar vacio'
    //     })
    //     .isNumeric().withMessage({
    //         code: 115,
    //         message: 'Los datos sexo deben ser numericos'
    //     })
    //     .isLength({ min: 1, max: 1 }).withMessage({
    //         code: 116,
    //         message: 'Longitud sexo Invalida'
    //     }),

    // check('fecha')
    //     .exists().withMessage({
    //         code: 113,
    //         message: 'No existe Parametro sexo'
    //     })
    //     .not()
    //     .isEmpty().withMessage({
    //         code: 114,
    //         message: 'Parametro sexo no debe quedar vacio'
    //     })
    //     .isNumeric().withMessage({
    //         code: 115,
    //         message: 'Los datos sexo deben ser numericos'
    //     })
    //     .isLength({ min: 1, max: 1 }).withMessage({
    //         code: 116,
    //         message: 'Longitud sexo Invalida'
    //     }),

    // check('hora')
    //     .exists().withMessage({
    //         code: 113,
    //         message: 'No existe Parametro sexo'
    //     })
    //     .not()
    //     .isEmpty().withMessage({
    //         code: 114,
    //         message: 'Parametro sexo no debe quedar vacio'
    //     })
    //     .isNumeric().withMessage({
    //         code: 115,
    //         message: 'Los datos sexo deben ser numericos'
    //     })
    //     .isLength({ min: 1, max: 1 }).withMessage({
    //         code: 116,
    //         message: 'Longitud sexo Invalida'
    //     }),

    // check('secuencia')
    //     .exists().withMessage({
    //         code: 113,
    //         message: 'No existe Parametro sexo'
    //     })
    //     .not()
    //     .isEmpty().withMessage({
    //         code: 114,
    //         message: 'Parametro sexo no debe quedar vacio'
    //     })
    //     .isNumeric().withMessage({
    //         code: 115,
    //         message: 'Los datos sexo deben ser numericos'
    //     })
    //     .isLength({ min: 1, max: 1 }).withMessage({
    //         code: 116,
    //         message: 'Longitud sexo Invalida'
    //     }),

    // check('importe')
    //     .exists().withMessage({
    //         code: 113,
    //         message: 'No existe Parametro sexo'
    //     })
    //     .not()
    //     .isEmpty().withMessage({
    //         code: 114,
    //         message: 'Parametro sexo no debe quedar vacio'
    //     })
    //     .isNumeric().withMessage({
    //         code: 115,
    //         message: 'Los datos sexo deben ser numericos'
    //     })
    //     .isLength({ min: 1, max: 1 }).withMessage({
    //         code: 116,
    //         message: 'Longitud sexo Invalida'
    //     }),

    // check('cod_operacion')
    //     .exists().withMessage({
    //         code: 113,
    //         message: 'No existe Parametro sexo'
    //     })
    //     .not()
    //     .isEmpty().withMessage({
    //         code: 114,
    //         message: 'Parametro sexo no debe quedar vacio'
    //     })
    //     .isNumeric().withMessage({
    //         code: 115,
    //         message: 'Los datos sexo deben ser numericos'
    //     })
    //     .isLength({ min: 1, max: 1 }).withMessage({
    //         code: 116,
    //         message: 'Longitud sexo Invalida'
    //     }),

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