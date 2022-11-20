import clsx from "clsx";
import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DarkThemeIcon } from "../../assets/DarkThemeIcon";
import { LightThemeIcon } from "../../assets/LightThemeIcon";
import { SidebarIcon } from "../../assets/SidebarIcon";
import { addBoard } from "../../features/boardSlice";
import { closeSidebarModal, openBoardModal } from "../../features/modalSlice";
import { hide } from "../../features/sidebarSlice";
import { ToggleSlider } from "../ToggleSlider";
export const SidebarModal = () => {
  //use state for status?
  const modalIsOpen = useSelector((state) => state.modal.sidebarModalOpen);
  const boards = useSelector((state) => state.board);
  const sidebar = useSelector((state) => state.sidebar);
  const dispatch = useDispatch();
  const ref = useRef();
  const [isOpen, setOpen] = useState(false);
  const length = boards.length;

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

  const handleClick = (evt) => {
    dispatch(openBoardModal());
    dispatch(closeSidebarModal());
  };

  return (
    <div
      className={clsx(
        { fixed: modalIsOpen, hidden: !modalIsOpen },
        " bg-gray-600 z-10 bg-opacity-50 h-full w-full justify-center align-center"
      )}
    >
      <div className=" bg-almost-white dark:bg-[#2B2C37] w-48 p-5 rounded-lg ">
        <div className="flex p-2">
          <h1 className="pr-5 dark:text-slate-400 ">ALL BOARDS ({length})</h1>
          <button
            className="bg-violet-800 text-white rounded-2xl p-1"
            onClick={() => dispatch(closeSidebarModal())}
          >
            x
          </button>
        </div>

        <div className="dark:text-slate-400 hover:text-violet-900 pt-5">
          {boards?.map((board) => (
            <option
              to={`/${board.id}`}
              board={board}
              //href?
              columns={boards.columns}
              key={board.id}
              className="flex p-2"
            >
              <SidebarIcon />

              <h2 className="pl-2 pb-8 dark:text-slate-400">{board.title}</h2>
            </option>
          ))}
        </div>
        <button
          className="flex font-semibold text-violet-800 justify-center items-center pb-5"
          onClick={handleClick}
        >
          + Create New Board
        </button>
        <div className="flex p-2 rounded-lg bg-indigo-100 dark:bg-[#20212C] justify-center items-center">
          <div className="flex space-x-8">
            <DarkThemeIcon />
            <ToggleSlider />
            <LightThemeIcon />
          </div>
        </div>
      </div>
    </div>
  );
};
