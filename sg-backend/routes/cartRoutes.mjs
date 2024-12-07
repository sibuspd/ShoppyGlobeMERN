//ROUTES TO OPERATION ON CART

import express from 'express';
import { addToCart, updateQuantity, removeItem } from "../controllers/cartController.mjs"
import verifyToken from '../middleware/auth.mjs';

const router = express.Router();

router.post('/', verifyToken, addToCart);
router.put('/:id', verifyToken, updateQuantity);
router.delete('/:id', verifyToken, removeItem );

export default router;