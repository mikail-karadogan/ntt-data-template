import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://honey-badgers-ecommerce.glitch.me";

export const getProducts = createAsyncThunk(
  "products/all",
  async (params, { dispatch, rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/products`);
      const { data } = response;
      return data;
    } catch (error) {
      rejectWithValue(error.data.response);
    }
  }
);

const initialState = {
  products: [],
  favoriteProducts: [],
  filteredFavoriteProductsData: []
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setFavoriteProducts: (state, action) => {
      state.favoriteProducts.push(action.payload);
    },
    deletedFavoriteProduct: (state, action) => {
      let faforiteProductsData = state.favoriteProducts.filter((item) => {
        return action.payload.id !== item.id;
      });
      state.favoriteProducts = faforiteProductsData;
    },
  },
  extraReducers: {
    [getProducts.fulfilled]: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { setProducts, setFavoriteProducts, deletedFavoriteProduct } =
  productSlice.actions;

export default productSlice.reducer;
