import { createSlice } from "@reduxjs/toolkit";
import initialdata from "../data/initial-data";

const length = initialdata.columns.length;

export const columnSlice = createSlice({
  name: "column",
  initialState: { initialdata },
  reducers: {
    handleOnDragEnd: (state, result) => {
      if (!result.destination) return;

      const tasks = state;
      const [reorderedItem] = tasks.splice(result.source.index, 1);
      tasks.splice(result.destination.index, 0, reorderedItem);

      state(tasks);
    },

    addColumn: (state, action) => {
      return state.push({
        id: `c-${length + 1}`,
        title: action.payload,
        taskIds: [],
      });
    },
    deleteColumn: () => {},
    editColumn: () => {},
  },
});

export const { handleOnDragEnd, addColumn, deleteColumn, editColumn } =
  columnSlice.actions;

export default columnSlice.reducer;
