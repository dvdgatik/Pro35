'Use Strict'
var Dominio = require('../Modelos/dominios');
var moment = require('moment');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
var momentz = require('moment-timezone');

var controller = { //Inicio Del Controlador 
    guardar: async(req, res) => {        
        const dominio = new Dominio();
        var params = req.body;
        let fechaMX = moment(fecha).tz("America/Mexico_City");
        dominio.nombre = params.nombre;
        dominio.idDimension = params.idDimension;
        var fecha = new Date();     
        dominio.timestamp=fechaMX;
        dominio.save((err, dominioStored) => {
            if (err || !dominioStored) {
                console.log(err);
                return res.status(404).send({});
            }
            res.status(200).send({...dominioStored._doc})
            
          });
}, 

    listar: async(req, res) => {
}











};
module.exports = controller;