import React, { useEffect, useState } from "react";
import { Board } from "./components/Board";
import { useSelector } from "react-redux";
import { AddColumnModal } from "./components/Modals/AddColumnModal";
import { AddTaskModal } from "./components/Modals/AddTaskModal";
import { TaskInfoModal } from "./components/Modals/TaskInfoModal";
import { AddBoardModal } from "./components/Modals/AddBoardModal";
import Sidebar from "./components/Sidebar";
import { Top } from "./components/Top";
import { Routes, Route, Navigate } from "react-router-dom";
// import { useSelector } from "react-redux";
import "./index.css";

import { Logo } from "./components/Logo";
import ShowSidebar from "./components/ShowSidebar";
import { SidebarModal } from "./components/Modals/SidebarModal";
export const LightContext = React.createContext();
export const BoardContext = React.createContext();

export const App = () => {
  const [light, setLight] = useState(true);

  const { taskOpen, infoOpen, columnOpen, boardOpen, sidebarModalOpen } =
    useSelector((store) => store.modal);

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
        {sidebarModalOpen && <SidebarModal />}
        <div className=" dark:bg-[#2B2C37]">
          {/* <Logo /> */}
          <Top />
          <div className="flex ">
            <Sidebar />
            <div className="w-full">
              <Board />
              <div className="">
                <ShowSidebar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </LightContext.Provider>
  );
};

export default App;
