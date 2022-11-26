import express from 'express';
import { productGetController, productPostController, productUpdateController, productBulkUpdateController } from '../controllers/productController.js';

const router = express.Router();

router.route('/')
.get(productGetController)
.post(productPostController)

router.route('/bulk-update').patch(productBulkUpdateController)

router.route('/:id').patch(productUpdateController)

export default router;