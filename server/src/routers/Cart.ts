import { Router } from 'express';
import CartController from '../controllers/Cart';

const router = Router();
router.post('/create', CartController.create);
router.post('/find', CartController.retrieve);
router.post('/add', CartController.addItem);
router.post('/updateQuantity', CartController.updateQuantity);

export default router;