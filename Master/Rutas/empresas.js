'use strict'
var express = require('express');
var EmprersasController = require('../Controladores/empresas');
var auth0 = require('../Middleware/auth0');
var router = express.Router();

router.post('/empresa/guardar', auth0, EmprersasController.save);//Guardar
router.put('/empresa/desactivar/:id',  auth0, EmprersasController.hide); //Desactivar
router.put('/empresa/actualizar/:id',  auth0, EmprersasController.update);//Actualizar
router.get('/empresa/activos/', auth0,  EmprersasController.active);//Listar Activos
router.get('/empresa/inactivos/',  auth0, EmprersasController.inactive);//Listar Inactivos
router.get('/empresa/buscar/:id',  auth0, EmprersasController.search);//Buscar Uno
router.get('/empresa/listar/',  auth0, EmprersasController.list);//Listar

module.exports = router;