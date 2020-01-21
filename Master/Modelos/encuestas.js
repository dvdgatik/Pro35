'use strict'

const jwt = require('jsonwebtoken');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EncuestasSchema = Schema({
    nombreEncuesta: String,
    timestamp: Date,
    idCategorias:  [{ type: Schema.ObjectId, ref: "Categorias" }],
    idDominios:  [{ type: Schema.ObjectId, ref: "Dominios" }],
    idDimensiones:  [{ type: Schema.ObjectId, ref: "Dimensiones" }],
    idPreguntas:  [{ type: Schema.ObjectId, ref: "Preguntas" }],

    }, { versionKey: false });

module.exports = mongoose.model('Encuesta', EncuestasSchema);
