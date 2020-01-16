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

        listarT: async(req, res) => {
            Categoria.find({})
            .populate('idDominio')
            .exec((err, categorias) => {
                    if (err) {
                        console.log(err);
                        return res.status(500).send({});
                    }
                    if (!categorias || categorias.length <= 0) {}
                    return res.status(200).send(categorias)
                });
        },

    listar: async(req, res) => {
        let idCategoria = req.params.id;

        Categoria.findById({_id:idCategoria})
        .populate('idDominio')
        .exec((err, categorias) => {
                if (err) {
                    console.log(err);
                    return res.status(500).send({});
                }
                if (!categorias || categorias.length <= 0) {}
                return res.status(200).send(categorias)
            });
}











};
module.exports = controller;