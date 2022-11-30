import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  taskOpen: false,
  columnOpen: false,
  infoOpen: false,
  boardOpen: false,

  editBoardOpen: false,

  sidebarModalOpen: false,
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

    openEditBoard: (state, actions) => {
      state.editBoardOpen = true;
    },


    openSidebarModal: (state, actions) => {
      state.sidebarModalOpen = true;

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

    closeEditBoard: (state, actions) => {

      state.editBoardOpen = false;
    },


    closeSidebarModal: (state, actions) => {
      state.sidebarModalOpen = false;

    },
  },
});

export const {
  openTaskModal,
  openColumnModal,
  openInfoModal,
  openBoardModal,

  openEditBoard,

  openSidebarModal,

  closeColumnModal,
  closeInfoModal,
  closeTaskModal,
  closeBoardModal,

  closeEditBoard,

  closeSidebarModal,

} = modalSlice.actions;

export default modalSlice.reducer;
