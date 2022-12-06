import express from 'express';
import { createBrand, getBrand, getSingleBrand, updateBrand } from '../controllers/brandController.js';

const brandRoute = express.Router();

brandRoute.route('/')
.get(getBrand)
.post(createBrand)

brandRoute.route('/:id')
.get(getSingleBrand)
.patch(updateBrand)



export default brandRoute;