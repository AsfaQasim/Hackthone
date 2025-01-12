"use client"

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  id: number;
  title: string;
  price: number;
  image: string;
  name: string;
}
interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Remove item by ID
    remove(state, action: PayloadAction<number>) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    // Add item to the cart
    add(state, action: PayloadAction<CartItem>) {
      state.items.push(action.payload);
    },
  },
});

export const { remove, add } = cartSlice.actions;

export default cartSlice.reducer;
