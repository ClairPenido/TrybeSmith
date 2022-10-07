import { Router } from 'express';
import ProductController from '../controllers/product.controller';

const router = Router();
const productController = new ProductController();

router.get('/', productController.getAllProducts);
router.post('/', productController.createProduct);

export default router;