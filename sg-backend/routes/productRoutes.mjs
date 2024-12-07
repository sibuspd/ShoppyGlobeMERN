//ROUTES TO OPERATION ON PRODUCT(S)

import express from 'express';
import { getAllProducts, getProductById } from "../controllers/productController.mjs"

const productRoutes = (app) => {
    app.get('/products', getAllProducts ); // Reference to Controller
    app.get('/products/:id', getProductById );
};

export default productRoutes