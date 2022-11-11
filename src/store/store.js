import { configureStore } from "@reduxjs/toolkit";
import columnReducer from "../features/columnSlice";
import taskReducer from "../features/columnSlice";
import modalReducer from "../features/modalSlice";
import boardReducer from "../features/boardSlice";

export const store = configureStore({
  reducer: {
    column: columnReducer,
    task: taskReducer,
    modal: modalReducer,
    board: boardReducer,
  },
});

//create
