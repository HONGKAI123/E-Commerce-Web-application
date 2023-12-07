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
    increaseItem: (state, action) => {
      state.products = state.products.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    },

    decreaseItem: (state, action) => {
      state.products = state.products.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
    },
  },
});
console.log(cartSlice.actions);
// Action creators are generated for each case reducer function
export const { addToCart, emptyCart, deleteItem, increaseItem, decreaseItem } =
  cartSlice.actions;
//export Slice's reducer
export default cartSlice.reducer; //export the unnamed reducer, we can give it any name when we import it.
