import  Sequelize from "sequelize";

import Customer from '../app/models/Customers';
import Contact from '../app/models/Contact';
import User from '../app/models/Users';
import File from '../app/models/File';

import config from '../config/database';

const models = [Customer, Contact, User, File];

class Database {

    constructor(){
        this.connection = new Sequelize(config);
        this.init();
        this.associates();
    }

    init(){
        models.forEach(model => model.init(this.connection));
    }

    associates(){
        models.forEach(model => {
            if(model.associate){
                model.associate(this.connection.models)
            }
        });
    }


}


export default Database;