import express from 'express';
import { productController } from '../controllers/productController.js';
const router = express.Router();

router.post('/api/v1/product', productController);

export default router;