import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/dbConnetion.js';
import productRouter from './routes/productRoute.js';
import brandRoute from './routes/brandRoute.js';
import categoryRoute from './routes/categoryRoute.js';
import storeRoute from './routes/storeRoute.js';
import supplierRoute from './routes/supplierRoute.js';
import stockRouter from './routes/stockRoute.js';
import signUpRoute from './routes/signUpRoute.js';
import loginRoute from './routes/loginRoute.js';
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
app.use('/api/v1/supplier', supplierRoute);
app.use('/api/v1/stock', stockRouter);
app.use('/api/v1/sign-up', signUpRoute);
app.use('/api/v1/login', loginRoute);

// 404 error handling
app.use((req, res, next) => {
    next("url is not correct");
})

// error handling
app.use((err, req, res, next) => {
    if(res.headersSend) {
        next("There was a problem");
    } else {
        if (err.message) {
            res.status(500).json({
                status: "fail",
                message: "something is wrong",
                error: err.message
            })
        } else {
            res.status(500).json({
                status: "fail",
                message: "something is wrong or url is not correct",
                error: err.message
            })
        }
    }
})

app.listen(port, () => console.log('app is ruing....'));