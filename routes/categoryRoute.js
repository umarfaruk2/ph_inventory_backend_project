import express from 'express';
import { createCategory, getCategory } from '../controllers/categoryController.js';

const categoryRoute = express.Router();

categoryRoute.route('/')
.post(createCategory)
.get(getCategory)


export default categoryRoute;