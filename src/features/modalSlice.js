import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  taskOpen: false,
  columnOpen: false,
  infoOpen: false,
  boardOpen: false,
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
    openBoardModal: (state, actions) => {
      state.boardOpen = true;
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
    closeBoardModal: (state, actions) => {
      state.boardOpen = false;
    },
  },
});

export const {
  openTaskModal,
  openColumnModal,
  openInfoModal,
  openBoardModal,
  closeColumnModal,
  closeInfoModal,
  closeTaskModal,
  closeBoardModal,
} = modalSlice.actions;

export default modalSlice.reducer;
