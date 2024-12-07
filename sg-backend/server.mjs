// SERVER FILE 

import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv";
import productRoutes from "./routes/productRoutes.mjs"; // Importing Routes
import cartRoutes from "./routes/cartRoutes.mjs";
import userRoutes from "./routes/userRoutes.mjs";


dotenv.config(); // Loading the environment variables
const app = express();

const port = process.env.PORT || 3000;

// MIDDLEWARE-----------------------------------
app.use(express.json());
app.use('api/products', productRoutes);
app.use('api/cart', cartRoutes);
app.use('api/auth', userRoutes);

// CALLING ROUTES -----------------------------
productRoutes(app);
cartRoutes(app);
userRoutes(app);

// Database Connection ----------------------------
mongoose.connect(process.env.db_url)
.then(() => {
    console.log('Connected to MongoDB');
    app.listen(port, () => { 
        console.log(`Server is running on http://localhost:${port}`); 
    });   
})
.catch((err) => {
    console.error('MongoDB connection error:', err);
});