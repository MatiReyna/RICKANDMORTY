const express = require('express');
const server = express();
const morgan = require('morgan');
const cors = require('cors');
const router = require('./routes/index');

server.use(express.json());  // Middleware para análisis de cuerpo de solicitudes.
server.use(morgan('dev'));  // Middleware para registro de solicitudes.

const corsOptions = {
    origin: '*',
    credentials: true,
    method: 'GET, POST, PUT, DELETE',
    allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept',
};

server.use(cors(corsOptions));  // Middleware para permitir solicitudes de origen.

server.use('/rickandmorty', router);  // Rutas principales.

server.use((err, req, res, next) => {  // Manejo de errores.
    console.error(err.stack);
    res.status(err.status || 500).json({
        success: false,
        error: {
            message: err.message || 'Error interno del servidor'
        }
    });
});

module.exports = server;