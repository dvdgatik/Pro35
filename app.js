'use strict'

let express = require('express');
let bodyParser = require('body-parser');
let jwt = require('express-jwt');
let jwks = require('jwks-rsa');
let app = express();

//let usuario_routes = require('./Master/Rutas/usuarios');
let empresas_routes = require('./Master/Rutas/empresas');
let centros_routes = require('./Master/Rutas/centros');
let areas_routes = require('./Master/Rutas/areas');
let departamentos_routes = require('./Master/Rutas/departamentos');
let dimensiones_routes = require('./Master/Rutas/dimensiones');
let dominios_routes = require('./Master/Rutas/dominios');
let categorias_routes = require('./Master/Rutas/categorias');
let encuestas_routes = require('./Master/Rutas/encuestas');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use('/api', [empresas_routes], [centros_routes], [areas_routes], [departamentos_routes], [dominios_routes], [dimensiones_routes], [categorias_routes], [encuestas_routes] );

module.exports = app; 