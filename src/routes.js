import { Router }  from"express";

import multer from "multer";
import multerConfig from "./config/multer"

import customers  from'./app/controllers/CustomersController';
import contacts  from'./app/controllers/ContactsController';
import users  from'./app/controllers/UsersController';
import sessions from './app/controllers/SessionsController';

import files from "./app/controllers/FilesController";
import auth from './app/controllers/middlewares/auth'

const routes = new Router();
const upload = multer(multerConfig);
//Sessions /
routes.post("/sessions", sessions.create);


//Controla o acesso as rotas
routes.use(auth);

//Customers
routes.get('/customers', customers.index);
routes.get('/customers/:id', customers.show);
routes.post('/customers', customers.create);
routes.put('/customers/:id', customers.update);
routes.delete('/customers/:id', customers.destroy);

//Contacts 
routes.get('/customers/:customerId/contacts', contacts.index);
routes.get('/customers/:customerId/contacts/:id', contacts.show);
routes.post('/customers/:cutomerId/contacts', contacts.create);
routes.put('/customers/:customerId/contacts/:id', contacts.update);
routes.delete('/customers/:customerId/contacts/:id', contacts.destroy);


//Users
routes.get('/users', users.index);
routes.get('/users/:id', users.show);
routes.post('/users', users.create);
routes.put('/users/:id', users.update);
routes.delete('/users/:id', users.destroy);


// Files

routes.post("/file", upload.single("file"), files.create)


export default  routes;