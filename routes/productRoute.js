import express from 'express';
import { productGetController, productPostController, productUpdateController, productBulkUpdateController, fileUpload } from '../controllers/productController.js';
import { authorization } from '../middleware/authorization.js';
const router = express.Router();
import uploader from '../middleware/file.uploader.js';
import { verifyToken } from '../middleware/verifyToken.js';

router.post('/file-upload', uploader.single('image'), fileUpload)

router.route('/bulk-update').patch(productBulkUpdateController)

router.route('/')
.get(productGetController)
.post(verifyToken, authorization('admin'), productPostController)

router.route('/:id')
.patch(productUpdateController)

export default router;