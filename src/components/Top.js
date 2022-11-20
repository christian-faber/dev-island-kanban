// import { AddTaskMobile } from "./Icons/AddTaskMobile";
import { useDispatch, useSelector } from "react-redux";
import { VerticalEllipsis } from "../assets/VerticalEllipsis";
import { openSidebarModal, openTaskModal } from "../features/modalSlice";
import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "../assets/ChevronDown";
import { deleteBoard } from "../features/boardSlice";
import { AddTaskMobile } from "../assets/AddTaskMobile";
// import { LogoMobile } from "../assets/LogoMobile";

//need onclick and function for edit and delete board

export const Top = () => {
  const dispatch = useDispatch();
  const ref = useRef();
  const [isOpen, setOpen] = useState(false);
  const { board } = useSelector((state) => state.board);

  const handleDelete = (evt) => {
    dispatch(deleteBoard(board.id));
  };
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (isOpen && ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [isOpen]);
  return (
    <div className="flex p-2  h-20">
      <div className="absolute top-7  p-2 py-3 px-6">
        <h1>{board?.title}</h1>
        <button
          className="cursor-pointer lg:-scale-0"
          onClick={() => {
            dispatch(openSidebarModal());
          }}
        >
          <ChevronDown />
        </button>
      </div>
      <div className="">
        <div className="">
          <button
            className="-scale-0 lg:scale-100 text-white absolute right-16 p-2 py-3 px-6 rounded-full bg-purple-btn "
            onClick={() => {
              dispatch(openTaskModal());
            }}
          >
            +Add New Task
          </button>
        </div>
        <div className="">
          <div
            onClick={() => {
              dispatch(openTaskModal());
            }}
            className="rounded-xl top-4 lg:hidden text-white absolute right-20 p-2
           bg-purple-btn"
          >
            <AddTaskMobile />
          </div>
          <div
            onClick={() => setOpen(!isOpen)}
            className="top-5 right-9  absolute cursor-pointer"
          >
            <VerticalEllipsis />
          </div>
        </div>

        {isOpen && (
          <div
            ref={ref}
            className="z-20 cursor-pointer absolute top-10 right-5 rounded-lg p-2 w-64 shadow-md bg-white dark:bg-gray-800 "
          >
            <ul className="py-2.5">
              <li className="hover:bg-almost-white text-gray-600 rounded-lg p-1 dark:hover:bg-hover-purple">
                Edit Boards
              </li>
              {/* edit board modal will have 
                  1. text area titled "Board Name" 
                  2.editable text area pre populated with current "Board Columns",X's on right hand side of each textbox to delete
                  3. 2 btns (+Add new column) and (Save changes) */}
              <li
                onClick={handleDelete}
                className="text-red-500 hover:bg-almost-white  rounded-lg p-1 dark:hover:bg-hover-purple"
              >
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
  );
};
