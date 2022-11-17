import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";

const initialState = [];

export const columnSlice = createSlice({
  name: "column",
  initialState,
  reducers: {
    handleOnDragEnd: (state, { payload }) => {
      if (!payload.destination) return;

      console.log(payload);

      const { droppableId: sourceList } = payload.source;
      const { draggableId } = payload;
      const { index: destIndex, droppableId: destList } = payload.destination;

      state = state.map((col) => {
        if (col.id === sourceList) {
          col.taskIds = col.taskIds.filter((tId) => tId !== draggableId);
        }

        if (col.id === destList) {
          col.taskIds.splice(destIndex, 0, draggableId);
        }

        return col;
      });
    },

    addColumn: (state, action) => {
      return [
        ...state,

        {
          id: v4(),
          title: action.payload.title,
          board: action.payload.board,
          taskIds: [],
        },
      ];
    },
    addTaskToColumn: (state, action) => {
      return state.map((column) => {
        if (action.payload.columnId !== column.id) return column;
        return {
          ...column,
          taskIds: [...column.taskIds, action.payload.taskId],
        };
      });
    },

    deleteColumn: (state, action) => {
      console.log(state);
      return state.filter((c) => c.id !== action.payload);
    },
    editColumn: (state, action) => {
      return state.map((c) =>
        c.id === action.payload.id ? { ...c, title: action.payload.title } : c
      );
    },
  },
});

export const {
  handleOnDragEnd,
  addColumn,
  deleteColumn,
  editColumn,
  addTaskToColumn,
} = columnSlice.actions;

export default columnSlice.reducer;
