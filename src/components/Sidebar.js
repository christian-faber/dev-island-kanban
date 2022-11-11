import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { SidebarIcon } from "./Icons/SidebarIcon";
import { ToggleSlider } from "./ToggleSlider";
import { openBoardModal } from "../features/modalSlice";

export const Sidebar = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.board);
  const length = data.boards.length;
  return (
    <div className="p-5 bg-white">
      <h1 className="pt-8 text-middle-gray">ALL BOARDS ({length})</h1>
      <br />
      <div className=" text-middle-gray hover:text-violet-900">
        {data?.boards?.map((board) => (
          <div>
            <SidebarIcon />
            <h2>{board.title}</h2>
          </div>
        ))}
      </div>
      <button
        className="text-violet-700"
        onClick={() => {
          dispatch(openBoardModal());
        }}
      >
        Create New Board +
      </button>
      <ToggleSlider />
    </div>
  );
};
