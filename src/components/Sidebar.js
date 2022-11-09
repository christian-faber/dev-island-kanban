import React from "react";
import { SidebarIcon } from "./Icons/SidebarIcon";
import { ToggleSlider } from "./ToggleSlider";
export const Sidebar = () => {
  return (
    <div className="p-5 bg-white">
      <h1 className="pt-8 text-middle-gray">ALL BOARDS (1)</h1>
      <br />
      <SidebarIcon />
      <div className=" text-middle-gray hover:text-violet-900">
        Dev-Island Kanban App
      </div>
      <ToggleSlider />
    </div>
  );
};
