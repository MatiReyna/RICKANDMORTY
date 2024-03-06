const express = require('express');
const server = express();
const morgan = require('morgan');
const router = require('./routes/index');

server.use(express.json());  // Middleware para análisis de cuerpo de solicitudes.
server.use(morgan('dev'));  // Middleware para registro de solicitudes.

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
        'Access-Control-Allow-Methods',
        'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
});

server.use('/rickandmorty', router);  // Rutas principales.

server.use((err, req, res, next) => {  // Manejo de errores.
    console.error(err.stack);
    res.status(500).send('Algo salió mal!');
});

module.exports = server;