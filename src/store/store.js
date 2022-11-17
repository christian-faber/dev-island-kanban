import { configureStore } from "@reduxjs/toolkit";
import columnReducer from "../features/columnSlice";
import taskReducer from "../features/taskSlice";
import modalReducer from "../features/modalSlice";
import boardReducer from "../features/boardSlice";
import subtaskReducer from "../features/subtaskSlice";

export const store = configureStore({
  reducer: {
    column: columnReducer,
    task: taskReducer,
    modal: modalReducer,
    board: boardReducer,
    subtask: subtaskReducer,
  },
});

//create
