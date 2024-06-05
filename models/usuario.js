"use strict";

const { QueryTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const usuario = sequelize.define(
    "usuario",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      nombre: {
        allowNull: false,
        type: DataTypes.STRING(50),
      },
      correo: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      password: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      tipo: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      informacion_contacto: {
        type: DataTypes.JSONB, 
      }
    },
    {
      timestamps: false,
      tableName: "usuarios",
    }
  );

  usuario.getUsuarios = async (params) => {
    const query = ``;
    return await sequelize.query(query, {
      type: sequelize.QueryTypes.SELECT,
    });
  };

  usuario.associate = function (models) {
    // usuario.hasMany(models.usuarios, {
    //   foreignKey: "fk_usuario",
    //   as: "usuarios",
    // });
  };

  return usuario;
};
