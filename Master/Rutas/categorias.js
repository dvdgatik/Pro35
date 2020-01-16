'use strict'
var express = require('express');

var CategoriasController = require('../Controladores/categorias');
var auth0 = require('../Middleware/auth0');
var router = express.Router();

// Rutas útiles
router.post('/categoria/guardar',  CategoriasController.guardar); 
router.get('/categoria/listar/',   CategoriasController.listar); 
module.exports = router;
