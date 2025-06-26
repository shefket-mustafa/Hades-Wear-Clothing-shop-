import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { product, size } = action.payload;

      if (!size) {
        return;
      }
      const existing = state.items.find(
        (item) => item.id === product.id && item.size === size
      );

      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...product, size, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const { id, size } = action.payload;
      state.items = state.items.filter(
        (item) => !(item.id === id && item.size === size)
      );
    },
    changeQuantity: (state, action) => {
      const { id, size, quantity } = action.payload;
      const item = state.items.find((i) => i.id === id && i.size === size);
      if (item) {
        item.quantity = quantity;
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});
export const selectCartItems = (state) => state.cart.items;
export const selectTotalCartQuantity = createSelector(
  (state) => state.cart.items,
  (items) => items.reduce((sum, item) => sum + item.quantity, 0)
);

export const { addToCart, removeFromCart, changeQuantity, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
