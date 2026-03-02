import express from 'express';
import cors from 'cors';
import sequelize from './config/database';
import routes from './routes';
import { syncDatabase } from './sync';   // <-- keep only this

const app = express();
const port = Number(process.env.PORT || 3000);
const FRONTEND = process.env.FRONTEND_URL || 'https://vuelos-macaco-frontend.onrender.com';

app.use(cors({
  origin: FRONTEND,
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

app.use('/api', routes);

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connection established');

    if (process.env.SYNC_DB === 'true') {
      await syncDatabase();
    }

    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (error) {
    console.error('Failed to initialize application:', error);
    process.exit(1);
  }
})();