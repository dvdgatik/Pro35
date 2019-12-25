'use strict'

const mongoose = require('mongoose');
const app = require('./app');
const port = process.env.PORT || 3000;

mongoose.set('useFindAndModify', false);
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://arendon:20141530@ahurus-lw53s.azure.mongodb.net/pro35_master?retryWrites=true&w=majority',{useNewUrlParser:true , useFindAndModify: false, useCreateIndex: true, useUnifiedTopology: true })
.then(() => {
        console.log('Conexión Con Mongo Atlas Establecida');
        app.listen(port, () => {
            console.log('Servidor corriendo en http://localhost:' + port);
        });
    });





