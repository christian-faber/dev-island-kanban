import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { SidebarIcon } from "../assets/SidebarIcon";
import { ToggleSlider } from "./ToggleSlider";
import { openBoardModal } from "../features/modalSlice";

export const Sidebar = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.board);
  const length = data.boards.length;
  return (
    <div className="w-96 p-5 bg-white dark:bg-gray-800 ">
      {/* || pl-6 h-full */}
      <h1 className=" border-l-gray-300  dark:text-white ">
        ALL BOARDS ({length})
      </h1>
      <br />
      <div className="text-middle-gray hover:text-violet-900">
        {data?.boards?.map((board) => (
          <div>
            <SidebarIcon />
            <h2>{board.title}</h2>
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
