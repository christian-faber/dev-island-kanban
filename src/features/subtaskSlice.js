import { createSlice } from "@reduxjs/toolkit";
// import { data } from "autoprefixer";
// import initialdata from "../data/initial-data";
import { v4 } from "uuid";

// import initialdata from "../data/initial-data";

const initialState = [];

export const subtaskSlice = createSlice({
  name: "subtask",
  initialState,
  reducers: {
    addSubtask: (state, action) => {
      return [
        ...state,
        {
          id: v4(),
          title: action.payload.title,
          complete: false,
        },
      ];
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

    deleteSubtask: (state, action) => {
      return state.filter((s) => s.id !== action.payload);
    },
    editSubtask: (state, action) => {
      return state.map((s) =>
        s.id === action.payload.id ? { ...s, title: action.payload.title } : s
      );
    },
  },
});

export const { addSubtask, deleteSubtask, editSubtask } = subtaskSlice.actions;

export default subtaskSlice.reducer;
