import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      console.log(action.payload.id)
      const item = state.items.find((product) => product.id === action.payload.id);

      if (item) {
        item.quantity++;
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1,
        });
      }
    },
    removeItem: (state, action) => {
      const item = state.items.find((product) => product.id === action.payload.id);

      if (item) {
        if (item.quantity > 1) {
          item.quantity--;
        } else {
          state.items = state.items.filter((product) => product.id !== action.payload.id);
        }
      }
    },
  },
});

export const { addItem, removeItem, clearCart, signOut } = cartSlice.actions;
export default cartSlice.reducer;

