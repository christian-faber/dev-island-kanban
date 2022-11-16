import { createSlice } from "@reduxjs/toolkit";
// import { v4 } from "uuid";

// import initialdata from "../data/initial-data";

//sharece question
//where do we implement v4 for unique ids?

//line 17
//id: `t-${state.tasks.length + 1}`,

const initialState = [];

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push({
        id: `t-${state.tasks.length + 1}`,
        title: action.payload,
        description: action.payload,
        board: action.payload,
      });
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
});

export const { addTask, deleteTask, editTask } = taskSlice.actions;

export default taskSlice.reducer;
