import { useDispatch } from "react-redux";
import { HideSidebarIcon } from "../assets/HideSidebarIcon";
import { hide } from "../features/sidebarSlice";
export default function HideSidebarButton() {
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => {
        dispatch(hide());
      }}
      className="space-x-4 cursor-pointer flex items-center justify-start "
    >
      <HideSidebarIcon
        onClick={() => {
          dispatch(hide());
        }}
      />
      {/* <span className="text-gray-500 dark:text-[#828FA3] font-semibold text-[15px]">
        Hide sidebar
      </span> */}
    </div>
  );
}
