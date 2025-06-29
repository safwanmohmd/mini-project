import { configureStore } from "@reduxjs/toolkit";
import productsReducer from '../features/productSlice'
import cartReducer from '../features/cartSlice'
import authReducer from '../features/authSlice'
import theme from '../features/themeSlice'
export const store = configureStore({
    reducer: {
        products: productsReducer,
        cart : cartReducer,
        auth : authReducer,
        theme : theme
    }
})