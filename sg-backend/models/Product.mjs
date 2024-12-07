// MODEL FOR PRODUCT DATA

import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true }, // 1st image from the `images` array
    minimumOrderQuantity: { type: Number, required: true },
    price: { type: Number, required: true }
});

const productModel = mongoose.model('Product', productSchema);

export default productModel;