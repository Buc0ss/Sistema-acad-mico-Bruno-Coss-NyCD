"use strict";

const { QueryTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const categoria = sequelize.define(
        "categoria",
        {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER,
            },
            nombre: {
                allowNull: false,
                type: DataTypes.STRING(50)
            },
        },
        {
            timestamps: false,
            tableName: "categorias",
        }
    );

    categoria.getCategorias = async (params) => {
        const query = `SELECT * FROM categorias`;
        return await sequelize.query(query, {
            type: QueryTypes.SELECT,
        });
    };

    categoria.associate = function (models) {
        // categoría.hasMany(models.categorias, {
        //   foreignKey: "fk_categoria",
        //   as: "categorias",
        // });
    };

    return categoria;
};




