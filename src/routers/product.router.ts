import { Router } from 'express';
import ProductController from '../controllers/product.controller';
import productValidation from '../middlewares/productValidation';

const router = Router();
const productController = new ProductController();

router.get('/', productController.getAllProducts);
router.post('/', productValidation, productController.createProduct);

export default router;