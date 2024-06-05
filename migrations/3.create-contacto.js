'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('contactos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fk_usuario_emisor: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "usuarios"
          },
          key: "id"
        }
      },
      fk_usuario_receptor: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "usuarios"
          },
          key: "id"
        }
      },
      mensajes: {
        type: Sequelize.TEXT
      },
      fecha: {
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('contactos');
  }
};