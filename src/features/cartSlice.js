import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    cart: [],
    loading: false,
    total : 0

}



const cartlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {

            const exists = state.cart.find((x) => x.id == action.payload.id)
            if (!exists) {
                let newItem = { ...action.payload, count: 1 };
                state.cart.push(newItem);

            } else {
                exists.count++;
                // console.log(exists.count);

            }
            
    

        },
        updateQty: (state, action) => {
            const { id, count } = action.payload;
            const item = state.cart.find((x) => x.id === id);
            if (item) {
                item.count = count;
                console.log(item.count);
            }
        },
        clearCart: (state) => {
            state.cart = []
        }

    }

})

export const { addToCart, clearCart, updateQty } = cartlice.actions

export default cartlice.reducer