import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SidebarIcon } from "../assets/SidebarIcon";
import { ToggleSlider } from "./ToggleSlider";
import { openBoardModal } from "../features/modalSlice";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
} from "react-router-dom";

export const Sidebar = () => {
  const boards = useSelector((state) => state.board);
  const dispatch = useDispatch();
  const length = boards.length;
  // const [board, setBoard] = useState();
  return (
    <div className="w-96 p-5 bg-white dark:bg-gray-800 ">
      {/* || pl-6 h-full */}
      <h1 className=" border-l-gray-300  dark:text-slate-400 ">
        ALL BOARDS ({length})
      </h1>
      <br />
      <ul className="dark:text-slate-400 hover:text-violet-900">
        {boards?.map((board) => (
          <li
            board={board}
            columns={boards.columns}
            key={board.id}
            className="flex p-2"
          >
            <SidebarIcon />
            <a
              href={`/${board.title}`}
              className="pl-2 pb-8 dark:text-slate-400"
            >
              {board.title}
            </a>
          </li>
        ))}
      </ul>
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
