'Use Strict'
var Departamento = require('../Modelos/departamentos');
var moment = require('moment');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
var momentz = require('moment-timezone');


// dispersion.idTransferencia.push(transferencia._id);


var controller = { //Inicio Del Controlador 
    guardar: async(req, res) => {//guardar area  
     
            var params = req.body;
            var departamento = new Departamento();
            let fecha = new Date();
            let fechaMX = moment(fecha).tz("America/Mexico_City");
            let depa = await Departamento.findOne({ 'nombre': params.nombre});
            if (depa){ 
            return res.status(400).send('El Departamento Ya Existe....')}
            if (!depa){
                departamento.nombre = params.nombre;

                departamento.estatus = true;   
                departamento.timestamp = fechaMX._d;    
                departamento.save((err, departamentoStored) => {
                if (err || !departamentoStored) {
                    console.log(err);
                    return res.status(404).send({});
                }
                res.status(200).send({
                    _id: departamento._id,
                    nombre: departamento.nombre,
                })
                
              });
        }
     
    }, //fin de guardar area

    listarDA: async(req, res) => {//listar areas activas  
        var query = Departamento.find({ "estatus": true }, );
        var last = req.params.last;
        if (last || last != undefined) {
            query.limit(5);
        }
        query.sort('-_id').exec((err, departamentos) => {
            if (err) {
                return res.status(500).send({});
            }
            if (!departamentos) {
                return res.status(404).send({});
            }
            return res.status(200).send({ departamentos });
        });
    },//fin de listar areas activas

    listarDI: async(req, res) => {//listar areas inactivas
        var query = Departamento.find({ "estatus": false }, );
        var last = req.params.last;
        if (last || last != undefined) {
            query.limit(5);
        }
        query.sort('-_id').exec((err, departamentos) => {
            if (err) {
                return res.status(500).send({});
            }
            if (!departamentos) {
                return res.status(404).send({});
            }
            return res.status(200).send({ departamentos });
        });
    }, //fin de listar areas inactivas

    desactivar: async(req, res) => {//desactivar areas  
        var depaID = req.params.id;
        var params = req.body;
        Departamento.findOneAndUpdate({_id: depaID}, {estatus: false}, (err, departamentoHide) => {
            return res.status(200).send("Departamento Desactivado.");  
        });
    },

    buscar: async(req, res) => {//buscar area  
        var buscar = req.params.buscar;
        Departamento.find({
                "$or": [
                    { "nombre": { "$regex": buscar, "$options": "i" } }
                ]
            })
            .sort([
                ['date', 'descending']
            ])
            .exec((err, departamentoSearch) => {
                if (err) {
                    return res.status(500).send({});
                }
                if (!departamentoSearch || departamentoSearch.length <= 0) {
                    return res.status(404).send({});
                }
                return res.status(200).send({ departamentoSearch });
            });
    },












    
    importar: async(req, res) => {//importar varias centros a la vez
    },//fin de importar centros

};
module.exports = controller;