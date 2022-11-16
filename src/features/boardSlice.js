import { createSlice } from "@reduxjs/toolkit";
import initialdata from "../data/initial-data";

const initialState = initialdata;

export const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    addBoard: (state, action) => {
      const length = state.boards.length;

      return {
        ...state,
        boards: [
          ...state.boards,
          {
            id: `b-${length + 1}`,
            title: action.payload,
            description: action.payload,
          },
        ],
      };
    },

    deleteBoard: () => {},
    editBoard: () => {},
  },
});

export const { addBoard, deleteBoard, editBoard } = boardSlice.actions;

export default boardSlice.reducer;
