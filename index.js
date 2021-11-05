import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoute from './routes/user.js';
import authRoute from './routes/auth.js';
import productRoute from './routes/product.js';

import cors from 'cors';
dotenv.config();

const app = express();

mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log('DBConnection Successfull!'))
  .catch((err) => console.log(err));

app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/products', productRoute);

app.listen(process.env.port || 8000, () => {
  console.log('Backend server is running!');
});
