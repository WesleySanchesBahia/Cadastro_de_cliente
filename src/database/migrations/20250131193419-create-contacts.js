module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('contacts', {
      id:{
        type: Sequelize.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true,
      },
      name:{
        type: Sequelize.STRING,
        allowNull:false,
      },
      email:{
        type: Sequelize.STRING,
        allowNull:false,
        unique:true
      },
    /*   status:{
        type: Sequelize.ENUM('ACTIVATE', 'ARCHIVED'),
        allowNull:false,
      }, */
      created_at:{
        type: Sequelize.DATE,
        allowNull:false
      },
      updated_at:{
        type:Sequelize.DATE,
        allowNull:false
      },
      customer_id:{
        type: Sequelize.INTEGER,
        allowNull:false,
        references: {model: 'customers', key:'id'},
        onUpdate:'CASCADE',
        onDelete:'CASCADE'
      }
    })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('contacts');

  }
};
