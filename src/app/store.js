import { configureStore } from "@reduxjs/toolkit";
import columnReducer from "../features/columnSlice";

export const store = configureStore({
  reducer: {
    column: columnReducer,
  },
});

//create
