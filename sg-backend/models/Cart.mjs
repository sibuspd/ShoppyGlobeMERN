//MODEL FOR CART DATA

import mongoose from 'mongoose';
import productModel from './Product.mjs';

const cartSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId, // only takes 'ObjectID' type value
        ref:productModel.modelName, // productID derived from Product Model Entries
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
});

const cartModel = mongoose.model('Cart', cartSchema);

export default cartModel