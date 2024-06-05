"use strict";

const { QueryTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const contacto = sequelize.define(
    "contacto",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      fk_usuario_emisor: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "usuarios",
          key: "id",
        }
      },
      fk_usuario_receptor: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "usuarios",
          key: "id",
        }
      },
      mensajes: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      fecha: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      timestamps: false,
      tableName: "contactos",
    }
  );

  contacto.getContactos = async (params) => {
    const query = `SELECT * FROM contactos`;
    return await sequelize.query(query, {
      type: QueryTypes.SELECT,
    });
  };

  contacto.associate = function (models) {
    // contacto.hasMany(models.contacto, {
    //   foreignKey: "fk_contacto",
    //   as: "contactos",
    // });
  };

  return contacto;
};




