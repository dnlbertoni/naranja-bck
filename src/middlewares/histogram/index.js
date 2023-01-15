const { histogram } = require('../../servicios/prometheus/client/index');

const middlewareHistogram = (req, res) => {
  //console.log("Middleware prometheus")
    if (req?.route?.path) {
      if(!isNaN(res.endpointTimeStart)){
        const end = (new Date() - res.endpointTimeStart) / 100;
        histogram.observe({
          method: req.method,
          route: req.route.path,
          status_code: res.statusCode,
          status:res.statusApp || 'OK'
        }, end)  
      }else{
        console.log('No se ingreso res.endpointTimeStart en el controlador de la ruta:  ' + req.method + '=> '+req.route.path)
      }            
    }  
}

module.exports = {middlewareHistogram};
