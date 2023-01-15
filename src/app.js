const express = require('express');
var cors = require('cors');
const config = require('config');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

/*---Imports---*/
var indexRouter = require('./routes/index');
var error404 = require('./controllers/error/404');

app = express();


// Middlewares
/*para extender limite de request*/
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));

app.use(cors());
app.use(express.json());

app.use(logger(config.get('logger')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Routes

app.use(require('./routes'));
app.use(require('./routes/recursos'));
app.use('*', error404);

module.exports = app;
