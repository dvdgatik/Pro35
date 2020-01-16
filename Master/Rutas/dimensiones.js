'use strict'
var express = require('express');

var DimensionesController = require('../Controladores/dimensiones');
var auth0 = require('../Middleware/auth0');
var router = express.Router();

// Rutas útiles
router.post('/dimension/guardar',  DimensionesController.guardar); 
router.get('/dimension/listar/',   DimensionesController.listar); 
module.exports = router;
