import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';
import Usuario from './Usuario';
import Vuelo from './Vuelo';

class Tiquete extends Model {
    declare id: number;
    declare idVuelo: number;
    declare idUsuario: number;
    declare valor: number;
}

Tiquete.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        idVuelo: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Vuelos',
                key: 'id'
            },
            onDelete: 'CASCADE'
        },
        idUsuario: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Usuarios',
                key: 'id'
            },
            onDelete: 'CASCADE'
        },
        valor: {
            type: DataTypes.FLOAT,
            allowNull: false
        }
    },
    {
        sequelize,
        modelName: 'Tiquete',
        tableName: 'Tiquetes',
        timestamps: false
    }
);

export default Tiquete;