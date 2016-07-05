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
app.use(express.static('public')); // Set static folder
app.use(cookieParser()); // Set cookie parser

// Setup view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Route
app.use('/', routeFrontpage);
app.use('/api/individuals/*', routeApi);

// Init server
var server = app.listen(8081, function() {
    var host = server.address().address
    var port = server.address().port

    console.log("Listening on http://$s:%s", host, port)
})
