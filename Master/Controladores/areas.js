'Use Strict'
var Area = require('../Modelos/areas');
var moment = require('moment');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
var momentz = require('moment-timezone');

var controller = { //Inicio Del Controlador 
    guardar: async(req, res) => {//guardar area  
     
            var params = req.body;
            var area = new Area();
            let fecha = new Date();
            let fechaMX = moment(fecha).tz("America/Mexico_City");
            let ar = await Area.findOne({ 'nombre': params.nombre});
            if (ar){ 
            return res.status(400).send('El Área Ya Existe....')}
            if (!ar){
                area.nombre = params.nombre;
                area.descripcion = params.descripcion;    
                area.estatus = true;   
                area.timestamp = fechaMX._d;    
                area.save((err, areaStored) => {
                if (err || !areaStored) {
                    console.log(err);
                    return res.status(404).send({});
                }
                res.status(200).send({
                    _id: area._id,
                    nombre: area.nombre,
                    descripcion: area.descripcion,
                })
                
              });
        }
     
    }, //fin de guardar area

    listarAA: async(req, res) => {//listar areas activas  
        var query = Area.find({ "estatus": true }, );
        var last = req.params.last;
        if (last || last != undefined) {
            query.limit(5);
        }
        query.sort('-_id').exec((err, areas) => {
            if (err) {
                return res.status(500).send({});
            }
            if (!areas) {
                return res.status(404).send({});
            }
            return res.status(200).send({ areas });
        });
    },//fin de listar areas activas

    listarAI: async(req, res) => {//listar areas inactivas
        var query = Area.find({ "estatus": false }, );
        var last = req.params.last;
        if (last || last != undefined) {
            query.limit(5);
        }
        query.sort('-_id').exec((err, areas) => {
            if (err) {
                return res.status(500).send({});
            }
            if (!areas) {
                return res.status(404).send({});
            }
            return res.status(200).send({ areas });
        });
    }, //fin de listar areas inactivas

    desactivar: async(req, res) => {//desactivar areas  
        var areaID = req.params.id;
        var params = req.body;
        Area.findOneAndUpdate({_id: areaID}, {estatus: false}, (err, areaHide) => {
            return res.status(200).send("Área Desactivada.");  
        });
    },

    buscar: async(req, res) => {//buscar area  
        var buscar = req.params.buscar;
        Area.find({
                "$or": [
                    { "nombre": { "$regex": buscar, "$options": "i" } }
                ]
            })
            .sort([
                ['date', 'descending']
            ])
            .exec((err, areaSearch) => {
                if (err) {
                    return res.status(500).send({});
                }
                if (!areaSearch || areaSearch.length <= 0) {
                    return res.status(404).send({});
                }
                return res.status(200).send({ areaSearch });
            });
    },












    
    importar: async(req, res) => {//importar varias centros a la vez
    },//fin de importar centros

};
module.exports = controller;