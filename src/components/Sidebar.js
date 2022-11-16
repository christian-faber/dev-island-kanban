import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { SidebarIcon } from "../assets/SidebarIcon";
import { ToggleSlider } from "./ToggleSlider";
import { openBoardModal } from "../features/modalSlice";

export const Sidebar = () => {
  const boards = useSelector((state) => state.board);
  const dispatch = useDispatch();
  const length = boards.length;
  return (
    <div className="w-96 p-5 bg-white dark:bg-gray-800 ">
      {/* || pl-6 h-full */}
      <h1 className=" border-l-gray-300  dark:text-slate-400 ">
        ALL BOARDS ({length})
      </h1>
      <br />
      <div className="dark:text-slate-400 hover:text-violet-900">
        {boards?.map((board) => (
          <div
            board={board}
            columns={boards.columns}
            key={board.id}
            className="flex p-2"
          >
            <SidebarIcon />
            <h2 className="pl-2 pb-8 dark:text-slate-400">{board.title}</h2>
          </div>
        ))}
      </div>
      <button
        className="text-violet-900"
        onClick={() => {
          dispatch(openBoardModal());
        }}
      >
        + Create New Board
      </button>
      <div className="pt-24">
        <ToggleSlider />
      </div>
    </div>
  );
};
