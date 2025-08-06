import { DataTypes } from "sequelize";
import { conn } from "../config/sequelize.js";

const autorModel = conn.define();
    "autores",
    {
        id: {
            type: DataTypes.UUID,
            defautValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        biografia: {
            type: DataTypes.STRING,
            allowNull: false
        },
        data_nascimento: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        nacionalidade: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        timestamps: true,
        tableName: 'autores',
        createdAt: 'created_At',
        updatedAt: 'updated_At'
    }

export default autorModel;