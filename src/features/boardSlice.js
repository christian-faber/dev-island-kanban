import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";
import localStorage from "";

const boards =
  localStorage.getItem("kanbanBoards") !== null
    ? JSON.parse(localStorage.getItem("kanbanBoards"))
    : [];

// const setBoardsFn = (board) => {
//   localStorage.setItem(
//     "kanbanBoards",
//     JSON.stringify(state.kanbanBoards.map((board) => board))
//   );
// };

const initialState = {
  kanbanBoards: [boards],
};

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
      localStorage.setItem(
        "kanbanBoards",
        JSON.stringify(state.kanbanBoards.map((board) => board))
      );
    },
    addColumnToBoard: (state, action) => {
      return state.map((board) => {
        console.log({ board: board.id, action });
        if (action.payload.boardId !== board.id) return board;
        return {
          ...board,
          columnIds: [...board.columnIds, action.payload.columnId],
        };
      });
    },

    deleteBoard: (state, action) => {
      return state.filter((b) => b.id !== action.payload);
    },
    removeColumnFromBoard: (state, action) => {
      return state.filter((board) => {
        if (action.payload.boardId !== board.id) return board;
        return {
          ...board,
          columnIds: [board.columnIds.filter((c) => c.id !== action.payload)],
        };
      });
    },
    editBoard: (state, action) => {
      return state.map((b) =>
        b.id === action.payload.id ? { ...b, title: action.payload.title } : b
      );
    },
  },
});

export const {
  addBoard,
  deleteBoard,
  editBoard,
  addColumnToBoard,
  removeColumnFromBoard,
} = boardSlice.actions;

export default boardSlice.reducer;
