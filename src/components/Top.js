// import { AddTaskMobile } from "./Icons/AddTaskMobile";
import { useDispatch } from "react-redux";
import { VerticalEllipsis } from "./Icons/VerticalEllipsis";
import { Title } from "./Title";
import { openTaskModal } from "../features/modalSlice";

export const Top = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-row  text-black ">
      <div className="pr-2">
        <Title />
      </div>
      <div className="flex flex-row ">
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
    </div>
  );
};
