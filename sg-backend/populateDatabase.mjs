import mongoose from 'mongoose';
import dotenv from 'dotenv';
import fetch from 'node-fetch';
import productModel from "./models/Product.mjs"

dotenv.config();

const apiUrl = "https://dummyjson.com/products";

const uploadData = async () => {
    try{
        const response = await fetch(apiUrl);
        const data = await response.json();
        const products = data.products.map( product => ({
            title: product.title,
            description: product.description, 
            image: product.images[0], //the first image url
            minimumOrderQuantity: product.minimumOrderQuantity,
            price: product.price
        }));

        await mongoose.connect(process.env.db_url);

        await productModel.deleteMany(); // Remove existing records
        await productModel.insertMany(products); // Insert the array products[] obtained above

        console.log("Product uploaded to Database");
        mongoose.disconnect();
    }
    catch(err){
        console.error("Error in uploading to Database", err);
    }
};

uploadData();   


