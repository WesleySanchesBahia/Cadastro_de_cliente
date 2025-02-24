
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.addColumn('users', "file_id", { // Adiciona na tela user a coluna "file_id"
      type: Sequelize.INTEGER, //Define que o tipo do campo é INTEGER
      references:{model:"files", key: "id"}, // Chave estrangeira referenciando a tabela "files"
      onUpdate:"CASCADE", // Se o ID na tabela "files" for alterado, o "file_id" na tabela "users" será atualizado
      onDelete:"SET NULL",  // Se o arquivo for deletado, "file_id" será definido como NULL em "users"
  });

  },

  // Caso seja preciso 
  down: (queryInterface) => {
      return queryInterface.removeColumn("users", "file_id"); 
  }
};
