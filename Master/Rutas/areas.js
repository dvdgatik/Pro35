'use strict'
var express = require('express');
var AreasController = require('../Controladores/areas');
var auth0 = require('../Middleware/auth0');
var router = express.Router();

// Rutas útiles
router.post('/area/guardar',  AreasController.guardar); //Guardar Un Centro.
router.post('/area/importar',  AreasController.importar); //Importar Varios Centros
router.get('/area/listarA/',   AreasController.listarAA); //Listar Centros Activas.
router.get('/area/listarI/',   AreasController.listarAI); //Listar Centros Inactivas.
router.get('/area/buscar/:buscar?',   AreasController.buscar);//Buscar Un Centro.
router.put('/area/desactivar/:id',   AreasController.desactivar); //Desactivar Un Centro.
module.exports = router;


//router.post('/usuario/guardar', auth0, UsuariosController.save); //Guardar Una Empresa.