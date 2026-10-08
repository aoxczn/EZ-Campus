import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.send('EZ Campus API running ✅'));
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB connected');
    app.listen(PORT, () =>
      console.log(`🚀 EZ Campus server on http://localhost:${PORT}`)
    );
  })
  .catch((err) => console.error('❌ MongoDB error:', err.message));