import { configureStore } from "@reduxjs/toolkit";
import productsSlice from '../features/productSlice'
import cartReducer from '../features/cartSlice'
export const store = configureStore({
    reducer: {
        products: productsSlice,
        cart : cartReducer
    }
})