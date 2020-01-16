'use strict'

const jwt = require('jsonwebtoken');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CategoriasSchema = Schema({
    nombre: String,
    timestamp: Date,
    idDominio: [{ type: Schema.ObjectId, ref: "Dominio" }],
    }, { versionKey: false });

module.exports = mongoose.model('Categorias', CategoriasSchema);
