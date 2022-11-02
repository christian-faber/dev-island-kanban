import { data } from "autoprefixer";

export const initialdata = {
  columns: [
    {
      id: "c1",
      title: "To Do",
      taskIds: ["t-1", "t-2"],
    },
    {
      id: "c2",
      title: "Doing",
      taskIds: ["t-3", "t-4"],
    },
    {
      id: "c3",
      title: "Done",
      taskIds: ["t-5", "t-6"],
    },
  ],
  tasks: [
    {
      id: "t-1",
      content: "Caffeinate",
      subtasks: ["st-1"],
    },
    {
      id: "t-2",
      content: "Finish this Goddamn project",
      subtasks: ["st-2", "st-3"],
    },
    {
      id: "t-3",
      content: "Recenter",
      subtasks: ["st-4"],
    },
    {
      id: "t-4",
      content: "Freak out more",
      subtasks: ["st-5"],
    },
    {
      id: "t-5",
      content: "Set placeholder data structures",
      subtasks: [],
    },
    {
      id: "t-6",
      content: "Freak out",
      subtasks: ["st-6"],
    },
  ],
  subtasks: [
    {
      id: "st-1",
      content: "Grab the right sized cup",
    },
    {
      id: "st-2",
      content: "Set up redux state logic",
    },
    {
      id: "st-3",
      content: "Make pretty",
    },
    {
      id: "st-4",
      content: "Breath while recognizing nothing is actually real",
    },
    {
      id: "st-5",
      content: "Maybe break something other than the app",
    },
    {
      id: "st-6",
      content: "Cry to Duckey",
    },
  ],
};

export default initialdata;
