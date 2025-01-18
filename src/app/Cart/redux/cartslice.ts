"use client"

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartItem {
  id: number | string;
  title: string;
  price: number | string;
  image: string;
  name: string;
  description:string
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
