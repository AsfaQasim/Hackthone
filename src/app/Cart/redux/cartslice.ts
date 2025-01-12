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
    remove(state, action: PayloadAction<number>) {
      // Remove item by ID
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    // Other actions (like adding items to the cart) can go here
  },
});

export const { remove } = cartSlice.actions;

export default cartSlice.reducer;
