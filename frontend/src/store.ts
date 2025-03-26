import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./features/todoSlice";

export const store = configureStore({
  reducer: {
    modal: modalReducer, // Wrap it inside an object
  },
});

// Define RootState type
export type RootState = ReturnType<typeof store.getState>;

// Define AppDispatch type
export type AppDispatch = typeof store.dispatch;
