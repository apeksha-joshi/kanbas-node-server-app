// const express = require('express');
import express from 'express';
import session from "express-session";
import Hello from './hello.js';
import Lab5 from './Lab5.js';
import cors from 'cors';
import dotenv from 'dotenv';
import baseRouter from './Kanbas/Routes/index.js';
import dbConnect from './config/dbConn.js';

dotenv.config();

const app = express();


app.use(cors({
    credentials: true,
    origin: process.env.FRONTEND_URL
}));
const sessionOptions = {
    secret : "any string",
    resave: false,
    saveUninitialized: false,
};
if(process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
        sameSite: "none",
        secure: true,
    };

}
app.use(
    session(sessionOptions)
);
app.use(express.json());
const PORT = process.env.PORT || 5001;

// connect DB
dbConnect()

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
