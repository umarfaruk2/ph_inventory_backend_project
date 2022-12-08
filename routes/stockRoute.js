import express from 'express';
import { stockGetByIdController, stockGetController, stockPostController, stockUpdateController } from '../controllers/StockController.js';
const stockRouter = express.Router();


// router.route('/bulk-update').patch(productBulkUpdateController)

stockRouter.route('/')
.get(stockGetController)
.post(stockPostController)

stockRouter.route('/:id')
.get(stockGetByIdController)
.patch(stockUpdateController)

export default stockRouter;