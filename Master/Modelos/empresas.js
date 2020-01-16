'use strict'

const jwt = require('jsonwebtoken');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EmpresasSchema = Schema({
    razonSocial: String,
    alias: String,
    calle: String,
    colonia: String,
    cp: Number,
    rfc: String,
    estatus: Boolean,
    timestamp: Date,
    idCentro: [{ type: Schema.ObjectId, ref: "Centros" }],
    }, { versionKey: false });

module.exports = mongoose.model('Empresa', EmpresasSchema);
