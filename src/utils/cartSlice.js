import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'shopCart',
    initialState: [], // Shopping cart is empty initially
    reducers: {
        addProduct: (state, action) => {
            const existingItem = state.find(p => p.id === action.payload.id);
            if(existingItem) // If such product exists
                existingItem.minimumOrderQuantity += 1; // Increase quantity if present in cart already
            else
                state.push({...action.payload, minimumOrderQuantity: 1}); // Computed Value and override existing quantity value 
        },
        removeProduct: (state, action) => {
            return state.filter(product => product.id !== action.payload.id);
        },
        modifyQuantity: (state, action) => {
            const { product, quantity } = action.payload; // Destructuring Object received in Payload
            const item = state.find(p => p.id === product.id); /// Find product in State/shopCart
            if(item) item.minimumOrderQuantity = quantity; // if item exists, provide the 'quantity' value 
        }   
    }
});

export const { addProduct, removeProduct , modifyQuantity } = cartSlice.actions;
export default cartSlice.reducer;

