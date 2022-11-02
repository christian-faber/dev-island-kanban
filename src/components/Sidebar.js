import React from "react";
import { SidebarIcon } from "./Icons/SidebarIcon";
import { ToggleSlider } from "./ToggleSlider";

export const Sidebar = () => {
  return (
    <div className="border ">
      <h1 className="text-black pt-8">ALL BOARDS (3)</h1>
      <br />
      <SidebarIcon />{" "}
      <div className="text-black hover:text-violet-900">Marketing Plan</div>
      <SidebarIcon />
      <div className="text-black hover:text-violet-900">Platform Launch</div>
      <SidebarIcon />
      <SidebarIcon />
      <ToggleSlider />
    </div>
  );
};
