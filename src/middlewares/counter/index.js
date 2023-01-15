const { counter } = require('../../servicios/prometheus/client');

const middlewareCounter = (req, res, next) => {
    try {
        counter.inc();
        return next();
    } catch (error) {
        console.log(error);
        return next();
    }
}

module.exports = { middlewareCounter };
