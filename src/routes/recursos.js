const express = require('express');
const router = express.Router();
const config = require('config');
const aplicationPath = '/' + config.get('server.path').toLowerCase() + '/recursos';

//Middlewares de metricas

const { middlewareHistogram } = require('../middlewares/histogram');
const { middlewareCounter } = require('../middlewares/counter');

//Middlewares de autenticacion
const authToken = require('../servicios/jwt/authToken');
const authLoginToken = require('../middlewares/authLoginToken')

//Controllers
const getCategorias = require('../controllers/v1/recursos/getCategorias');

router.get(aplicationPath + '/getCategorias', [middlewareCounter,], getCategorias, [middlewareHistogram]);

module.exports = router;


