"use strict";

const { QueryTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const imagen_video = sequelize.define(
    "imagen_video",
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
        },
      },
      tipo: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      URL: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {
      timestamps: false,
      tableName: "imagenes_videos",
    }
  );

  imagen_video.getImagen_Video = async (params) => {
    const query = ``;
    return await sequelize.query(query, {
      type: QueryTypes.SELECT,
    });
  };

  imagen_video.associate = function (models) {
    // imagen_video.hasMany(models.imagen_video, {
    //   foreignKey: "imagen_video",
    //   as: "iamgenes_videos",
    // });
  };

  return imagen_video;
};



