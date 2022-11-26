import columnReducer from "../features/columnSlice";
import taskReducer from "../features/taskSlice";
import modalReducer from "../features/modalSlice";
import boardReducer from "../features/boardSlice";
import subtaskReducer from "../features/subtaskSlice";
import sidebarReducer from "../features/sidebarSlice";
import { loadState } from "../localStorage";
import { configureStore } from "@reduxjs/toolkit";

const persistedState = loadState();
const initialStore = {
  boards: [],
  columns: [],
  tasks: [],
  subtasks: [],
  persistedState,
};

export const store = configureStore(
  {
    reducer: {
      column: columnReducer,
      task: taskReducer,
      modal: modalReducer,
      board: boardReducer,
      subtask: subtaskReducer,
      sidebar: sidebarReducer,
    },
  },
  persistedState
);

//create
