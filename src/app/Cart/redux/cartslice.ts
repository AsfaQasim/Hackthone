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
      console.log("Current items in cart:", state.items);
      const index = state.items.findIndex(item => item._id === action.payload);
      if (index !== -1) {
        state.items.splice(index, 1); // Remove the item
        console.log("Item removed, updated cart:", state.items);
      } else {
        console.log("Item not found");
      }
    }
    
    
  },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
