'Use Strict'

var validator = require('validator');
var EncuestaC = require('../Modelos/encuestasContestadas');
var moment = require('moment');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
var momentz = require('moment-timezone');

var controller = { //Inicio Del Controlador 
   
    guardar: async(req, res) => {
        const encuestaC = new EncuestaC();
        var params = req.body;
        let fechaMX = moment(fecha).tz("America/Mexico_City");
        encuestaC.idGuia = params.idGuia;
        encuestaC.idEmpleado = params.idEmpleado;
        encuestaC.idPeriodo = params.idPeriodo;
        encuestaC.timestamp=fechaMX;
        encuestaC.respuesta = params.respuesta;
        var fecha = new Date();     
        encuestaC.save((err, respuestaStored) => {
            if (err || !respuestaStored) {
                console.log(err);
                return res.status(404).send({});
            }
            res.status(200).send({...respuestaStored._doc})
            
          });
}, 
    listar: async(req, res) => {
       
}







};//fin del controlador
module.exports = controller;