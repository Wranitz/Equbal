require('rootpath')();
const express = require("express");
const header = require('./_helpers/header');
const bodyParser = require('body-parser');
const app = express();
const jwt = require('./_helpers/jwt');
const errorHandler = require('./_helpers/error-handler');
const cors = require('cors');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(cors());

// use JWt auth to secure the api
app.use(jwt());

// Add headers
app.use(header);

//api routes
app.use('/users', require('./users/users.controller'));

// global error handler
app.use(errorHandler); 

//start server
const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Listening on port ${port}`));