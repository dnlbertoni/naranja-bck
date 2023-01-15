
const getCategorias = async (req, res, next) => {
    try {
        // const fecActual = moment().subtract(3, 'hours').format('YYYYMMDD');
        // const horaActual = moment().subtract(3, 'hours').format('HH:mm:ss');
        const jsonResponse = {
                "code": 10,
                "message": "OK",
                "data": 
                  [
                    {
                      "id": 1,
                      "nombre": 'Software'
                    },
                    {
                      "id": 2,
                      "nombre": 'Infraestructura'
                    },
                    {
                      "id": 3,
                      "nombre": 'RRHH'
                    }
                  ]
        }
            res.status(200).json(jsonResponse);
            return next();
    } catch (error) {
        console.log(error)
        const jsonResponse = {
            "code": 11,
            "message": 'error',
            "data": {}
        }
        res.status(200).json(jsonResponse);
        return next();
    }
}

module.exports = getCategorias;


