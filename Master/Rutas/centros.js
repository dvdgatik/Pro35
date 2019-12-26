'use strict'
var express = require('express');
var CentroController = require('../Controladores/centros');
var auth0 = require('../Middleware/auth0');
var router = express.Router();

router.post('/centro/guardar', auth0, CentroController.save);//Guardar
router.put('/centro/desactivar/:id',  auth0, CentroController.hide); //Desactivar
router.put('/centro/actualizar/:id',  auth0, CentroController.update);//Actualizar
router.get('/centro/activos/', auth0,  CentroController.active);//Listar Activos
router.get('/centro/inactivos/',  auth0, CentroController.inactive);//Listar Inactivos
router.get('/centro/buscar/:id',  auth0, CentroController.search);//Buscar Uno
router.get('/centro/listar/',  auth0, CentroController.list);//Listar

module.exports = router;