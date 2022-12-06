import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/dbConnetion.js';
import productRouter from './routes/productRoute.js';
import brandRoute from './routes/brandRoute.js';
import categoryRoute from './routes/categoryRoute.js';
import storeRoute from './routes/storeRoute.js';
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
app.use('/api/v1/product', productRouter);
app.use('/api/v1/brand', brandRoute);
app.use('/api/v1/category', categoryRoute);
app.use('/api/v1/store', storeRoute);

app.listen(port, () => console.log('app is ruing....'));