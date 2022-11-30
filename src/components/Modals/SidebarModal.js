import clsx from "clsx";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DarkThemeIcon } from "../../assets/DarkThemeIcon";
import { LightThemeIcon } from "../../assets/LightThemeIcon";
import { SidebarIcon } from "../../assets/SidebarIcon";
import { addBoard } from "../../features/boardSlice";
import { closeSidebarModal, openBoardModal } from "../../features/modalSlice";
import { ToggleSlider } from "../ToggleSlider";

export const SidebarModal = () => {
  //use state for status?
  const modalIsOpen = useSelector((state) => state.modal.sidebarModalOpen);
  const boards = useSelector((state) => state.board);
  const sidebar = useSelector((state) => state.sidebar);
  const handleClickOutside = (evt) => {
    if (!menuRef.current.contains(evt.target)) {
      dispatch(closeSidebarModal());
    }
  };
  const menuRef = useRef();
  const dispatch = useDispatch();
  const length = boards.length;
  const handleClick = (evt) => {
    dispatch(openBoardModal());
    dispatch(closeSidebarModal());
  };

  return (
    <div
      onClick={handleClickOutside}
      className="bg-gray-600 bg-opacity-50 h-full w-full"
    >
      <div
        ref={menuRef}
        className={clsx(
          { fixed: modalIsOpen, hidden: !modalIsOpen },
          "bg-almost-white z-50 overflow-y-auto flex flex-col justify-center align-center"
        )}
      >
        <h1 className=" border-l-gray-300  dark:text-slate-400 ">
          ALL BOARDS ({length})
        </h1>
        <br />
        <div className="dark:text-slate-400 hover:text-violet-900">
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
        <div className="flex  bg-indigo-100 dark:bg-[#20212C] rounded-md h-12 justify-center items-center">
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
