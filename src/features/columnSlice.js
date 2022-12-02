import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { addTask, deleteTask } from "./taskSlice";

const initialState = [];

export const columnSlice = createSlice({
  name: "column",
  initialState,
  reducers: {
    handleOnDragEnd: (state, { payload }) => {
      if (!payload.destination) return;

      const { droppableId: sourceList } = payload.source;
      const { draggableId } = payload;
      const { index: destIndex, droppableId: destList } = payload.destination;

      state = state.map((col) => {
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
      return [
        ...state,

        {
          taskIds: [],
          ...action.payload,
        },
      ];
    },

    // addTaskToColumn: (state, action) => {
    //   return state.map((column) => {
    //     if (action.payload.columnId !== column.id) return column;
    //     return {
    //       ...column,
    //       taskIds: [...column.taskIds, action.payload.taskId],
    //     };
    //   });
    // },

    deleteColumn: (state, action) => {
      return state.filter((c) => c.id !== action.payload.columnId);
    },

    editColumn: (state, action) => {
      return state.map((c) =>
        c.id === action.payload.id ? { ...c, title: action.payload.title } : c
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(isAnyOf(deleteTask), (state, action) =>
        state.map((column) => {
          if (action.payload.columnId !== column.id) return column;

          return {
            ...column,
            taskIds: column.taskIds.filter((taskId) => {
              return taskId !== action.payload.taskId;
            }),
          };
        })
      )
      .addMatcher(isAnyOf(addTask), (state, action) =>
        state.map((column) => {
          if (action.payload.columnId !== column.id) return column;
          return {
            ...column,
            taskIds: [...column.taskIds, action.payload.id],
          };
        })
      );
  },
});

export const {
  handleOnDragEnd,
  addColumn,
  deleteColumn,
  editColumn,
  addTaskToColumn,
} = columnSlice.actions;

export default columnSlice.reducer;
