import { useSelector } from "react-redux";
import { store } from "./app/store";
import { Board } from "./components/Board";
import { AddColumnModal } from "./components/Modals/AddColumnModal";
import { AddTaskModal } from "./components/Modals/AddTaskModal";
import { TaskInfoModal } from "./components/Modals/TaskInfoModal";
import { Sidebar } from "./components/Sidebar";
import { Top } from "./components/Top";
import "./index.css";

export const App = () => {
  const { taskOpen, infoOpen, columnOpen } = useSelector(
    (store) => store.modal
  );

  return (
    <div className="p-5 w-96 h-96 border-solid border-2 border-red flex flex-row">
      {taskOpen && <AddTaskModal />}
      {columnOpen && <AddColumnModal />}
      {infoOpen && <TaskInfoModal />}

      <Sidebar />
      <div className="w-80 h-80 border-blue border">
        <Top />
        <Board />
      </div>
    </div>
  );
};

export default App;
