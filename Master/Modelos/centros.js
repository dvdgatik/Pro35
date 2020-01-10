'use strict'

const jwt = require('jsonwebtoken');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CentrosSchema = Schema({
    nombre: String,
    calle: String,
    colonia: String,
    cp: Number,
    telefono: String,
    estatus: Boolean,
    timestamp: Date,
    idArea:  [{ type: Schema.ObjectId, ref: "Areas" }],
    idDepartamento:  [{ type: Schema.ObjectId, ref: "Departamentos" }],
    idEmpleados:  [{ type: Schema.ObjectId, ref: "Empleados" }],
    }, { versionKey: false });

module.exports = mongoose.model('Centro', CentrosSchema);
// articles --> guarda documentos de este tipo y con estructura dentro de la colección