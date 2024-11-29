import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'shopCart',
    initialState: {
    items:[], // Shopping cart is empty initially
    searchWord: '',
    totalQuantity: 0 // Quantity tracking of each item
    },
    reducers: {
        addProduct: (state, action) => {
            const existingItem = state.items.find(p => p.id === action.payload.id);
            if(existingItem) // If such product exists
                existingItem.minimumOrderQuantity += 1; // Increase quantity if present in cart already
            else
                state.items.push({...action.payload, minimumOrderQuantity: 1}); // Computed Value and override existing quantity value
            state.totalQuantity += 1; // Increase the item quantity count each time button is clicked
        },
        removeProduct: (state, action) => {
            const item = state.items.find(product => product.id === action.payload.id); //True or False
            if(item){
                state.totalQuantity -= item.minimumOrderQuantity; // Removes all quantities of an item at once
                if (state.totalQuantity < 0) state.totalQuantity = 0; // Quantity never takes negative value
                state.items = state.items.filter(p => p.id !== action.payload.id) //Removes the item in consideration
            }
        },
        modifyQuantity: (state, action) => {
            const { product, quantity } = action.payload; // Destructuring Object received in Payload
            const item = state.items.find(p => p.id === product.id); /// Find product in State/shopCart
            if(item){
                state.totalQuantity += quantity - item.minimumOrderQuantity;
                item.minimumOrderQuantity = quantity; // if item exists, provide the 'quantity' value 
            }
        },
        setSearchWord: ( state, action) => {
            state.searchWord = action.payload;
        }   
    }
});

export const { addProduct, removeProduct , modifyQuantity, setSearchWord } = cartSlice.actions;
export default cartSlice.reducer;

