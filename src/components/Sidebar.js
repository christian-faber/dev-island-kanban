import { SidebarIcon } from "./Icons/SidebarIcon";
export const Sidebar = () => {
  return (
    <div className="border ">
      <h1 className="text-light-gray pt-8">ALL BOARDS (3)</h1>
      <br />
      <SidebarIcon />{" "}
      <div className="text-light-gray hover:text-white">Marketing Plan</div>
      <SidebarIcon />
      <div className="text-light-gray hover:text-white">Platform Launch</div>
      <SidebarIcon />
      <SidebarIcon />
    </div>
  );
};
