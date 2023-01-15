const express = require('express');
const router = express.Router();
const config = require('config');
const aplicationPath = '/' + config.get('server.path').toLowerCase();


//Middlewares de metricas

const { middlewareHistogram } = require('../middlewares/histogram');
const { middlewareCounter } = require('../middlewares/counter');

//Middlewares de autenticacion
const authToken = require('../servicios/jwt/authToken');
const authLoginToken = require('../middlewares/authLoginToken')

const dummy = require('../servicios/dummy');
const metrics = require('../servicios/prometheus/metrics/');

//Logica: metrica de contado + controlador + metrica del histograma
router.get(aplicationPath + '/dummy', [middlewareCounter], dummy, [middlewareHistogram]);
router.get(aplicationPath + '/metrics', metrics);

module.exports = router;


