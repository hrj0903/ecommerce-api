import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoute from './routes/user.js';

dotenv.config();

const app = express();

mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log('DBConnection Successfull!'))
  .catch((err) => console.log(err));

app.use(express.json());
app.use('/api/users', userRoute);

app.listen(process.env.port || 8000, () => {
  console.log('Backend server is running!');
});
