'Use Strict'
var Encuesta = require('../Modelos/encuestas');
var moment = require('moment');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
var momentz = require('moment-timezone');

var controller = { //Inicio Del Controlador 

    listar: async(req, res) => {
        let idGuia = req.params.idGuia;
        let idSeccion = req.params.idSeccion;

        var query = Encuesta.find({idGuia:idGuia, idSeccion:idSeccion}, );
        var last = req.params.last;
        if (last || last != undefined) {
            query.limit(5);
        }
        query.sort('-_id').exec((err, encuestas) => {
            if (err) {
                return res.status(500).send({});
            }
            if (!encuestas) {
                return res.status(404).send({});
            }
            return res.status(200).send({ encuestas });
        });
}











};
module.exports = controller;