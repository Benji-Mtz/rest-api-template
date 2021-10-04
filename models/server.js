const express = require('express')
const cors = require('cors');
const router = require('../routes/usuarios');
const { dbConnection } = require('../database/config');


class Server {

    constructor() 
    {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        // Conectar a base de datos
        this.conectarDB();

        // Middlewares app.use
        this.middlewares();
        
        // Rutas de la aplicacion
        this.routes();

    }

    async conectarDB() {
        await dbConnection();
    }

    middlewares() {
        
        // CORS
        this.app.use( cors() );
        
        // Lectura y parseo del body
        this.app.use( express.json() );

        // directorio publico
        this.app.use( express.static('public'));

    }

    routes() {
        // Middleware tipo rutas
        // this.app.use(this.usuariosPath, require('../routes/usuarios') );
        this.app.use(this.usuariosPath, router);

    }

    listen() {
        this.app.listen( this.port, () => {
            console.log(`Servidor corriendo en http://localhost:${ this.port }`);
        })
    }

}

module.exports = Server;