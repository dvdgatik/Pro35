'use strict'
var express = require('express');

var EncuestasController = require('../Controladores/encuestas');
var auth0 = require('../Middleware/auth0');
var router = express.Router();

// Rutas útiles
router.get('/',   Home.View); 
module.exports = router;
