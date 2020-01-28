'use strict'
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const mongoose = require('mongoose');
const app = require('./app');
const port = process.env.PORT || 4000;
mongoose.set('useFindAndModify', false);
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://srendon:20141530@cluster0-hjkav.azure.mongodb.net/Pro35?retryWrites=true&w=majority',{useNewUrlParser:true , useFindAndModify: false, useCreateIndex: true, useUnifiedTopology: true })
.then(() => {
        console.log('Conexión Con Mongo Atlas Establecida');
        console.log(__dirname);
        app.listen(port, () => {
            console.log('Servidor corriendo en http://localhost:' + port);
        });
    });

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
//Routes
//Static Files
//app.use(express.static(path.join(__dirname, 'client/public')));
console.log(path.join(__dirname,'client/public'));




