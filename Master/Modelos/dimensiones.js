'use strict'

const jwt = require('jsonwebtoken');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DimensionesSchema = Schema({
    nombre: String,
    timestamp: Date,
    idGuia: String,
    idSeccion: String,
    preguntas: [String],
    }, { versionKey: false });

module.exports = mongoose.model('Dimensiones', DimensionesSchema);
