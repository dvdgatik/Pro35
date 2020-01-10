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
    idDepartamento: [{ type: Schema.ObjectId, ref: "Departamentos" }],
    idArea: [{ type: Schema.ObjectId, ref: "Areas" }],
    idEmpleado: [{ type: Schema.ObjectId, ref: "Empleados" }],
    }, { versionKey: false });

module.exports = mongoose.model('Empresa', EmpresasSchema);
// articles --> guarda documentos de este tipo y con estructura dentro de la colección