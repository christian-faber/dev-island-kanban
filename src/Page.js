import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { useBoard } from "./app/hooks/useBoard";
import { Sidebar } from "./components/Sidebar";
import { Title } from "./components/Title";
import { Top } from "./components/Top";
import { AddColumnModal } from "./components/Modals/AddColumnModal";
import { AddTaskModal } from "./components/Modals/AddTaskModal";
import { TaskInfoModal } from "./components/Modals/TaskInfoModal";
import { AddBoardModal } from "./components/Modals/AddBoardModal";
import { EditBoardModal } from "./components/Modals/EditBoardModal";

export const Page = () => {
  const board = useBoard();
  const { taskOpen, infoOpen, columnOpen, boardOpen, editBoardOpen } =
    useSelector((store) => store.modal);

  return (
    <>
      {taskOpen && <AddTaskModal />}
      {columnOpen && <AddColumnModal />}
      {infoOpen && <TaskInfoModal />}
      {boardOpen && <AddBoardModal />}
      {editBoardOpen && <EditBoardModal />}
      <div className="dark:bg-[#2B2C37]">
        <Top board={board} />
        <div className="flex">
          <Sidebar />
          <div className="w-full">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};
