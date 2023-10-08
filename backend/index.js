import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.route.js'
dotenv.config();

mongoose.connect(process.env.MONGO)
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((err) => {
    console.log(err)
})

const app = express();

app.use(express.json());
 
app.listen(3001, () => {
    console.log('Server Listening on port 3001!')
})

app.use('/backend/auth', authRoutes);