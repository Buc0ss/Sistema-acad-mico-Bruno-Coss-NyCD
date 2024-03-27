"use strict";

const { QueryTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Materia = sequelize.define(
    "Materia",
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
    apellido: {
      allowNull: false,
      type: DataTypes.STRING(50),
    },
    ci: {
      allowNull: false,
      type: DataTypes.NUMBER,
    },
    fk_carrera: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: "carreras",
        key: "id",
      }
    },
    {
      timestamps: false,
      tableName: "materias",
    }
  );

  Materia.getProfesoresByEstudiante = async (fk_estudiante) => {
    const query = `
      SELECT DISTINCT P.*
      FROM Profesores P
      INNER JOIN Materias M ON M.fk_profesor = P.id
      WHERE M.fk_estudiante = :fk_estudiante;
    `;
    return await sequelize.query(query, {
      replacements: { fk_estudiante },
      type: QueryTypes.SELECT,
    });
  };

  Materia.associate = function (models) {
    // Aquí puedes definir las asociaciones necesarias con otros modelos
  };

  return Materia;
};


