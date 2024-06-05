"use strict";

const { QueryTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const recorrido_virtual = sequelize.define(
    "recorrido_virtual",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      fk_propiedad: { 
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "propiedades", 
          key: "id",
        }
      },
      enlace_recorrido: { 
        allowNull: false,
        type: DataTypes.STRING, 
      },
      descripcion: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {
      timestamps: false,
      tableName: "recorridos_virtuales",
    }
  );

  recorrido_virtual.getRecorridos_Virtuales = async (params) => {
    
    const query = ``;
    return await sequelize.query(query, {
      type: sequelize.QueryTypes.SELECT,
    });
  };

  recorrido_virtual.associate = function (models) {
    // recorrido_virtual.hasMany(models.recorridos_virtuales, {
    //   foreignKey: "recorridos_virtuales",
    //   as: "recorridos_virtuales",
    // });
  };

  return recorrido_virtual;
};

