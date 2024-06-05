'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('usuarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING(50)
      },
      correo: {
        type: Sequelize.TEXT
      },
      password: {
        type: Sequelize.TEXT
      },
      tipo: {
        type: Sequelize.INTEGER
      },
      informacion_contacto: {
        type: Sequelize.JSONB
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('usuarios');
  }
};