import sequelize from './config/database';
import './models/Usuario';
import './models/Vuelo';
import './models/Tiquete';

export async function syncDatabase(options: { alter?: boolean } = { alter: true }) {
  try {
    await sequelize.sync({ alter: options.alter });
    console.log('Database synced successfully');
  } catch (error) {
    console.error('Error syncing database:', error);
    throw error;
  }
}

if (require.main === module) {
  (async () => {
    try {
      await syncDatabase();
    } catch (err) {
      process.exit(1);
    } finally {
      await sequelize.close();
    }
  })();
}