import { Router } from 'express';
import ProductsController from '../controllers/Products';

const router = Router();
router.get('/list', ProductsController.list);

export default router;