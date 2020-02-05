'use strict'

const mongoose = require('mongoose');
const app = require('./app');
const port = process.env.PORT || 3000;
mongoose.set('useFindAndModify', false);
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI,{useNewUrlParser:true , useFindAndModify: false, useCreateIndex: true, useUnifiedTopology: true })
.then(() => {
        console.log('Conexión Con MongoDB Establecida');
        app.listen(port, () => {
            console.log('Servidor corriendo en http://localhost:' + port);
        });
    });





