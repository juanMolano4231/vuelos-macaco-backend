import sequelize from './config/database';
import './models/Usuario';
import './models/Vuelo';
import './models/Tiquete';
import Usuario from './models/Usuario';
import Vuelo from './models/Vuelo';
import Tiquete from './models/Tiquete';
import bcrypt from 'bcryptjs';

async function seed() {
    try {
        await sequelize.sync({ alter: true });

        await sequelize.query('TRUNCATE "Tiquetes", "Vuelos", "Usuarios" CASCADE;');

        const hashed = await bcrypt.hash('1234', 10);
        const juan = await Usuario.create({
            nombre: 'Juan',
            contrasena: hashed,
            correo: 'juan@example.com',
            edad: 28,
        });

        const vuelos = await Vuelo.bulkCreate([
            { inicio: new Date('2025-10-01T10:00:00'), final: new Date('2025-10-01T12:30:00'), origen: 'Bogotá', destino: 'Medellín' },
            { inicio: new Date('2025-10-02T08:00:00'), final: new Date('2025-10-02T10:45:00'), origen: 'Cali', destino: 'Cartagena' },
            { inicio: new Date('2025-10-05T14:00:00'), final: new Date('2025-10-05T16:20:00'), origen: 'Medellín', destino: 'Barranquilla' },
            { inicio: new Date('2025-10-10T09:30:00'), final: new Date('2025-10-10T12:00:00'), origen: 'Bogotá', destino: 'Pereira' },
            { inicio: new Date('2025-10-15T11:00:00'), final: new Date('2025-10-15T13:50:00'), origen: 'Santa Marta', destino: 'Bogotá' },
        ]);

        await Tiquete.bulkCreate([
            { idVuelo: vuelos[0].id, idUsuario: juan.id, valor: 350000 },
            { idVuelo: vuelos[0].id, idUsuario: juan.id, valor: 360000 },
            { idVuelo: vuelos[1].id, idUsuario: juan.id, valor: 480000 },
            { idVuelo: vuelos[2].id, idUsuario: juan.id, valor: 420000 },
            { idVuelo: vuelos[2].id, idUsuario: juan.id, valor: 410000 },
        ]);

        console.log('Datos de prueba creados');
    } catch (error) {
        console.error('Error al sembrar datos:', error);
    } finally {
        await sequelize.close();
    }
}

seed();