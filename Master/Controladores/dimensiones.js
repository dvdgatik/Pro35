'Use Strict'
var Dimension = require('../Modelos/dimensiones');
var Pregunta = require('../Modelos/preguntas');
var moment = require('moment');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
var momentz = require('moment-timezone');

var controller = { //Inicio Del Controlador 
    guardar: async(req, res) => {
        const dimension = new Dimension();
        var params = req.body;
        let fechaMX = moment(fecha).tz("America/Mexico_City");
        dimension.numGuia = params.numGuia;
        dimension.nombreDimension = params.nombreDimension;
        dimension.idPreguntas = params.idPreguntas;
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
        
        nombre = req.params.nombre;
        var query = Dimension.find({nombreDimension:nombre}, );
        var last = req.params.last;
        if (last || last != undefined) {
            query.limit(5);
        }
        query.sort('-_id').exec((err, preguntas) => {
            if (err) {
                return res.status(500).send({});
            }
            if (!preguntas) {
                return res.status(404).send({});
            }
            return res.status(200).send({ preguntas });
        });
},

listar2: (req, res) => {
    var nombre = req.params.nombre;
    Dimension.find({nombreDimension:nombre})
    .populate('idPreguntas')
        .sort([
            ['date', 'descending']
        ])
        .exec((err, registros) => {
            if (err) {
                console.log(err);
                return res.status(500).send({});
            }
            if (!registros || registros.length <= 0) {}

            return res.status(200).send(registros)
        });
},











};
module.exports = controller;