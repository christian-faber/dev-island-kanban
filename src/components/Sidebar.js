import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { SidebarIcon } from "./Icons/SidebarIcon";
import { ToggleSlider } from "./ToggleSlider";
import { openBoardModal } from "../features/modalSlice";

export const Sidebar = () => {
  const dispatch = useDispatch();
  return (
    <div className="p-5 bg-white">
      <h1 className="pt-8 text-middle-gray">ALL BOARDS (1)</h1>
      <br />
      <SidebarIcon />
      <div className=" text-middle-gray hover:text-violet-900">
        Dev-Island Kanban App
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
