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

// Defaults
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public')); // Set static folder
app.use('/angular', express.static(__dirname + '/node_modules/angular')); // TODO: Consider copying angular to the `public` folder
app.use('/angular-route', express.static(__dirname + '/node_modules/angular-route')); // TODO: Consider copying angular-route to the `public` folder
app.use('/angular-resource', express.static(__dirname + '/node_modules/angular-resource')); // TODO: Consider copying angular-resource to the `public` folder
app.use(cookieParser()); // Set cookie parser

// Set favicon
app.use(favicon(path.join(__dirname, 'public/images', 'favicon.png')));

// Route
app.use('/', routeFrontpage);
app.use('/api/profiles', routeApi);

module.exports = app;
