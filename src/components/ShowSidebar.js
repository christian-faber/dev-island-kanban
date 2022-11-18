import clsx from "clsx";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ShowSidebarIcon } from "../assets/ShowSidebarIcon";
import { show } from "../features/sidebarSlice";

export default function ShowSidebar() {
  const sidebar = useSelector((state) => state.sidebar);
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => {
        dispatch(show());
      }}
      className={clsx(
        sidebar === "show"
          ? "hidden"
          : "bg-indigo-800 z-50 absolute bottom-12 flex justify-center items-center rounded-r-full px-4 py-2 w-14 h-14 dark:hover:bg-indigo-800"
      )}
    >
      <ShowSidebarIcon />
    </button>
  );
}
