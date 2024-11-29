import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'shopCart',
    initialState: {
    items:[], // Shopping cart is empty initially
    searchWord: ''
    },
    reducers: {
        addProduct: (state, action) => {
            const existingItem = state.items.find(p => p.id === action.payload.id);
            if(existingItem) // If such product exists
                existingItem.minimumOrderQuantity += 1; // Increase quantity if present in cart already
            else
                state.items.push({...action.payload, minimumOrderQuantity: 1}); // Computed Value and override existing quantity value 
        },
        removeProduct: (state, action) => {
            state.items = state.items.filter(product => product.id !== action.payload.id);
        },
        modifyQuantity: (state, action) => {
            const { product, quantity } = action.payload; // Destructuring Object received in Payload
            const item = state.items.find(p => p.id === product.id); /// Find product in State/shopCart
            if(item) item.minimumOrderQuantity = quantity; // if item exists, provide the 'quantity' value 
        },
        setSearchWord: ( state, action) => {
            state.searchWord = action.payload;
        }   
    }
});

export const { addProduct, removeProduct , modifyQuantity, setSearchWord } = cartSlice.actions;
export default cartSlice.reducer;

