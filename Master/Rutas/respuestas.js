'use strict'
var express = require('express');

var RespuestasController = require('../Controladores/encuestas');
var auth0 = require('../Middleware/auth0');
var router = express.Router();

// Rutas útiles
router.post('/encuesta/guardar',  RespuestasController.guardar); 
router.get('/encuesta/listar/',   RespuestasController.listar); 
router.get('/encuesta/buscar/:buscar?',   RespuestasController.buscar);
module.exports = router;
