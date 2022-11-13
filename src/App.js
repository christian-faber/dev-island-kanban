import React, { useEffect, useState } from "react";
import { Board } from "./components/Board";
import { useSelector } from "react-redux";
import { AddColumnModal } from "./components/Modals/AddColumnModal";
import { AddTaskModal } from "./components/Modals/AddTaskModal";
import { TaskInfoModal } from "./components/Modals/TaskInfoModal";
import { AddBoardModal } from "./components/Modals/AddBoardModal";
import { Sidebar } from "./components/Sidebar";
import { Top } from "./components/Top";
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
      {/* <BoardContext.Provider value={board}> */}
      <div className="font-jakarta overflow-x-auto bg-white dark:bg-gray-800">
        {taskOpen && <AddTaskModal />}
        {columnOpen && <AddColumnModal />}
        {infoOpen && <TaskInfoModal />}
        {boardOpen && <AddBoardModal />}
        <div className="">
          <Title />
          <Top />
          <div className="">
            <Sidebar />
            <div className=" ">
              <Board />
            </div>
          </div>
        </div>
      </div>
      {/* </BoardContext.Provider> */}
    </LightContext.Provider>
  );
};

export default App;
