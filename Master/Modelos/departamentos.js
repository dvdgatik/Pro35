'use strict'

const jwt = require('jsonwebtoken');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DepartamentosSchema = Schema({
    nombre: String,
    estatus: Boolean,
    timestamp: Date,
    idEmpleados:  [{ type: Schema.ObjectId, ref: "Empleados" }],
    }, { versionKey: false });

module.exports = mongoose.model('Departamento', DepartamentosSchema);
// articles --> guarda documentos de este tipo y con estructura dentro de la colección