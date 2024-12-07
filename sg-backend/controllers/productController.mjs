// LOGIC FOR PRODUCT ROUTES

import productModel from "../models/Product.mjs"

export const getAllProducts = async ( req, res) => {
    try{
        const productList = await productModel.find();
        res.json(productList);
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
};

export const getProductById = async ( req, res ) => {
    try{
        const product = await productModel.findById(req.params.id);
        if(!product)
            return res.status(404).json({message: "Product not found"});
        res.json(product);
    }
    catch(err){
        res.status(500).json({message: err.message});
    }   
};