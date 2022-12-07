import express from 'express';
import { productGetController, productPostController, productUpdateController, productBulkUpdateController, fileUpload } from '../controllers/productController.js';
const router = express.Router();
import uploader from '../middleware/file.uploader.js';

router.post('/file-upload', uploader.single('image'), fileUpload)

router.route('/bulk-update').patch(productBulkUpdateController)

router.route('/')
.get(productGetController)
.post(productPostController)

router.route('/:id')
.patch(productUpdateController)

export default router;