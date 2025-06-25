import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
    items: [ ],
    loading: false,
    error: null
}

export const fetchProducts = createAsyncThunk('products/fetch', async () => {
    const response = await axios.get('https://fakestoreapi.com/products');
  console.log(response.data);
    return response.data

})

const productSlice = createSlice({
    name: "products",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.loading = true
        })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.error = action.error
            })
    }

})
export default productSlice.reducer