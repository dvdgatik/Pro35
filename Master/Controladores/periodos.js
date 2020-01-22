'Use Strict'
var Periodo = require('../Modelos/periodos');
var moment = require('moment');
var momentz = require('moment-timezone');

var controller = { //Inicio Del Controlador 

    guardar: async(req, res) => {
        const periodo = new Periodo();
        var params = req.body;
        let fechaMX = moment(fecha).tz("America/Mexico_City");
        periodo.rango = params.rango;
        var fecha = new Date();     
        periodo.timestamp=fechaMX;
        periodo.save((err, preguntaStored) => {
            if (err || !preguntaStored) {
                console.log(err);
                return res.status(404).send({});
            }
            res.status(200).send({...preguntaStored._doc})
            
          });
}, 
    listar: async(req, res) => {
       var query = Periodo.find({});
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
}











};
module.exports = controller;