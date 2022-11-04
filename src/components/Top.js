// import { AddTaskMobile } from "./Icons/AddTaskMobile";
import { useDispatch } from "react-redux";
import { VerticalEllipsis } from "./Icons/VerticalEllipsis";
import { Title } from "./Title";
import { openTaskModal } from "../features/modalSlice";
import { useState } from "react";

export const Top = () => {
  const dispatch = useDispatch();
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="pl-80 flex flex-row text-black ">
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
        {isOpen && (
          <div className="w-5">
            <button>Edit Boards</button>
            <button>Edit Columns</button>
          </div>
        )}
        <div onClick={() => setOpen(!isOpen)} className="p-10">
          <VerticalEllipsis />
        </div>
      </div>
    </div>
  );
};
