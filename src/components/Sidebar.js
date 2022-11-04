import React from "react";
import { SidebarIcon } from "./Icons/SidebarIcon";
import { ToggleSlider } from "./ToggleSlider";

export const Sidebar = () => {
  return (
    <div className="p-5">
      <h1 className="pt-8 text-middle-gray">ALL BOARDS (3)</h1>
      <br />
      <SidebarIcon />{" "}
      <div className=" text-middle-gray hover:text-violet-900">
        Marketing Plan
      </div>
      <SidebarIcon />
      <div className=" text-light-gray hover:text-violet-900">
        Platform Launch
      </div>
      <SidebarIcon />
      <ToggleSlider />
    </div>
  );
};
