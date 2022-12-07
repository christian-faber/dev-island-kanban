import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { data } from "autoprefixer";
import initialdata from "../data/initial-data";
import { v4 } from "uuid";
import { addSubtask, deleteSubtask } from "./subtaskSlice";

// import initialdata from "../data/initial-data";

const initialState = [];

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action) => {
      return [
        ...state,
        {
          id: action.payload.id,
          title: action.payload.title,
          description: action.payload.description,
          subtasks: [],
          complete: false,
        },
      ];
    },

    deleteTask: (state, action) => {
      return state.filter((t) => t.id !== action.payload);
    },
    editTask: (state, action) => {
      return state.map((t) =>
        t.id === action.payload.id ? { ...t, title: action.payload.title } : t
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(isAnyOf(deleteSubtask), (state, action) =>
        state.map((task) => {
          if (action.payload.taskId !== task.id) return task;

          return {
            ...task,
            subtaskIds: task.subtaskIds.filter((subtaskId) => {
              return subtaskId !== action.payload.taskId;
            }),
          };
        })
      )
      .addMatcher(isAnyOf(addSubtask), (state, action) =>
        state.map((task) => {
          if (action.payload.taskId !== task.id) return task;
          return {
            ...task,
            subtaskIds: [...task.subtaskIds, action.payload.id],
          };
        })
      );
  },
});

export const { addTask, deleteTask, editTask } = taskSlice.actions;

export default taskSlice.reducer;
