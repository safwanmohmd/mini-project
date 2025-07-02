import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getProductsList = JSON.parse(localStorage.getItem('productList'))
const initialState = {
    items: getProductsList || [],
    loading: false,
    error: null
}

export const fetchProducts = createAsyncThunk('products/fetch', async () => {
    const response = await axios.get('/data.json');
    console.log(response.data);
    return response.data

})

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        createProduct: (state, action) => {
            const { id, title, price, description, image, category } = action.payload

            let newItem = [...items, { id, title, price, description, image, category }];
            state.items = newItem;
        },
        deleteProduct: (state, action) => {
           
            const filtered = state.items.filter((x) => x.id !== action.payload.id)
            state.items = filtered
             localStorage.setItem('productList', JSON.stringify(state.items));
        } ,
        editProduct :(state,action) =>{
          
             const { id, title, price} = action.payload
            
            const matchProduct = state.items.find((x)=> x.id === id)
            matchProduct.price = price
            matchProduct.title = title
            localStorage.setItem('productList', JSON.stringify(state.items));

         }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.loading = true
        })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;

                const localData = localStorage.getItem('productList');

               
                if (!localData || JSON.parse(localData).length === 0) {
                    state.items = action.payload;
                    localStorage.setItem('productList', JSON.stringify(state.items));
                } else {
                    state.items = JSON.parse(localData);
                }
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.error = action.error
            })
    }

})

export const { deleteProduct,editProduct } = productSlice.actions
export default productSlice.reducer