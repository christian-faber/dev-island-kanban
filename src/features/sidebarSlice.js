import { createSlice } from "@reduxjs/toolkit";
const initialState = "show";

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    show: () => {
      return "show";
    },
    hide: () => {
      return "hide";
    },
  },
});

//Action creators
export const { show, hide } = sidebarSlice.actions;

export default sidebarSlice.reducer;
