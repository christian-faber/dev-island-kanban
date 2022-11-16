import { createSlice } from "@reduxjs/toolkit";
import initialdata from "../data/initial-data";

const initialState = initialdata;
// {
//   columns: [],
// };

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
            description: action.payload.description,
            board: action.payload.board,
          },
        ],
      };
    },
    deleteColumn: () => {
      console.log("Eat me!");
    },
    editColumn: () => {},
  },
});

export const { handleOnDragEnd, addColumn, deleteColumn, editColumn } =
  columnSlice.actions;

export default columnSlice.reducer;
