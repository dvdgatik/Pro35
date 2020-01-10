'use strict'
var express = require('express');
var CentrosController = require('../Controladores/centros');
var auth0 = require('../Middleware/auth0');
var router = express.Router();

// Rutas útiles
router.post('/centro/guardar/:idEmpresa',  CentrosController.guardar); //Guardar Un Centro.
router.post('/centro/importar',  CentrosController.importar); //Importar Varios Centros
router.get('/centro/listarA/',   CentrosController.listarCA); //Listar Centros Activas.
router.get('/centro/listarI/',   CentrosController.listarCI); //Listar Centros Inactivas.
router.get('/centro/buscar/:buscar?',   CentrosController.buscar);//Buscar Un Centro.
router.put('/centro/desactivar/:id',   CentrosController.desactivar); //Desactivar Un Centro.
module.exports = router;


//router.post('/usuario/guardar', auth0, UsuariosController.save); //Guardar Una Empresa.