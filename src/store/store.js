import columnReducer from "../features/columnSlice";
import taskReducer from "../features/taskSlice";
import modalReducer from "../features/modalSlice";
import boardReducer from "../features/boardSlice";
import subtaskReducer from "../features/subtaskSlice";

import sidebarReducer from "../features/sidebarSlice";
import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import { save, load } from "redux-localstorage-simple";

const createStoreWithMiddleware = applyMiddleware(save())(configureStore);

export const store = createStoreWithMiddleware({
  reducer: {
    column: columnReducer,
    task: taskReducer,
    modal: modalReducer,
    board: boardReducer,
    subtask: subtaskReducer,
    sidebar: sidebarReducer,
  },
  preloadedState: load(),
});
