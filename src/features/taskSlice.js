import { createSlice } from "@reduxjs/toolkit";
import { data } from "autoprefixer";
import initialdata from "../data/initial-data";
// import { v4 } from "uuid";

// import initialdata from "../data/initial-data";

const initialState = initialdata;

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const length = state.tasks.length;
      console.log("bite me");
      return {
        ...state,

        tasks: [
          ...state.tasks,
          {
            id: `t-${length + 1}`,
            title: action.payload,
            columnId: action.payload,
            description: action.payload,
            subtasks: [action.payload],
            complete: false,
          },
        ],
      };
    },
    //updating column when task is
    // updateColumn: (state, action) => {
    //   return {
    //     ...state,
    //     columns: state.columns.map((col) =>
    //       if (col.id !== action.payload.columnId) return col;
    //     ),
    //   };
    // },

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
