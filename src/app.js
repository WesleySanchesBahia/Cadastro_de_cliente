import express from"express";
import routes  from "./routes";
import Database from "./database";

// import authMiddlewares from "./app/controllers/middlewares/auth";

class App { 
    constructor(){
        this.server = express();
        this.middlewares();
        this.routes();
        new Database();
    }

    middlewares(){
        //middlewares para poder trabalhar com json no express;
        this.server.use(express.json());
        this.server.use(express.urlencoded({extended: false}))
        // this.server.use(authMiddlewares);
    }

    routes(){
        this.server.use(routes);
    }
}

export default  new App().server;