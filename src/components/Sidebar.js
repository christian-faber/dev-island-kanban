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

import clsx from "clsx";
import HideSidebarButton from "./HidesideBarButton";
import { Logo } from "./Logo";
import { DarkThemeIcon } from "../assets/DarkThemeIcon";
import { LightThemeIcon } from "../assets/LightThemeIcon";

export const Sidebar = () => {
  const boards = useSelector((state) => state.board);
  const sidebar = useSelector((state) => state.sidebar);
  const dispatch = useDispatch();
  const length = boards.length;

  //h-full  flex-col lg:w-[22%] w-[32%] overflow-y-hidden md:flex z-[100]
  return (
    <div className="">
      <div
        className={clsx(
          "transition-all duration-500   border-r dark:border-r-[#272832] p-5 bg-white dark:bg-[#2B2C37] overflow-y-hidden",
          sidebar === "show"
            ? "z-40 translate-x-0 opacity-100"
            : "-translate-x-[100%] -z-10 opacity-0"
        )}
      >
        <h1 className="  dark:text-slate-400 ">ALL BOARDS ({length})</h1>
        <br />
        <ul className="dark:text-slate-400 hover:text-violet-900">
          {boards?.map((board) => (
            <li
              board={board}
              columns={boards.columns}
              key={board.id}
              className="flex"
            >
              <SidebarIcon />
              <Link
                to={`/${board.title}`}
                className="pl-2 pb-8 dark:text-slate-400"
              >
                {board.title}
              </Link>
            </li>
          ))}
        </ul>
        {/* <button
        className="text-violet-900"
        onClick={() => {
          dispatch(openBoardModal());
        }}
      > */}
        {/* <h1 className=" border-l-gray-300  dark:text-slate-400 ">
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
              <Link
                to={`/${board.title}`}
                className="pl-2 pb-8 dark:text-slate-400"
              >
                {board.title}
              </Link>
            </li>
          ))}
        </ul>
        {/* <button
        className="text-violet-900"
        onClick={() => {
          dispatch(openBoardModal());
        }}

      > */}
        {/* <h1 className=" border-l-gray-300  dark:text-slate-400 ">
          ALL BOARDS ({length})
        </h1>
        <br />
        <div className="dark:text-slate-400 hover:text-violet-900">
          {boards?.map((board) => (
            <option
              to={`/${board.id}`}
              board={board}
              //href?
              columns={boards.columns}
              key={board.id}
              className="flex p-2"
            >
              <SidebarIcon />
              <h2 className="pl-2 pb-8 dark:text-slate-400">{board.title}</h2>
            </option>
          ))}
        </div> */}

        <div className="flex">
          <SidebarIcon />
          <button
            className="flex pl-2 font-semibold text-violet-800 justify-center items-center pb-52"
            onClick={() => {
              dispatch(openBoardModal());
            }}
          >
            + Create New Board
          </button>
        </div>

        <div className="flex  bg-indigo-100 dark:bg-[#20212C] rounded-md h-12 justify-center items-center">
          <div className="flex space-x-8">
            <DarkThemeIcon />
            <ToggleSlider />
            <LightThemeIcon />
          </div>
        </div>

        <div className="flex p-2 ">
          <HideSidebarButton />
          <h2 className="flex dark:text-slate-400 pl-2">Hide Sidebar</h2>
        </div>
      </div>
    </div>
  );
};
