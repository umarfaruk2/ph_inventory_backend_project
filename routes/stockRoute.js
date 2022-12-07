import express from 'express';
import { stockGetByIdController, stockGetController, stockPostController, stockUpdateController } from '../controllers/StockController.js';
const router = express.Router();


// router.route('/bulk-update').patch(productBulkUpdateController)

router.route('/')
.get(stockGetController)
.post(stockPostController)

router.route('/:id')
.get(stockGetByIdController)
.patch(stockUpdateController)

export default router;