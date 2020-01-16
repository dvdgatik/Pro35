'Use Strict'
var Categoria = require('../Modelos/categorias');
var moment = require('moment');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
var momentz = require('moment-timezone');

var controller = { //Inicio Del Controlador 
    guardar: async(req, res) => {
        const categoria = new Categoria();
        var params = req.body;
        let fechaMX = moment(fecha).tz("America/Mexico_City");
        categoria.nombre = params.nombre;
        categoria.idDominio = params.idDominio;
        var fecha = new Date();     
        categoria.timestamp=fechaMX;
        categoria.save((err, categoriaStored) => {
            if (err || !categoriaStored) {
                console.log(err);
                return res.status(404).send({});
            }
            res.status(200).send({...categoriaStored._doc})
            
          });
}, 

    listar: async(req, res) => {
        let idDominio = req.params.idDominio;
        let idDimension = req.params.idDimension;

        var query = Categoria.find({}, );
        var last = req.params.last;
        if (last || last != undefined) {
            query.limit(5);
        }
        query.sort('-_id').exec((err, categorias) => {
            if (err) {
                return res.status(500).send({});
            }
            if (!categorias) {
                return res.status(404).send({});
            }
            return res.status(200).send({ categorias });
        });
}











};
module.exports = controller;