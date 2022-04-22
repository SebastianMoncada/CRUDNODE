require('./config/conexion');

const express = require('express');
const port = (process.env.port || 3000);

//express
const app = express();

//admitir
app.use(express.json());

//config
app.set('port', port);

//rutas

app.use('/api',require('./rutas'))

//iniciar Express
app.listen(app.get('port'), (error) => {
    if (error) {
        console.log('No se pudo iniciar Servidor'+ error);
    }
    else {
        console.log('Servidor iniciado en el puerto '+ port);
    }
});