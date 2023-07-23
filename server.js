import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db';
import {
  errorResponserHandler,
  invalidPathHandler,
} from './middlewares/errorHandler';

// Routes
import userRoutes from './routes/userRoutes';

dotenv.config();
connectDB();
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Le serveur fonctionne...');
});

app.use('/api/users', userRoutes);

app.use(invalidPathHandler);
app.use(errorResponserHandler);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`ça chauffe sur le port: ${PORT} =)`));
