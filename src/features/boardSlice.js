import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";
const initialState = [{ id: 1, title: "Example", columnIds: [] }];

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

    deleteBoard: (state, action) => {
      console.log(state);
      return state.filter((b) => b.id !== action.payload);
    },
    editBoard: (state, action) => {
      return state.map((b) =>
        b.id === action.payload.id ? { ...b, title: action.payload.title } : b
      );
    },
  },
});

export const { addBoard, addColumnToBoard, deleteBoard, editBoard } =
  boardSlice.actions;

export default boardSlice.reducer;
