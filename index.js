'use strict'

var mongoose = require('mongoose');
var app = require('./app')
var port = process.env.PORT || 3000;

mongoose.set('useFindAndModify', false)
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/api_rest_node', { useNewUrlParser: true } )
        .then(() => {
            console.log ('la conexion a la base de datos de mongodb se ha realisado con exito');

            app.listen(port, () => {
                console.log('El servidor http://localhost:3000 esta funcionando')
            })
        })
        .catch(error => console.log(error));