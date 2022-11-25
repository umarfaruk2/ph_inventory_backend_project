import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/dbConnetion.js';
import productRouter from './routes/productRoute.js';
dotenv.config();
const database_url = process.env.DATABASE_URL;
const port = process.env.PORT || 8000;
const app = express();

// middleware
app.use(express.json());
app.use(cors());

// db
connectDB(database_url);

// routes
app.get('/', (req, res) => {
    res.send('new app');
})
app.use('/', productRouter);

app.listen(port, () => console.log('app is ruing....'));