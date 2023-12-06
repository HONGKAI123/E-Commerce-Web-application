import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload.id); //if we have add more than one item
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
    },
    emptyCart: (state) => {
      state.products = [];
    },
    deleteItem: (state, action) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});
console.log(cartSlice.actions);
// Action creators are generated for each case reducer function
export const { addToCart, emptyCart, deleteItem } = cartSlice.actions;

export default cartSlice.reducer;
