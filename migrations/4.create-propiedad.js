'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('propiedades', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fk_usuario: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "usuarios"
          },
          key: "id"
        }
      },
      ubicacion: {
        type: Sequelize.STRING
      },
      precio: {
        type: Sequelize.FLOAT
      },
      nro_habitaciones: {
        type: Sequelize.INTEGER
      },
      descripcion: {
        type: Sequelize.TEXT
      },
      estado: {
        type: Sequelize.STRING
      },
      fk_categoria: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "categorias"
          },
          key: "id"
        }
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('propiedades');
  }
};