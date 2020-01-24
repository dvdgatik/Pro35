'Use Strict'

var validator = require('validator');
var Empleado = require('../Modelos/empleados');
var moment = require('moment');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
var momentz = require('moment-timezone');
var controller = { //Inicio Del Controlador 
   
    guardar: async(req, res) => {
        const empleado = new Empleado();
        var params = req.body;
        let fechaMX = moment(fecha).tz("America/Mexico_City");
        let usuario = await Empleado.findOne({ 'usuario': params.usuario});
        if (usuario) return res.status(400).send('Usuario Ya Existe....')
        empleado.nombre = params.nombre;
        empleado.paterno = params.paterno;
        empleado.materno = params.materno;
        empleado.edad = 0;
        empleado.sexo = params.sexo;
        empleado.edoCivil = params.edoCivil;
        empleado.nivelEstudiosSF = params.nivelEstudiosSF;
        empleado.nivelEstudiosP = params.nivelEstudiosP;
        empleado.nivelEstudiosS = params.nivelEstudiosS;
        empleado.nivelEstudiosB = params.nivelEstudiosB;
        empleado.nivelEstudiosTS = params.nivelEstudiosTS;
        empleado.nivelEstudiosL = params.nivelEstudiosL;
        empleado.nivelEstudiosM = params.nivelEstudiosM;
        empleado.nivelEstudiosD = params.nivelEstudiosD;
        empleado.profesion = params.profesion;
        empleado.tipoPuesto = params.tipoPuesto;
        empleado.tipoContratacion = params.tipoContratacion;
        empleado.tipoPersonal = params.tipoPersonal;
        empleado.tipoJornada = params.tipoJornada;
        empleado.rolarTurnos = false;
        empleado.experiencia = 0;
        empleado.expPuestoActual = 0;
        empleado.email = params.email;
        empleado.expLaboral = 0;
        empleado.usuario = params.usuario;
        empleado.perfil = params.perfil;
        empleado.passTemp = params.passTemp;
        empleado.idCentro = params.idCentro;
        empleado.idArea = params.idArea;
        empleado.idPuesto = params.idPuesto;
        const password = params.passTemp;
        const hash = bcryptjs.hashSync(password,11);
        empleado.password = hash;
        empleado.fstLogin = true;
        empleado.timestamp=fechaMX;
        var fecha = new Date();     
        empleado.save((err, empleadoStored) => {
            if (err || !empleadoStored) {
                console.log(err);
                return res.status(404).send({});
            }
            res.status(200).send({
                _id: empleado._id,
                nombre: empleado.nombre,
                paterno: empleado.paterno,
                materno: empleado.materno,
                email: empleado.email,
                usuario: empleado.usuario,
                password: empleado.password
            })
            
          });
    }, 
        listar: async(req, res) => {
        var query = Empleado.find({});
        var last = req.params.last;
        if (last || last != undefined) {
            query.limit(5);
        }
        query.sort('-_id').exec((err, empleados) => {
            if (err) {
                return res.status(500).send({});
            }
            if (!empleados) {
                return res.status(404).send({});
            }
            return res.status(200).send({ empleados });
        });
       
    },

    contestar: async(req, res) => {
        const empleado = new Empleado();
        var params = req.body;
        var empleadoID = req.params.id;
        let fechaMX = moment(fecha).tz("America/Mexico_City");
        try {
        let usuario = await Empleado.findById(empleadoID);
        if (usuario){
        empleado.edad = params.edad;
        empleado.edoCivil = params.edoCivil;
        empleado.nivelEstudiosSF = params.nivelEstudiosSF;
        empleado.nivelEstudiosP = params.nivelEstudiosP;
        empleado.nivelEstudiosS = params.nivelEstudiosS;
        empleado.nivelEstudiosB = params.nivelEstudiosB;
        empleado.nivelEstudiosTS = params.nivelEstudiosTS;
        empleado.nivelEstudiosL = params.nivelEstudiosL;
        empleado.nivelEstudiosM = params.nivelEstudiosM;
        empleado.nivelEstudiosD = params.nivelEstudiosD;
        empleado.profesion = params.profesion;
        empleado.departamento = params.departamento;
        empleado.tipoPuesto = params.tipoPuesto;
        empleado.tipoContratacion = params.tipoContratacion;
        empleado.tipoPersonal = params.tipoPersonal;
        empleado.tipoJornada = params.tipoJornada;
        empleado.rolarTurnos = params.rolarTurnos;
        empleado.experiencia = params.experiencia;
        empleado.expPuestoActual = params.expPuestoActual;
        empleado.expLaboral = params.expLaboral;
        empleado.passTemp = params.passTemp;
        empleado.idCentro = params.idCentro;
        empleado.idArea = params.idArea;
        empleado.idPuesto = params.idPuesto;
        const password = params.passTemp;
        const hash = bcryptjs.hashSync(password,11);
        empleado.password = hash;
        console.log(hash);
        empleado.fstLogin = false;
        empleado.timestamp=fechaMX;
        var fecha = new Date();                




         Empleado.findOneAndUpdate({ _id: empleadoID }, {'password': empleado.password}, { new: true }, (err, empleadoFind) => {
                Empleado.findOneAndUpdate({ _id: empleadoID }, params, { new: true }, (err, empleadoFind) => {
                    if (err) {
                        console.log('NO ENCONTRADO');
                        return res.status(500).send({});
                    }
                    if (!empleadoFind || empleadoFind.length <= 0) {
                        return res.status(500).send({});
                    }

                    console.log('ENCONTRADO Y Actualizado');
                    console.log(empleadoFind);
                   return res.status(200).send({ empleadoFind });
                });
                
            });

        }
    } catch (err) {
        console.log('NO ENCONTRADO');
        return res.status(500).send({});
    }
 
    }



};//fin del controlador
module.exports = controller;