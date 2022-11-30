'use strict'

//Requires
var express = require('express');
var bodyParser = require('body-parser');

//ejecutar express
var app = express();

//cargar archivos de rutas
var user_routes = require('../routes/users')

//middlewares
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.get('/prueba', (req, res) => {
    return res.status(200).send("<h1>hola perra desde el backend<h1>")
    /*return res.status(200).send({
        nombre: "yo",
        message: 'hola perra'
    })*/
})

app.use('/api', user_routes)

module.exports = app;