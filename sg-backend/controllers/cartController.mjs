import cartModel from "../models/Cart.mjs"
import productModel from "../models/Product.mjs"

export const addToCart = async ( req, res) => { // ADDING TO CART
    const { productId, quantity } = req.body;
    try{
        const product = await productModel.findById(productId);
        if(!product)
            return res.status(404).json({message: "Cannot find the product"});

        const cartItem = new cartModel({ productId, quantity}); // Add an Entry in line with Cart Model
        await cartItem.save(); // Asynchronous in nature
        res.status(201).json(cartItem); // Resource successfully added
    }
    catch(err){
        res.status(400).json({message: err.message});
    }
};

export const updateQuantity = async ( req, res) => { //UPDATING QUANTITY
    try {
         const cartItem = await cartModel.findById(req.params.id);
         if (!cartItem) 
            return res.status(404).json({ message: 'Item not found' });
         cartItem.quantity = req.body.quantity;
         await cartItem.save();
         res.json(cartItem);
        }
        catch(err){
            res.status(400).json({ message: err.message });
        }
};

export const removeItem = async ( req, res) => { // DELETING AN ITEM FROM CART
    try { const cartItem = await cartModel.findByIdAndDelete(req.params.id);
        if (!cartItem) 
            return res.status(404).json({ message: 'Item not found' });
        res.json({ message: 'Item removed' });
    } 
    catch(err){ 
        res.status(500).json({ message: err.message });
    }
}
