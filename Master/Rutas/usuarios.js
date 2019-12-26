'use strict'
var express = require('express');
var UsuariosController = require('../Controladores/usuarios');
var auth0 = require('../Middleware/auth0');
var router = express.Router();

router.post('/usuario/guardar', auth0, UsuariosController.save);//Guardar
router.put('/usuario/desactivar/:id',  auth0, UsuariosController.hide); //Desactivar
router.put('/usuario/actualizar/:id',  auth0, UsuariosController.update);//Actualizar
router.get('/usuario/activos/', auth0,  UsuariosController.active);//Listar Activos
router.get('/usuario/inactivos/',  auth0, UsuariosController.inactive);//Listar Inactivos
router.get('/usuario/buscar/:id',  auth0, UsuariosController.search);//Buscar Uno
router.get('/usuario/listar/',  auth0, UsuariosController.list);//Listar

module.exports = router;