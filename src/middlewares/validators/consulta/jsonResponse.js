const jsonResponse = (msj) => {
    const result = {
        "tipo_operacion": null,
        "cod_cliente": null,
        "nom_cliente": null,
        "utility": null,
        "terminal": null,
        "fecha": null,
        "hora": null,
        "cod_operacion": 9,
        "cod_respuesta": 'C/D/R',
        "msg_respuesta": msj,
        "items": null,
    }
    return result
}

module.exports = jsonResponse