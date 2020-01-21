'use strict'
var express = require('express');

var DominiosController = require('../Controladores/dominios');
var auth0 = require('../Middleware/auth0');
var router = express.Router();

// Rutas útiles
router.post('/dominio/guardar',  DominiosController.guardar); 
router.get('/dominio/listar/:nombre',   DominiosController.listar); 
router.get('/dominio/listar2/:nombre',   DominiosController.listar2); 
module.exports = router;
