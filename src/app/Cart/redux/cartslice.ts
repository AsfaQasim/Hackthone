import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// CartItem interface
export interface CartItem {
  _id: string;
  title: string;
  price: number | string;
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
      state.items.push(action.payload);
    },
    // Remove item from cart
    remove: (state, action: PayloadAction<string>) => {
      console.log("Removing item with ID:", action.payload);
      // Find the index of the item
      const index = state.items.findIndex(item => item._id === action.payload);
      
      // If item is found, remove it
      if (index !== -1) {
        // Use slice to return a new array without mutating the state directly
        state.items = [
          ...state.items.slice(0, index),
          ...state.items.slice(index + 1),
        ];
        console.log("Updated cart items:", state.items);
      } else {
        console.log("Item not found for removal:", action.payload);
      }
    },
  },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
