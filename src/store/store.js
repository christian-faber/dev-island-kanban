import { configureStore } from "@reduxjs/toolkit";
import columnReducer from "../features/columnSlice";
import taskReducer from "../features/taskSlice";
import modalReducer from "../features/modalSlice";
import boardReducer from "../features/boardSlice";
import sidebarReducer from "../features/sidebarSlice";

export const store = configureStore({
  reducer: {
    column: columnReducer,
    task: taskReducer,
    modal: modalReducer,
    board: boardReducer,
    sidebar: sidebarReducer,
  },
});

//create
