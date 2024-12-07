//ROUTES TO OPERATION ON PRODUCT(S)

import express from 'express';
import { getAllProducts, getProductById } from "../controllers/productController.mjs"

const router = express.Router(); // An instance of Express Router Module Object

router.get('/products', getAllProducts ); // Reference to Controller
router.get('/products/:id', getProductById );

export default router