const express = require('express');



const app = express();

//middleware
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded());


//routes


module.exports = app;