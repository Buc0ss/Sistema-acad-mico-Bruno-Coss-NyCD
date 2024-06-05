'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('imagenes_videos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fk_propiedad: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "propiedades"
          },
          key: "id"
        }
      },
      tipo: {
        type: Sequelize.STRING,
      },
      URL: {
        type: Sequelize.TEXT
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('imagenes_videos');
  }
};