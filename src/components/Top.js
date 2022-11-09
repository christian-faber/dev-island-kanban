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

          <div
          // container
          >
            <div
              //trigger
              onClick={() => setOpen(!isOpen)}
              // className="p-10 absolute h-15 w-15 rounded-lg overflow-hidden cursor-pointer"
            >
              <VerticalEllipsis className="p-10 absolute h-15 w-15 rounded-lg overflow-hidden cursor-pointer" />
            </div>
            {isOpen && (
              <div className="absolute top-25 right-5 rounded-lg p-5 w-50 border border-solid shadow-md bg-white">
                <ul className="py-2.5">
                  <li className="hover:bg-almost-white rounded-lg p-1">
                    Edit Boards
                  </li>
                  <li className="hover:bg-almost-white rounded-lg p-1">
                    Edit Columns
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
