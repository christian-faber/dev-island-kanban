import { createSlice } from "@reduxjs/toolkit";
import initialdata from "../data/initial-data";

export const taskSlice = createSlice({
  name: "task",
  initialState: { initialdata },
  reducers: {
    handleAddTask: {},
    handleDeleteTask: {},
    handleEditTask: {},
  },
});

export const { handleOnDragEnd } = taskSlice.actions;

export default taskSlice.reducer;
