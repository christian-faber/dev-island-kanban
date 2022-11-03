import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  taskOpen: false,
  columnOpen: false,
  infoOpen: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openTaskModal: (state, actions) => {
      state.taskOpen = true;
    },
    openColumnModal: (state, actions) => {
      state.columnOpen = true;
    },
    openInfoModal: (state, actions) => {
      state.infoOpen = true;
    },
    closeTaskModal: (state, actions) => {
      state.taskOpen = false;
    },
    closeColumnModal: (state, actions) => {
      state.columnOpen = false;
    },
    closeInfoModal: (state, actions) => {
      state.infoOpen = false;
    },
  },
});

export const {
  openTaskModal,
  openColumnModal,
  openInfoModal,
  closeColumnModal,
  closeInfoModal,
  closeTaskModal,
} = modalSlice.actions;

export default modalSlice.reducer;
