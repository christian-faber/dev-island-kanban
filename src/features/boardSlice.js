import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";
const initialState = [];

export const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    addBoard: (state, action) => {
      return [
        ...state,
        {
          id: v4(),
          title: action.payload,
          columnIds: [],
        },
      ];
    },
    addColumnToBoard: (state, action) => {
      return state.map((board) => {
        if (action.payload.boardId !== board.id) return board;
        return {
          ...board,
          columnIds: [...board.columnIds, action.payload.columnId],
        };
      });
    },

    deleteBoard: () => {},
    editBoard: () => {},
  },
});

export const { addBoard, deleteBoard, editBoard } = boardSlice.actions;

export default boardSlice.reducer;
