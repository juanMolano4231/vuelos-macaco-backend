import sequelize from './config/database';
import './models/Usuario';
import './models/Vuelo';
import './models/Tiquete';

async function syncDatabase() {
  try {
    await sequelize.sync({ alter: true });
    console.log('Database synced successfully');
  } catch (error) {
    console.error('Error syncing database:', error);
  } finally {
    await sequelize.close();
  }
}

syncDatabase();