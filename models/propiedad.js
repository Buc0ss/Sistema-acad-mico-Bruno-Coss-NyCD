"use strict";

const { QueryTypes } = require("sequelize");


module.exports = (sequelize, DataTypes) => {
    const propiedad = sequelize.define(
        "propiedad",
        {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER,
            },
            fk_usuario: {
                allowNull: false,
                type: DataTypes.INTEGER,
                references: {
                    model: "usuarios",
                    key: "id",
                }
            },
            ubicacion: {
                allowNull: false,
                type: DataTypes.STRING,
            },
            precio: {
                allowNull: false,
                type: DataTypes.FLOAT,
            },
            nro_habitaciones: {
                allowNull: false,
                type: DataTypes.INTEGER,
            },
            descripcion: {
                allowNull: false,
                type: DataTypes.TEXT,
            },
            estado: {
                allowNull: false,
                type: DataTypes.INTEGER,
            },
            fk_categoria: {
                allowNull: false,
                type: DataTypes.INTEGER,
                references: {
                    model: "categorias",
                    key: "id",
                }
            }
        },
        {
            timestamps: false,
            tableName: "propiedades",
        }
    );

    propiedad.getPropiedades = async (params) => {
        const query = ``;
        return await sequelize.query(query, {
            type: sequelize.QueryTypes.SELECT,
        });
    };

    propiedad.associate = function (models) {
        // propiedad.hasMany(models.propiedades, {
        //   foreignKey: "fk_propiedad",
        //   as: "propiedades",
        // });
    };

    return propiedad;
};




