import { useSelector } from "react-redux";
import { store } from "./app/store";
import { Board } from "./components/Board";
import { AddColumnModal } from "./components/Modals/AddColumnModal";
import { AddTaskModal } from "./components/Modals/AddTaskModal";
import { TaskInfoModal } from "./components/Modals/TaskInfoModal";
import { Sidebar } from "./components/Sidebar";
import { Top } from "./components/Top";
import "./index.css";
import { Title } from "./components/Title";
export const App = () => {
  const { taskOpen, infoOpen, columnOpen } = useSelector(
    (store) => store.modal
  );

  return (
    <div className="p-5 h-full w-full flex flex-row font-sans">
      {taskOpen && <AddTaskModal />}
      {columnOpen && <AddColumnModal />}
      {infoOpen && <TaskInfoModal />}
      <div className="p-2 position absolute">
        <Title />
      </div>
      <div className="">
        <Sidebar />
      </div>
      <div className="p-4">
        <Top />
        <div className="p-2">
          <Board />
        </div>
      </div>
    </div>
  );
};

export default App;
