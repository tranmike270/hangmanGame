//Require NPM packages and modules
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var routes = require('./app/routing/routes.js');

// Create an instance of the express app.
var app = express();

// configure body parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname + "/app")));




//Routes
app.use('/',routes);



// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;


// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });