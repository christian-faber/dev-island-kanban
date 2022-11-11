import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { store } from "./store/store";
import { Board } from "./components/Board";
import { AddColumnModal } from "./components/Modals/AddColumnModal";
import { AddTaskModal } from "./components/Modals/AddTaskModal";
import { TaskInfoModal } from "./components/Modals/TaskInfoModal";
import { AddBoardModal } from "./components/Modals/AddBoardModal";
import { Sidebar } from "./components/Sidebar";
import { Top } from "./components/Top";
import "./index.css";
import { Title } from "./components/Title";
export const App = () => {
  const [light, setLight] = useState(true);
  const { taskOpen, infoOpen, columnOpen, boardOpen } = useSelector(
    (store) => store.modal
  );

  return (
    <div className="font-jakarta h-full w-full flex flex-row font-sans bg-blue-50">
      {taskOpen && <AddTaskModal />}
      {columnOpen && <AddColumnModal />}
      {infoOpen && <TaskInfoModal />}
      {boardOpen && <AddBoardModal />}
      <div className="flex flex-col bg-white border-2  border-r-neutral-100">
        <div className="p-2">
          <Title />
        </div>
        <div className="">
          <Sidebar />
        </div>
      </div>
      <div className="position-absolute p-4 bg-white">
        <Top />
        <div className="p-2">
          <Board />
        </div>
      </div>
    </div>
  );
};

export default App;
