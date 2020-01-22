'use strict'
var express = require('express');

var EncuestasCController = require('../Controladores/encuestasContestadas');
var auth0 = require('../Middleware/auth0');
var router = express.Router();

// Rutas útiles
router.post('/contestada/guardar/',   EncuestasCController.guardar); 
router.get('/contestada/listar/:numeroPregunta',   EncuestasCController.listar); 
module.exports = router;
