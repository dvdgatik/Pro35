'use strict'
var express = require('express');
var DepartamentoController = require('../Controladores/departamentos');
var auth0 = require('../Middleware/auth0');
var router = express.Router();

router.post('/departamento/guardar', auth0, DepartamentoController.save);//Guardar
router.put('/departamento/desactivar/:id',  auth0, DepartamentoController.hide); //Desactivar
router.put('/departamento/actualizar/:id',  auth0, DepartamentoController.update);//Actualizar
router.get('/departamento/activos/', auth0,  DepartamentoController.active);//Listar Activos
router.get('/departamento/inactivos/',  auth0, DepartamentoController.inactive);//Listar Inactivos
router.get('/departamento/buscar/:id',  auth0, DepartamentoController.search);//Buscar Uno
router.get('/departamento/listar/',  auth0, DepartamentoController.list);//Listar

module.exports = router;