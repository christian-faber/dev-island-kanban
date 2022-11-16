import { createSlice } from "@reduxjs/toolkit";
import { initialdata } from "../data/initial-data";

const initialState = initialdata;

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

      state.columns = state.columns.map((col) => {
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
      const length = state.columns.length;

      return {
        ...state,
        columns: [
          ...state.columns,
          {
            id: `c-${length + 1}`,
            title: action.payload.title,
            taskIds: [],
          },
        ],
      };
    },
    addTaskToColumn: (state, action) => {
      return {
        ...state,
        columns: state.columns.map((column) => {
          if (action.payload.columnId !== column.id) return column;
          return {
            ...column,
            taskIds: [...column.taskIds, action.payload.taskId],
          };
        }),
      };
    },
    deleteColumn: () => {},
    editColumn: () => {},
  },
});

export const { handleOnDragEnd, addColumn, deleteColumn, editColumn } =
  columnSlice.actions;

export default columnSlice.reducer;
