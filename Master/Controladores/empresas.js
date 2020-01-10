'Use Strict'

var validator = require('validator');
var Empresa = require('../Modelos/empresas');
var Centro = require('../Modelos/centros');
var Area = require('../Modelos/areas');
var moment = require('moment');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
var momentz = require('moment-timezone');

var controller = { //Inicio Del Controlador 
    guardar: async(req, res) => {//guardar empresa  
        try{
            const cent = new Centro();
            const emp = new Empresa();
            const area = new Area();
            var params = req.body;
            let fecha = new Date();
            let fechaMX = moment(fecha).tz("America/Mexico_City");
            let empresa = await Empresa.findOne({ 'rfc': params.rfc});
            if (empresa){ 
            return res.status(400).send('La Empresa Ya Existe....')}
            if (!empresa){
            var vrazon = !validator.isEmpty(emp.razonSocial = params.razonSocial);
            var valias = !validator.isEmpty(emp.alias = params.alias);
            var vcalle = !validator.isEmpty(emp.calle = params.calle);
            var vcol = !validator.isEmpty(emp.colonia = params.colonia);
            var vcp = !validator.isEmpty(emp.cp = params.cp);     
            var vrfc = !validator.isEmpty(emp.rfc = params.rfc);     
            emp.estatus = true;   
            emp.timestamp = fechaMX._d;    

            //DATOS DEL CENTRO DE TRABAJO
            let centro = await Centro.findOne({ 'nombre': params.centroNombre});
            if (centro){ 
            return res.status(400).send('El Centro Ya Existe....')}
            if (!centro){
            var vnombre_centro = !validator.isEmpty(cent.nombre = params.centroNombre);
            var vtel_centro = !validator.isEmpty(cent.telefono = params.centroTelefono);
            var vcalle_centro = !validator.isEmpty(cent.calle = params.centroCalle);
            var vcol_centro = !validator.isEmpty(cent.colonia = params.centroColonia);
            var vcp_centro = !validator.isEmpty(cent.cp = params.centroCp);       
            cent.estatus = true;   
            cent.timestamp = fechaMX._d;    
            
            //DATOS DEL AREA
            var vnombre_area = !validator.isEmpty(area.nombre = params.areaNombre);
            var vdescripcion_area = !validator.isEmpty(area.descripcion = params.areaDescripcion);    
            area.estatus = true;   
            area.timestamp = fechaMX._d;    
  
            emp.idCentro.push(cent._id);
            emp.idArea.push(area._id);
            
            
        if(vrazon && vrazon && valias && vcalle && vcol && vcp && vrfc && vnombre_centro && vtel_centro && vcalle_centro && vcol_centro && vcp_centro){
            emp.save((err, empresaStored) => {
            if (err || !empresaStored) {
            } 
            cent.save((err, centroStored) => {
            if (err || !centroStored) {
            }})
            if(vnombre_area && vdescripcion_area){
            area.save((err, areaStored) => {
            if (err || !areaStored) {
            }})
            }
            return res.status(200).send({});
         })
        } 
            }
    }
            }catch(err){
                console.log(err);
                return res.status(500).send({
                    status: 'error',
                    message: 'Faltan datos por enviar !!!'
                });
}
 
 }, //fin de guardar empresa

    listarEA: async(req, res) => {//listar empresas activas  
        var query = Empresa.find({ "estatus": true }, );
        var last = req.params.last;
        if (last || last != undefined) {
            query.limit(5);
        }
        query.sort('-_id').exec((err, empresas) => {
            if (err) {
                return res.status(500).send({});
            }
            if (!empresas) {
                return res.status(404).send({});
            }
            return res.status(200).send({ empresas });
        });
    },//fin de listar empresas activas

    listarEI: async(req, res) => {//listar empresas inactivas
        var query = Empresa.find({ "estatus": false }, );
        var last = req.params.last;
        if (last || last != undefined) {
            query.limit(5);
        }
        query.sort('-_id').exec((err, empresas) => {
            if (err) {
                return res.status(500).send({});
            }
            if (!empresas) {
                return res.status(404).send({});
            }
            return res.status(200).send({ empresas });
        });
    }, //fin de listar empresas inactivas

    desactivar: async(req, res) => {//Metodo Guardar  
        var empID = req.params.id;
        var params = req.body;
        Empresa.findOneAndUpdate({_id: empID}, {estatus: false}, (err, empresaHide) => {
            return res.status(200).send("Empresa Desactivada.");  
        });
    },

    buscar: async(req, res) => {//Metodo Guardar  
        var buscar = req.params.buscar;
        Empresa.find({
                "$or": [
                    { "alias": { "$regex": buscar, "$options": "i" } },
                    { "rfc": { "$regex": buscar, "$options": "i" } },
                    { "razonSocial": { "$regex": buscar, "$options": "i" } }
                ]
            })
            .sort([
                ['date', 'descending']
            ])
            .exec((err, empresaSearch) => {
                if (err) {
                    return res.status(500).send({});
                }
                if (!empresaSearch || empresaSearch.length <= 0) {
                    return res.status(404).send({});
                }
                return res.status(200).send({ empresaSearch });
            });
    },












    
    importar: async(req, res) => {//importar varias empresas a la vez
    },//fin de importar empresas

};
module.exports = controller;