'use strict'
var express = require('express');
var EmpleadosController = require('../Controladores/empleados');
var auth0 = require('../Middleware/auth0');
var router = express.Router();

// Rutas útiles
router.post('/empleados/guardar',  EmpleadosController.guardar); 
router.post('/empleados/importar',  EmpleadosController.importar); 
router.get('/empleados/listarA/',   EmpleadosController.listarEA); 
router.get('/empleados/listarI/',   EmpleadosController.listarEI); 
router.get('/empleados/buscar/:buscar?',   EmpleadosController.buscar);
router.put('/empleados/desactivar/:id',   EmpleadosController.desactivar); 
module.exports = router;
