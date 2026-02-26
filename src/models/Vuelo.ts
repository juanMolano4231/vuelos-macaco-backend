import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';

class Vuelo extends Model {
    declare id: number;
    declare inicio: Date;
    declare final: Date;
    declare origen: string;
    declare destino: string;
}

Vuelo.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        inicio: {
            type: DataTypes.DATE,
            allowNull: false
        },
        final: {
            type: DataTypes.DATE,
            allowNull: false
        },
        origen: {
            type: DataTypes.STRING,
            allowNull: false
        },
        destino: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        modelName: 'Vuelo',
        tableName: 'Vuelos',
        timestamps: false
    }
);

export default Vuelo;