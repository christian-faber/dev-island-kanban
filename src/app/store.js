import { configureStore } from "@reduxjs/toolkit";
import columnReducer from "../features/columnSlice";
import taskReducer from "../features/columnSlice";

export const store = configureStore({
  reducer: {
    column: columnReducer,
    task: taskReducer,
  },
});

//create
