import { createSlice } from "@reduxjs/toolkit";
import initialdata from "../data/initial-data";

const initialState = { boards: [] };

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
            columnIds: [],
          },
        ],
      };
    },
    addColumnToBoard: (state, action) => {
      return {
        ...state,
        boards: state.boards.map((board) => {
          if (action.payload.boardId !== board.id) return board;
          return {
            ...board,
            columnIds: [...board.columnIds, action.payload.columnId],
          };
        }),
      };
    },

    deleteBoard: () => {},
    editBoard: () => {},
  },
});

export const { addBoard, deleteBoard, editBoard } = boardSlice.actions;

export default boardSlice.reducer;
