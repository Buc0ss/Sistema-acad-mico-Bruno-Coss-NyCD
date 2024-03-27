"use strict";

const { QueryTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Seccion = sequelize.define(
    "seccion",
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
      descripcion: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {
      timestamps: false,
      tableName: "secciones",
    }
  );

  Seccion.getSecciones = async (params) => {
    const query = ``; // Aquí deberías definir tu consulta para obtener las secciones
    return await sequelize.query(query, {
      type: QueryTypes.SELECT,
    });
  };

  Seccion.associate = function (models) {
    // Aquí puedes definir las asociaciones necesarias con otros modelos
    // Por ejemplo, si Seccion tiene una relación con otro modelo, puedes definirla aquí
  };

  return Seccion;
};


