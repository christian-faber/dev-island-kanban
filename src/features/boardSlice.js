import { createSlice } from "@reduxjs/toolkit";
import initialState from "../data/initial-data";

export const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    addBoard: (state, action) => {
      const length = state.board.length;

      return state.push({
        id: `b-${length + 1}`,
        title: action.payload,
        columnIds: [],
      });
    },
    deleteBoard: () => {},
    editBoard: () => {},
  },
});

export const { addBoard, deleteBoard, editBoard } = boardSlice.actions;

export default boardSlice.reducer;
