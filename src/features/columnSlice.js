import { createSlice } from "@reduxjs/toolkit";
import initialdata from "../data/initial-data";

export const columnSlice = createSlice({
  name: "column",
  initialState: { initialdata },
  reducers: {},
});

export const {} = columnSlice.actions;

export default columnSlice.reducer;
