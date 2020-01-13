'use strict'
var express = require('express');
var EmpleadosController = require('../Controladores/empleados');
var auth0 = require('../Middleware/auth0');
var router = express.Router();

// Rutas útiles
router.post('/empleados/guardar',  EmpleadosController.guardar); //Guardar Una Empresa Nueva.
router.post('/empleados/importar',  EmpleadosController.importar); //Importar Varias Empresas.
router.get('/empleados/listarA/',   EmpleadosController.listarEA); //Listar Empresas Activas.
router.get('/empleados/listarI/',   EmpleadosController.listarEI); //Listar Empresas Inactivas.
router.get('/empleados/buscar/:buscar?',   EmpleadosController.buscar);//Buscar Una Empresa.
router.put('/empleados/desactivar/:id',   EmpleadosController.desactivar); //Desactivar Una Empresa.
module.exports = router;
