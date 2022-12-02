import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { v4 } from "uuid";
import { deleteColumn } from "./columnSlice";

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

    deleteBoard: (state, action) => {
      console.log("board", action.payload);
      return state.filter((b) => b.id !== action.payload.id);
    },

    editBoard: (state, action) => {
      return state.map((b) =>
        b.id === action.payload.id ? { ...b, title: action.payload.title } : b
      );
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(isAnyOf(deleteColumn), (state, action) =>
      state.map((board) => {
        if (action.payload.boardId !== board.id) return board;

        return {
          ...board,
          columnIds: board.columnIds.filter((columnId) => {
            return columnId !== action.payload.columnId;
          }),
        };
      })
    );
  },
});

export const { addBoard, deleteBoard, editBoard, addColumnToBoard } =
  boardSlice.actions;

export default boardSlice.reducer;
