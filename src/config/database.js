require('dotenv').config();

module.exports = {
    dialect: process.env.DB_DIALECT,
    host:process.env.DB_HOST,
    username:process.env.DB_USER,
    password:process.env.DB_PWD,
    database:process.env.DB_NAME,
    define:{
        timestamp:true, //Cria duas colunas:  createAt e updateAt
        underscored:true, // Transforma camelcase em underscore => novaData = nova_data
        underscoredAll:true,
    }

}