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
          <Top />
          <div className="flex">
            <div className="hidden md:flex lg:flex">
              <Sidebar />
            </div>
            <div className="flex-1 ">
              <Board />
            </div>
          </div>
        </div>
      </div>
      <div className="flex">
        <ShowSidebar />
      </div>
    </LightContext.Provider>
  );
};

export default App;
//after 32:
// return (
//   <LightContext.Provider value={{ light, setLight }} store={store}>
//     <div className="font-jakarta overflow-x-auto bg-white dark:bg-gray-800">
//       <Routes>
//         <Route element={<Page />}>
//           <Route path="/" element={<Start />} />
//           <Route path="/:boardName" element={<Board />} />
//         </Route>
//       </Routes>
//     </div>
//   </LightContext.Provider>
// );
// };

// export default App;
