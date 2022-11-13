// import { AddTaskMobile } from "./Icons/AddTaskMobile";
import { useDispatch } from "react-redux";
import { VerticalEllipsis } from "../assets/VerticalEllipsis";
import { openTaskModal } from "../features/modalSlice";
import { useState } from "react";

//need onclick and function for edit and delete board

export const Top = () => {
  const dispatch = useDispatch();
  const [isOpen, setOpen] = useState(false);
  //

  //
  return (
    <div className="flex flex-row p-2">
      <div className="basis-9/12 flex flex-row">
        <p className="text-black  dark:text-white">Dev-Island Kanban App</p>
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
              <div className="cursor-pointer absolute top-10 right-5 rounded-lg p-2 w-64 border border-solid shadow-md bg-white dark:bg-gray-800 ">
                <ul className="py-2.5">
                  <li className="hover:bg-almost-white text-gray-600 rounded-lg p-1 dark:hover:bg-hover-purple">
                    Edit Boards
                  </li>
                  {/* edit board modal will have 
                  1. text area titled "Board Name" 
                  2.editable text area pre populated with current "Board Columns",X's on right hand side of each textbox to delete
                  3. 2 btns (+Add new column) and (Save changes) */}
                  <li className="text-red-500 hover:bg-almost-white  rounded-lg p-1 dark:hover:bg-hover-purple">
                    Delete Board
                  </li>
                  {/* delete board modal will have
                  1. Delete this board? red txt
                  2.<p>Are you sure you want to delete the a'board? This action can remove all columns and task and cannot be reversed.</p> text:gray
                  3. 2btns (Cancel) (Delete) red  */}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
