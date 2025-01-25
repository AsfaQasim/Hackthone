import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartslice"; 

const store = configureStore({
  reducer: {
    cart: cartReducer, 
  },
});

// Export RootState and AppDispatch types for use throughout your app
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store; 