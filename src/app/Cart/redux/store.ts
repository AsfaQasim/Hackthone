"use client";

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartslice"; // Cart slice


const store = configureStore({
  reducer: {
    cart: cartReducer, // Cart reducer
    wishlist: wishlistReducer, // Wishlist reducer
  },
});

// RootState aur AppDispatch types export karna zaruri hai
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;


function wishlistReducer() {
  return null
}
 
