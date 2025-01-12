"use client"

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartslice"; // Adjust the path if necessary

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
