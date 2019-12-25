'use strict'

let express = require('express');
let bodyParser = require('body-parser');
let jwt = require('express-jwt');
let jwks = require('jwks-rsa');
let app = express();

let usuario_routes = require('./Master/Rutas/usuarios');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use('/api', [usuario_routes]);

module.exports = app; 