'use strict'

const jwt = require('jsonwebtoken');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EmpleadosSchema = Schema({
    nombre: String,
    paterno: String,
    materno: String,
    sexo: String,
    edad: Number,
    edoCivil: String,
    nivelEstudiosSF: String,
    nivelEstudiosP: String,
    nivelEstudiosS: String,
    nivelEstudiosB: String,
    nivelEstudiosTS: String,
    nivelEstudiosL: String,
    nivelEstudiosM: String,
    nivelEstudiosD: String,
    profesion: String,
    departamento: String,
    tipoPuesto: String,
    tipoContratacion: String,
    tipoPersonal: String,
    tipoJornada: String,
    rolarTurnos: Boolean,
    experiencia: Number,
    expPuestoActual: Number,
    email: String,
    perfil: String,
    expLaboral: Number,
    usuario: String,
    passTemp: String,
    password: String,
    fstLogin: Boolean,
    timestamp: Date,
    perfil: String,
    idCentro:  [{ type: Schema.ObjectId, ref: "Centros" }],
    idArea:  [{ type: Schema.ObjectId, ref: "Areas" }],
    idPuesto:  [{ type: Schema.ObjectId, ref: "Puestos" }],
    }, { versionKey: false });

module.exports = mongoose.model('Empleado', EmpleadosSchema);
