
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.addColumn('contacts', "status", {
      type: Sequelize.ENUM("ACTIVATE", "ARCHIVED"),
      allowNull:false,
      defaultValue:"ACTIVATE",

  });

  },

  down: (queryInterface) => {
   return queryInterface.sequelize.transaction(async transaction => {
      await queryInterface.removeColumn("contacts", "status", { transaction });
      await queryInterface.sequelize.query("DROP TYPE enum_contact_status", { 
        transaction ,
      });
   }); 
  }
};
