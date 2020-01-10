'use strict'
var express = require('express');
var EmpresasController = require('../Controladores/empresas');
var auth0 = require('../Middleware/auth0');
var router = express.Router();

// Rutas útiles
router.post('/empresa/guardar',  EmpresasController.guardar); //Guardar Una Empresa Nueva.
router.post('/empresa/importar',  EmpresasController.importar); //Importar Varias Empresas.
router.get('/empresa/listarA/',   EmpresasController.listarEA); //Listar Empresas Activas.
router.get('/empresa/listarI/',   EmpresasController.listarEI); //Listar Empresas Inactivas.
router.get('/empresa/buscar/:buscar?',   EmpresasController.buscar);//Buscar Una Empresa.
router.put('/empresa/desactivar/:id',   EmpresasController.desactivar); //Desactivar Una Empresa.
module.exports = router;


//router.post('/usuario/guardar', auth0, UsuariosController.save); //Guardar Una Empresa.