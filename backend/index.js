import express from 'express';
// import mongoose from 'mongoose';
// import dotenv from 'dotenv';









const app = express();

app.use(express.json());

app.listen(3001, () => {
    console.log('Server Listening on port 3000')
})