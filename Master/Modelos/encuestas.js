'use strict'

const jwt = require('jsonwebtoken');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EncuestasSchema = Schema({
    idGuia: String,
    idSeccion: String,
    }, { versionKey: false });

module.exports = mongoose.model('Encuesta', EncuestasSchema);
