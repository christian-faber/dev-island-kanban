// import { AddTaskMobile } from "./Icons/AddTaskMobile";
import { useDispatch } from "react-redux";
import { VerticalEllipsis } from "./Icons/VerticalEllipsis";
// import { Title } from "./Title";
import { openTaskModal } from "../features/modalSlice";

export const Top = () => {
  const dispatch = useDispatch();
  return (
    <div className="pl-80 flex flex-row  text-black ">
      <button
        className="p-2 rounded-full bg-purple-btn"
        onClick={() => {
          dispatch(openTaskModal());
        }}
      >
        +Add New Task
      </button>
      <VerticalEllipsis />
    </div>
  );
};
