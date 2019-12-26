'use strict'
var express = require('express');
var AreaController = require('../Controladores/areas');
var auth0 = require('../Middleware/auth0');
var router = express.Router();

router.post('/area/guardar', auth0, AreaController.save);//Guardar
router.put('/area/desactivar/:id',  auth0, AreaController.hide); //Desactivar
router.put('/area/actualizar/:id',  auth0, AreaController.update);//Actualizar
router.get('/area/activos/', auth0,  AreaController.active);//Listar Activos
router.get('/area/inactivos/',  auth0, AreaController.inactive);//Listar Inactivos
router.get('/area/buscar/:id',  auth0, AreaController.search);//Buscar Uno
router.get('/area/listar/',  auth0, AreaController.list);//Listar

module.exports = router;