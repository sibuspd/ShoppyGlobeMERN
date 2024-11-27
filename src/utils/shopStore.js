import { configureStore } from "@reduxjs/toolkit"
import cartReducer from './cartSlice'

const shopStore = configureStore({
    reducer: {
        shopCart: cartReducer       
    }
});

export default shopStore