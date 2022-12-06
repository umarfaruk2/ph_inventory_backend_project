import express from 'express';
import { createCategory, getCategory } from '../controllers/categoryController.js';
import { createStore, getStore } from '../controllers/storeController.js';

const storeRoute = express.Router();

storeRoute.route('/')
.post(createStore)
.get(getStore)


export default storeRoute;