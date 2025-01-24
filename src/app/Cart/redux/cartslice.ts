"use client"

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartItem {
  _id: number | string;
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
    remove(state, action: PayloadAction<number | string>) {
      console.log("Removing item with _id:", action.payload);
      console.log("Current cart items before removal:", state.items);
    
      state.items = state.items.filter(
        (item) => `${item._id}` !== `${action.payload}` // Ensure consistent type comparison
      );
    
      console.log("Updated cart items after removal:", state.items);
    },
    
    
    // Add item to the cart
    add(state, action: PayloadAction<CartItem>) {
      state.items.push(action.payload);
    },
  },
});

export const { remove, add } = cartSlice.actions;

export default cartSlice.reducer;
