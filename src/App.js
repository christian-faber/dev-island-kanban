import React, { useEffect, useState } from "react";
import { Board } from "./components/Board";
import { useSelector } from "react-redux";
import { AddColumnModal } from "./components/Modals/AddColumnModal";
import { AddTaskModal } from "./components/Modals/AddTaskModal";
import { TaskInfoModal } from "./components/Modals/TaskInfoModal";
import { AddBoardModal } from "./components/Modals/AddBoardModal";
import { Sidebar } from "./components/Sidebar";
import { Top } from "./components/Top";
import { Routes, Route, Navigate } from "react-router-dom";
// import { useSelector } from "react-redux";
import "./index.css";
import { Title } from "./components/Title";
export const LightContext = React.createContext();
export const BoardContext = React.createContext();

export const App = () => {
  const [light, setLight] = useState(true);

  const { taskOpen, infoOpen, columnOpen, boardOpen } = useSelector(
    (store) => store.modal
  );
  useEffect(() => {
    if (!light) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [light]);

  return (
    <LightContext.Provider value={{ light, setLight }}>
      <div className="font-jakarta overflow-x-auto bg-white dark:bg-gray-800">
        {taskOpen && <AddTaskModal />}
        {columnOpen && <AddColumnModal />}
        {infoOpen && <TaskInfoModal />}
        {boardOpen && <AddBoardModal />}
        <div className="">
          <Title />
          <Top />
          <div className="flex">
            <Sidebar />
            <div className="w-full">
              <Board />
              {/* <Routes>
                <Route path="/" element={<Navigate to="" />} />
                <Route path="/:boardId" element={<Board />} />
              </Routes> */}
            </div>
          </div>
        </div>
      </div>
    </LightContext.Provider>
  );
};

export default App;
