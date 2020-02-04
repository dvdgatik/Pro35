'use strict'
var express = require('express');
var EmpleadosController = require('../Controladores/empleados');
var auth0 = require('../Middleware/auth0');
var router = express.Router();

// Rutas útiles
router.post('/empleado/guardar/',  EmpleadosController.guardar); 
router.get('/empleado/listar/',   EmpleadosController.listar); 
router.get('/empleado/listarid/:id',   EmpleadosController.listarid); 
router.put('/empleado/contestar/:id',   EmpleadosController.contestar); 
module.exports = router;
