import { createSlice } from "@reduxjs/toolkit";
import initialdata from "../data/initial-data";

export const modalSlice = createSlice({
  name: "modal",
  initialState: { initialdata },
  reducers: {
    handleAddTaskModal: {},
    handleAddColumnModal: {},
    handleTaskInfoModal: {},
  },
});

export const { handleOnDragEnd } = modalSlice.actions;

export default modalSlice.reducer;
