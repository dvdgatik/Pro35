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
        console.log(params);


        let fechaMX = moment(fecha).tz("America/Mexico_City");
        encuestaC.idGuia = params.idGuia;
        encuestaC.idEmpleado = params.idEmpleado;
        encuestaC.idPeriodo = params.idPeriodo;     
        encuestaC.valorRespuesta = params.valorRespuesta; 
        encuestaC.nombreRespuesta = params.nombreRespuesta;
        encuestaC.timestamp=fechaMX;
        var fecha = new Date();  
        for (var i=0; i< params.respuestasC.length; i++){    
            var dataT = params.respuestasC;   
          }
          encuestaC.respuestasc = dataT;
            await encuestaC.save((err, respuestaStored) => {
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
    },
    
    listarT: async(req, res) => { 
        var nombre = req.params.nombre;
        EncuestaC.find({})
        .populate({path: 'idEmpleado', model: 'Empleado'}) 
        .populate({path: 'idPeriodo', model: 'Periodos'}) 
        .populate({ path: 'respuestasC.idCategoria', model: 'Categorias' })
        .populate({ path: 'respuestasC.idDominio', model: 'Dominios' })
        .populate({ path: 'respuestasC.idDimension', model: 'Dimensiones' })
        .populate({ path: 'respuestasC.idPregunta', model: 'Preguntas' })
        .populate({ path: 'respuestasC.respuesta',  model: 'Respuestas' })

        .sort([['date', 'descending']])                   
        .exec((err, registros) => {            
                if (err) {
                    return res.status(500).send({err});
                }
                if (!registros || registros.length <= 0) {}
                
                
                const valores = registros[0].respuestasC.map(respuesta =>{
                    
                    return respuesta.valorRespuesta;
                })
                const nombres = registros[0].respuestasC.map(nombre =>{
                    
                    return nombre.nombreRespuesta;
                })  

                console.log(valores);
                console.log(nombres);
                return res.status(200).send(registros)
            });
            
    }



    






};//fin del controlador
module.exports = controller;