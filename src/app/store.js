import { configureStore } from "@reduxjs/toolkit";
import imageReducer from "../features/imageDetails/imageSlice";
export const store = configureStore({
  reducer: { imageReducer },
});
