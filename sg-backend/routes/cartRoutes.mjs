//ROUTES TO OPERATION ON CART

import express from 'express';
import { addToCart, updateQuantity, removeItem } from "../controllers/cartController.mjs"
import verifyToken from '../middleware/auth.mjs';

const cartRoutes = (app) => {
    app.post('/cart', verifyToken, addToCart); 
    app.put('/cart/:id', verifyToken, updateQuantity);
    app.delete('/cart/:id', verifyToken, removeItem );
    // Passing middleware function and then reference to callback controller for all 3 HTTP methods on different routes
};

export default cartRoutes