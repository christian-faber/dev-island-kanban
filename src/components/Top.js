// import { AddTaskMobile } from "./Icons/AddTaskMobile";
import { useDispatch } from "react-redux";
import { VerticalEllipsis } from "../assets/VerticalEllipsis";
import { openTaskModal } from "../features/modalSlice";
import { useState, useRef, useEffect } from "react";
import { deleteBoard } from "../features/boardSlice";
import { useSelector } from "react-redux";

//need onclick and function for edit and delete board

export const Top = () => {
  const dispatch = useDispatch();
  const ref = useRef();
  const [isOpen, setOpen] = useState(false);
  const { board } = useSelector((state) => state);

  const handleDelete = (evt) => {
    dispatch(deleteBoard(board.id));
  };
  //
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

  //
  return (
    <div className="flex p-2">
      {/* <div className="basis-9/12 flex flex-row">
        <p className="text-black  dark:text-white">Dev-Island Kanban App</p>
      </div> */}
      <div className=""></div>
      <div className="flex flex-row">
        <button
          className="text-white absolute top-7 right-16  p-2 py-3 px-6  rounded-full bg-purple-btn"
          onClick={() => {
            dispatch(openTaskModal());
          }}
        >
          +Add New Task
        </button>
        <div
          //trigger
          onClick={() => setOpen(!isOpen)}
          className="top-0 right-0 p-10 absolute h-15 w-15  cursor-pointer"
        >
          <VerticalEllipsis />
        </div>

        {isOpen && (
          <div
            ref={ref}
            className="cursor-pointer absolute top-10 right-5 rounded-lg p-2 w-64 border border-solid shadow-md bg-white dark:bg-gray-800 "
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
