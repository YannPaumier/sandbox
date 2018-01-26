var bodyParser = require('body-parser');

// Set up the express app
var express = require('express');
var app = express();

/*
 * Initialisation de middleware
 */
app.use(bodyParser.json()) // Parse des requêtes entrantes
.use(bodyParser.urlencoded({ extended: true }))
.use(express.static(__dirname +'./../../')); //serves the index.html

/*
 * Set des routes
 */
var routes = require('./routes/');
//Use our router configuration when we call /api
app.use('/', routes);

module.exports = app;
