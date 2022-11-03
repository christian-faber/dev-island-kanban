import { createSlice } from "@reduxjs/toolkit";
import initialdata from "../data/initial-data";

export const columnSlice = createSlice({
  name: "column",
  initialState: { initialdata },
  reducers: {
    handleOnDragEnd: (result) => {
      if (!result.destination) return;
    },
  },
});

export const { handleOnDragEnd } = columnSlice.actions;

export default columnSlice.reducer;
