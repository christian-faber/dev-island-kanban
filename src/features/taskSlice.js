import { createSlice } from "@reduxjs/toolkit";
import initialdata from "../data/initial-data";

const initialState = initialdata;

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    handleAddTask: (state, action) => {
      return state.push({
        id: `t-${state.tasks.length + 1}`,
        title: action.payload,
        description: action.payload,
        complete: false,
      });
    },
    handleDeleteTask: (state, action) => {
      return state.filter((t) => t.id !== action.payload);
    },
    handleEditTask: (state, action) => {
      return state.map((t) =>
        t.id === action.payload.id ? { ...t, title: action.payload.title } : t
      );
    },
  },
});

export const { handleAddTask, handleDeleteTask, handleEditTask } =
  taskSlice.actions;

export default taskSlice.reducer;
