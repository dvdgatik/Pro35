'use strict'

const jwt = require('jsonwebtoken');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EmpleadosSchema = Schema({
    nombre: String,
    paterno: String,
    materno: String,
    sexo: String,
    edoCivil: String,
    nivelEstudios: String,
    profesion: String,
    tipoPuesto: String,
    tipoContratacion: String,
    tipoPersonal: String,
    tipoJornada: String,
    rolarTurnos: Boolean,
    experienciaPuestoActual: Int32Array,
    email: String,
    experienciaTotal: Int32Array,
    usuario: String,
    contraseña: String,
    fstLogin: Boolean,
    }, { versionKey: false });

module.exports = mongoose.model('Empleado', EmpleadosSchema);
// articles --> guarda documentos de este tipo y con estructura dentro de la colección