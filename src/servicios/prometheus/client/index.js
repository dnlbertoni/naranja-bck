const client = require('prom-client');
const config = require('config');
//https://www.youtube.com/watch?v=HMQ-h3riqYU&ab_channel=TomDoesTech
const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics({ timeout: 5000 });

const histogram = new client.Histogram({
    name: `histogram`,
    help: `histogram_help`,
    labelNames: ["method", "route", "status_code", "status"],
    buckets: [1, 2, 5, 6, 10]
});

const counter = new client.Counter({
    name: `counter`,
    help: `counter_help`,
    labelNames: ["method", "route", "status_code"]
});

module.exports = {
    counter,
    histogram
};
