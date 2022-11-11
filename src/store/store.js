import { configureStore } from "@reduxjs/toolkit";
import columnReducer from "../features/columnSlice";
import taskReducer from "../features/columnSlice";
import modalReducer from "../features/modalSlice";

export const store = configureStore({
  reducer: {
    column: columnReducer,
    task: taskReducer,
    modal: modalReducer,
  },
});

//create
