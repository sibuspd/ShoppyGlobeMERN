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
        } 
    }
});

export const { addProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;

