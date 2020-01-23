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
        encuestaC.idCategoria = params.idCategoria;
        encuestaC.idDominio = params.idDominio;
        encuestaC.idDimension = params.idDimension;
        encuestaC.timestamp=fechaMX;
        encuestaC.idRespuesta = params.idRespuesta;
        encuestaC.idPregunta = params.idPregunta;
        encuestaC.valorRespuesta = params.valorRespuesta;
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
        var nombre = req.params.nombre;
        EncuestaC.find({idEmpleado:nombre})
        .populate({path: 'idEmpleado'}) 
        .populate({path: 'idPeriodo'}) 
        .populate({path: 'idCategoria'}) 
        .populate({path: 'idDominio'}) 
        .populate({path: 'idDimension'}) 
        .populate({path: 'idPregunta'}) 
        .populate({path: 'idRespuesta'}) 
            .sort([
                ['date', 'descending']
            ])
            .exec((err, registros) => {
                if (err) {
                    return res.status(500).send({err});
                }
                if (!registros || registros.length <= 0) {}
    
                return res.status(200).send(registros)
            });
    }
    






};//fin del controlador
module.exports = controller;