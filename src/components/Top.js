// import { AddTaskMobile } from "./Icons/AddTaskMobile";
import { useDispatch } from "react-redux";
import { VerticalEllipsis } from "./Icons/VerticalEllipsis";
import { openTaskModal } from "../features/modalSlice";
import { useState } from "react";

export const Top = () => {
  const dispatch = useDispatch();
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="flex flex-row">
      <div className="basis-9/12 flex flex-row">
        <p className="text-black">Dev-Island Kanban App</p>
      </div>
      <div className="">
        <div className="flex flex-row">
          <button
            className="text-white p-2 rounded-full bg-purple-btn"
            onClick={() => {
              dispatch(openTaskModal());
            }}
          >
            +Add New Task
          </button>
          {isOpen && (
            <div className="">
              <button>Edit Boards</button>
              <button>Edit Columns</button>
            </div>
          )}
          <div onClick={() => setOpen(!isOpen)} className="p-3">
            <VerticalEllipsis />
          </div>
        </div>
      </div>
    </div>
  );
};
