'use strict'

const jwt = require('jsonwebtoken');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RespuestasSchema = Schema({
    idGuia: String,
    idSeccion: String,
    idEmpleado: [{ type: Schema.ObjectId, ref: "Empleados" }],
    numPregunta: String,
    timestamp: Date,
    siempre: Int32Array,
    casiSiempre: Int32Array,
    algunasVeces: Int32Array,
    casiNunca: Int32Array,
    nunca: Int32Array,
    siNo: Boolean,
    }, { versionKey: false });

module.exports = mongoose.model('Respuesta', RespuestasSchema);