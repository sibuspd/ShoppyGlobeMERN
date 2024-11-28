import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'shopCart',
    initialState: [], // Shopping cart is empty initially
    reducers: {
        addProduct: (state, action) => {
            state.push(action.payload);
        },
        removeProduct: (state, action) => {
            return state.filter(product => product.id !== action.payload.id);
        },
        modifyQuantity: (state, action) => {
            const { product, quantity } = action.payload; // Destructuring Object received in Payload
            const item = state.find(p => p.id === product.id); /// Find product in State
            if(item) item.minimumOrderQuantity = quantity; // if item exists, provide the 'quantity' value 
        } 
    }
});

export const { addProduct, removeProduct , modifyQuantity } = cartSlice.actions;
export default cartSlice.reducer;

