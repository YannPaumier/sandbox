// Set up the express app
var express = require('express');
var app = express();

/*
 * Initialisation de middleware
 */
app.use(express.static(__dirname +'./../../')); //serves the index.html


/*
 * Set des routes
 */
var routes = require('./routes/');
//Use our router configuration when we call /api
app.use('/', routes);

module.exports = app;
