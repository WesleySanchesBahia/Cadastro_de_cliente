import { Op } from "sequelize";
import { parseISO } from "date-fns";
import { object, string, ref } from 'yup';
import User from "../models/Users";


class UserController {
    async index(req,res){
        const {
            name,
            email,
            createdBefore,
            createdAfter,
            updatedBefore,
            updateAfter,
            sort,
        } = req.query;

        const page = req.query.page || 1;
        const limit = req.query.limit || 25;

        let where = {};
        let order = [];



        if(name) {
            where = {
                ...where,
                name: {
                    [Op.iLike]: name,
                }
            }
        };

        if(email) {
            where = {
                ...where,
                email: {
                    [Op.iLike]: email,
                }
            }
        };

        if(createdBefore) {
            where = {
                ...where,
                createdAt: {
                    [Op.gte]: parseISO(createdBefore),
                }
            }
        };

        if(createdAfter) {
            where = {
                ...where,
                createdAt: {
                    [Op.lte]: parseISO(createdAfter),
                }
            }
        };

        if(updatedBefore) {
            where = {
                ...where,
                updatedAt: {
                    [Op.gte]: parseISO(updatedBefore),
                }
            }
        };

        if(updateAfter) {
            where = {
                ...where,
                updatedAt: {
                    [Op.lte]: parseISO(updateAfter),
                }
            }
        };

        if(sort) {
            order = sort.split(",").map(item => item.split(":"));
        };

        const data = await User.findAll({
            where,
            order,
            limit,
            offset: limit * page - limit,
            attributes: {exclude: ["password", "password_hash"]}
        });

        if(!data){
            return res.status(404).json();
        };

        console.log({userId: req.userId})

        return res.json(data);
    }

    async show(req,res){
        const user = await User.findByPk(req.params.id);

        if(!user){
            return  res.status(404).json();
        }

        const {id, name, email, createdAt, updatedAt } = user;
        return res.json(
            {
                id, 
                name, 
                email, 
                createdAt, 
                updatedAt 
            }
        );

    }
    async create(req,res){
        const schema = object().shape(
            {
                name: string().required(),
                email: string().email().required(),
                password: string().required().min(8),
                passwordConfirmation: string().when("password", (password, field) =>
                    password ? field.required().oneOf([ref("password")]) : field
                )
            }
        ); 

        if(! await (schema.isValid(req.body))){
            return res.status(400).json({error: "Error on validade schama."})
        }

        const {id, name, email, createdAt, updatedAt } = await User.create(req.body)
    
        return res.status(201).json({
            id,
            name,
            email,
            createdAt,
            updatedAt

        });
    }

    async update(req,res){
        const schema = object().shape({
                name: string(),
                email: string().email(),
                oldPassword: string().min(8),
                password: string().min(8).when("oldPassword", {
                    is: (val) => {
                        return val ? true:false;
                        
                    },
                    then: (s) => s.required(),
                    otherwise: (s) => s,
                }),
                passwordConfirmation: string().when("password", {
                    is: (val) => {
                        return val ? true:false;
                    },
                    then: (s) => s.required(),
                    otherwise: (s) => s,
                })
        }); 

        if(!(await schema.isValid(req.body))){
            return res.status(400).json({error: "Error on validade schama."})
        }

        const user = await User.findByPk(req.params.id);

        if(!user){
            return res.status(404).json();
        }


        const { oldPassword } = req.body;

        //Verificando se a senha do banco é a mesma informada no oldPassord para a troca!
        if(oldPassword && !(await user.checkPassword(oldPassword))){
            return res.status(401).json({error: "User password not match."});
        }


        const {id, name, email, createdAt, updatedAt } = await user.update(req.body);
    
        return res.status(201).json({
            id,
            name,
            email,
            createdAt,
            updatedAt 

        });
        
    }

    async destroy(req,res){
        let user = await User.findByPk(req.params.id);

        if(!user){
            return res.status(404).json();
        }

        await user.destroy();
        
        return res.json();
    }
}

export default new UserController();