'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('recorridos_virtuales', {
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
      enlace_recorrido: {
        type: Sequelize.STRING
      },
      descripcion: {
        type: Sequelize.TEXT
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('recorridos_virtuales');
  }
};