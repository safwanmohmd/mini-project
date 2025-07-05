import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// ✅ Safe access to localStorage
let getProductsList = [];
if (typeof localStorage !== 'undefined') {
  const stored = localStorage.getItem('productList');
  getProductsList = stored ? JSON.parse(stored) : [];
}

const initialState = {
  items: getProductsList,
  filtered: [],
  search: '',
  category: 'All',
  loading: false,
  error: null
};

export const fetchProducts = createAsyncThunk('products/fetch', async () => {
  const response = await axios.get('/data.json');
  console.log(response.data);
  return response.data;
});

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    filterProducts: (state) => {
      let result = state.items;
      if (state.search !== '') {
        result = result.filter(x => x.title.toLowerCase().includes(state.search.toLowerCase()));
      }
      if (state.category !== "All") {
        result = result.filter(product => product.category === state.category);
      }
      state.filtered = result;
    },
    createProduct: (state, action) => {
      const { id, title, price, description, image, category } = action.payload;
      state.items = [...state.items, { id, title, price, description, image, category }];
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('productList', JSON.stringify(state.items));
      }
    },
    deleteProduct: (state, action) => {
      state.items = state.items.filter((x) => x.id !== action.payload.id);
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('productList', JSON.stringify(state.items));
      }
    },
    editProduct: (state, action) => {
      const { id, title, price } = action.payload;
      const matchProduct = state.items.find((x) => x.id === id);
      if (matchProduct) {
        matchProduct.title = title;
        matchProduct.price = price;
        if (typeof localStorage !== 'undefined') {
          localStorage.setItem('productList', JSON.stringify(state.items));
        }
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        if (typeof localStorage !== 'undefined') {
          const localData = localStorage.getItem('productList');
          if (!localData || JSON.parse(localData).length === 0) {
            state.items = action.payload;
            localStorage.setItem('productList', JSON.stringify(state.items));
          } else {
            state.items = JSON.parse(localData);
          }
        } else {
          state.items = action.payload;
        }
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
  }
});

export const {
  deleteProduct,
  setCategory,
  filterProducts,
  editProduct,
  createProduct,
  setSearch
} = productSlice.actions;

export default productSlice.reducer;
