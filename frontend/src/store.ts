import { configureStore } from "@reduxjs/toolkit";
import modalReducer from '../features/todoSlice'
export const store = configureStore({
    reducer : modalReducer
});