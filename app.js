// const express = require('express');
import express from 'express';
import Hello from './hello.js';
import Lab5 from './Lab5.js';
import cors from 'cors';
import dotenv from 'dotenv';
import baseRouter from './Kanbas/Routes/index.js';

dotenv.config();

const app = express();
app.use(express.json());

app.use(cors({
    credentials: true,
    origin: process.env.FRONTEND_URL
}));
const PORT = process.env.PORT || 5001;


//print all the route calling
app.use((req, res, next) => {
    console.log(`Route call : ${req.method}: ${req.originalUrl}`);
    next();
});

app.use('/api', baseRouter)

Hello(app);
Lab5(app);

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});
