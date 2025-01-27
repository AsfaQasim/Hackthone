"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// CartItem interface
export interface CartItem {
  _id: string; // Enforce string type
  title: string;
  price: number;
  image: string;
  quantity: number;
  name: string;
  description: string;
}

// State interface
interface CartState {
  items: CartItem[];
}

// Initial state
const initialState: CartState = {
  items: [],
};

// Redux slice
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Add item to cart
    add: (state, action: PayloadAction<CartItem>) => {
      // Ensure _id is always a string
      const newItem = { 
        ...action.payload, 
        _id: String(action.payload._id) 
      };
      state.items.push(newItem);
    },

    // Remove item from cart
    remove: (state, action: PayloadAction<string>) => {
      console.log("[Redux] Removing item with ID:", action.payload);
      console.log("[Redux] Current cart items:", state.items);

      // Find the index of the item
      const index = state.items.findIndex(item => item._id === action.payload);

      if (index !== -1) {
        // Remove item using splice (Immer-friendly)
        state.items.splice(index, 1);
        console.log("[Redux] Item removed. Updated cart:", state.items);
      } else {
        console.log("[Redux] Item not found for removal:", action.payload);
      }
    },
  },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;