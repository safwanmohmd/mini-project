import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    cart: [],
    loading : false

}



const cartlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.cart = [...state.cart, action.payload]
            console.log(state.cart);
        },
        clearCart: (state)=>{
            state.cart = []
        }

    }

})

export const {addToCart, clearCart} = cartlice.actions

export default cartlice.reducer