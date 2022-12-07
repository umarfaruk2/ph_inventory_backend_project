import express from 'express';
import { createSupplier, getSupplier, getSupplierById, updateSupplier } from '../controllers/supplierController.js';
const supplierRoute = express.Router();

supplierRoute.route('/')
.post(createSupplier)
.get(getSupplier)

supplierRoute.route('/:id')
.get(getSupplierById)
.patch(updateSupplier)


export default supplierRoute;