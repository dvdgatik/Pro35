'use strict'

const jwt = require('jsonwebtoken');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PeriodosSchema = Schema({
    nombre: String,  
    rango: String,  
    timestamp: Date,

    }, { versionKey: false });

module.exports = mongoose.model('Periodos', PeriodosSchema);
