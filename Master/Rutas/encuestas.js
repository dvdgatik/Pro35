'use strict'
var express = require('express');

var EncuestasController = require('../Controladores/encuestas');
var auth0 = require('../Middleware/auth0');
var router = express.Router();

// Rutas útiles
router.get('/encuesta/listar/:idGuia/:idSeccion',   EncuestasController.listar); 
module.exports = router;
