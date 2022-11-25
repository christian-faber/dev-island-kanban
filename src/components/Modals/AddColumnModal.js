import { useSelector, useDispatch } from "react-redux";
import clsx from "clsx";
import { addColumn } from "../../features/columnSlice";
import { closeColumnModal } from "../../features/modalSlice";
// import { Dropdown } from "./Dropdown";
import { useRef, useState } from "react";
import { addColumnToBoard } from "../../features/boardSlice";
import { v4 } from "uuid";
import { useBoard } from "../../app/hooks/useBoard";

//new column which appears on board is just a tiny modal
//that has a text area that takes a "column name" with a purple add btn
export const AddColumnModal = () => {
  const dispatch = useDispatch();
  const board = useBoard();
  const menuRef = useRef();
  const modalIsOpen = useSelector((state) => state.modal.columnOpen);
  const handleClickOutside = (evt) => {
    if (!menuRef.current.contains(evt.target)) {
      dispatch(closeColumnModal());
    }
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();

    const title = evt.target.elements.newColumn.value;
    if (!title) return;
    const columnId = v4();
    dispatch(addColumn({ title, id: columnId }));
    dispatch(addColumnToBoard({ columnId, boardId: board.id }));
    //grab state
    dispatch(closeColumnModal());
    evt.target.elements.newColumn.value = "";
  };
  return (
    <div
      onClick={handleClickOutside}
      className={clsx(
        { fixed: modalIsOpen, hidden: !modalIsOpen },
        " bg-gray-600  bg-opacity-50 h-full w-full z-20 flex justify-center align-center"
      )}
    >
      <form ref={menuRef} onSubmit={handleSubmit}>
        <div className=" bg-almost-white dark:bg-[#2B2C37]  p-5  w-64 rounded-lg max-h-1/4 my-[10%]">
          <div className="flex justify-between text-black dark:text-white">
            <h2>Column name</h2>
            <button onClick={() => dispatch(closeColumnModal())}>x</button>
          </div>
          <div className="my-4 flex flex-col">
            {/* <p className="text-light-gray text-sm leading-8">Board</p> */}
            {/* <BoardDropdown hanldeBoard={setBoard} /> */}

            <input
              name="newColumn"
              className="w-full text:black dark:text-white p-2 rounded border dark:bg-[#2B2C37] "
            ></input>

            {/* <div className="my-4 flex flex-col"> */}
            {/* <span> */}
            {/* <p className="text-light-gray text-sm leading-8">Board</p> */}
            {/* dropdown in fragment below! */}
            {/* <input
                placeholder="dropdown coming soon!"
                className="border w-96"
              ></input> */}
            {/* </span> */}
            <button
              type="submit"
              className=" p-2 my-4  shadow-sm text-white bg-purple-btn hover:bg-hover-purple rounded w-20"
            >
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
