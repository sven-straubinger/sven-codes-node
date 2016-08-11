var fs = require('fs');
var path = require('path');
var logger = require('morgan');
var express = require('express');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser')

// Setup routes
var routeFrontpage = require('./routes/frontpage');
var routeApi = require('./routes/api');

// Init app
var app = express();

// Basic auth
var auth = require('./routes/auth');
app.use(auth);

// Defaults
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public')); // Set static folder
app.use(cookieParser()); // Set cookie parser

// Set favicon
app.use(favicon(path.join(__dirname, 'public/images', 'favicon.png')));

// Routes
app.use('/', routeFrontpage);
app.use('/api/profiles', routeApi);

module.exports = app;
