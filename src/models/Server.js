import express from "express";
import cors from "cors";
import router from "../routes/users.js";

export default class Server{
    
    constructor(){
        this.app = express();
        this.port = process.env.PORT || 4500;
        this.usersPath = "/api/users"

        // Middlewares -> Funciones que añaden funcionalidad a nuestro web server
        this.middlewares();

        // Rutas
        this.routes();
    }

    middlewares(){
        // CORS
        this.app.use(cors());

        // Lectura y parseo del body
        this.app.use(express.json())

        //Directorio público
        this.app.use(express.static('src/public'));
        
    }

    routes(){
        this.app.use(this.usersPath, router);
    }

    listen(){
        this.app.listen(this.port, ()=> console.log(`Running on port ${ this.port }.`));
    }
}