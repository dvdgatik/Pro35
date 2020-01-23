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
    expPuestoActual: Number,
    email: String,
    expTotal: Number,
    usuario: String,
    passTemp: String,
    password: String,
    fstLogin: Boolean,
    timestamp: Date,
    perfil: String,
    }, { versionKey: false });

module.exports = mongoose.model('Empleado', EmpleadosSchema);
