'use strict'

const jwt = require('jsonwebtoken');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PeriodosSchema = Schema({
    rango: String,  
    timestamp: Date,

    }, { versionKey: false });

module.exports = mongoose.model('Periodos', PeriodosSchema);
