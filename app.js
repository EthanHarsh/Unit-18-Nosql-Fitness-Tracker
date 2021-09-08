const express = require('express');
const routeIndex = require('./routes/index')



const app = express();

//middleware
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded());


//routes
app.use('/', routeIndex);

module.exports = app;