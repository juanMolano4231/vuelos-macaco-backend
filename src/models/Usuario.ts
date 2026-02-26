import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';

class Usuario extends Model {
    declare id: number;
    declare nombre: string;
    declare contrasena: string;
    declare correo: string;
    declare edad: number;
}

Usuario.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        contrasena: {
            type: DataTypes.STRING,
            allowNull: false
        },
        correo: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        edad: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        sequelize,
        modelName: 'Usuario',
        tableName: 'Usuarios',
        timestamps: false
    }
);

export default Usuario;
