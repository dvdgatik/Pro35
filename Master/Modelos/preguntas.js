'use strict'

const jwt = require('jsonwebtoken');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PreguntasSchema = Schema({
    nombrePregunta: String,  
    timestamp: Date,
    numeroPregunta: String,
    idRespuestas:  [{ type: Schema.ObjectId, ref: "Respuestas" }],

    }, { versionKey: false });

module.exports = mongoose.model('Preguntas', PreguntasSchema);
