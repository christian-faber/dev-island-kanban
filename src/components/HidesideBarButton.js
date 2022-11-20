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
    </div>
  );
}
