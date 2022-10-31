import { Board } from "./Board";
import { Menu } from "./Menu";
import { Sidebar } from "./Sidebar";
import { Top } from "./Top";

export const Kanban = () => {
  return (
    <>
      <div className="">
        <Top />
        <Menu />
        <div className="flex flex-row ">
          <Sidebar />
          <Board />
        </div>
      </div>
    </>
  );
};
