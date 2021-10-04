// Importaciones de terceros
require('dotenv').config();

// Importaciones propias
const Server = require('./models/server');

// Instancia de la clase Server
const server = new Server();

server.listen();