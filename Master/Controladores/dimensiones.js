'Use Strict'
var Dimension = require('../Modelos/dimensiones');
var moment = require('moment');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
var momentz = require('moment-timezone');

var controller = { //Inicio Del Controlador 
    guardar: async(req, res) => {
        const dimension = new Dimension();
        var params = req.body;
        let fechaMX = moment(fecha).tz("America/Mexico_City");
        dimension.nombre = params.nombre;
        dimension.idGuia = params.idGuia;
        dimension.idSeccion = params.idSeccion;
        console.log(params);
        console.log(params.preguntas);
        //dimension.preguntas.push(params.preguntas);
        dimension.preguntas = params.preguntas;
        var fecha = new Date();     
        dimension.timestamp=fechaMX;
        dimension.save((err, dimensionStored) => {
            if (err || !dimensionStored) {
                console.log(err);
                return res.status(404).send({});
            }
            res.status(200).send({...dimensionStored._doc})
            
          });
}, 

    listar: async(req, res) => {
}











};
module.exports = controller;