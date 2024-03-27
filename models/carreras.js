"use strict";

const { QueryTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Materia = sequelize.define(
    "Materia",
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
      fk_profesor: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "Profesores",
          key: "id",
        },
      },
      fk_carrera: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "Carreras",
          key: "id",
        }
      },
    },
    {
      timestamps: false,
      tableName: "materias",
    }
  );

  Materia.getProfesoresByCarrera = async (fk_carrera) => {
    const query = `
      SELECT DISTINCT P.*
      FROM Profesores P
      INNER JOIN Materias M ON M.fk_profesor = P.id
      WHERE M.fk_carrera = :fk_carrera;
    `;
    return await sequelize.query(query, {
      replacements: { fk_carrera },
      type: QueryTypes.SELECT,
    });
  };

  Materia.associate = function (models) {
    // Aquí puedes definir las asociaciones necesarias con otros modelos
  };

  return Materia;
};


