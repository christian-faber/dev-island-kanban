import { useSelector, useDispatch } from "react-redux";
import clsx from "clsx";
import { editBoard } from "../../features/boardSlice";
import { closeEditBoard } from "../../features/modalSlice";
import { useRef } from "react";

// Title
// Columns
// Description

export const EditBoardModal = () => {
  const dispatch = useDispatch();
  const modalIsOpen = useSelector((state) => state.modal.editBoardOpen);
  const defaultTitle = useSelector((state) => state.board.title);
  const handleClickOutside = (evt) => {
    if (!menuRef.current.contains(evt.target)) {
      dispatch(closeEditBoard());
    }
  };
  const menuRef = useRef();
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const title = evt.target.elements.editTitle.value;
    if (!title) return;
    dispatch(editBoard(title));
    dispatch(closeEditBoard());
    evt.target.elements.editTitle.value = "";
  };

  return (
    <div
      onClick={handleClickOutside}
      className={clsx(
        { fixed: modalIsOpen, hidden: !modalIsOpen },
        "bg-gray-600  bg-opacity-50 overflow-y-auto h-full w-full z-50 flex justify-center align-center"
      )}
    >
      <form ref={menuRef} onSubmit={handleSubmit}>
        <div className=" dark:bg-[#2B2C37] bg-almost-white p-5  rounded-lg max-h-1/4 my-[10%]">
          <div className="dark:text-white font-bold flex justify-between text-black ">
            <h2>Edit Board</h2>
            <button onClick={() => dispatch(closeEditBoard())}>x</button>
          </div>
          <div className="my-4 flex flex-col">
            <p className="dark:text-white text-sm leading-8">Board name</p>
            <input
              name="editTitle"
              type="text"
              value={defaultTitle}
              placeholder={defaultTitle}
              className="border rounded dark:bg-[#2B2C37] "
            ></input>
          </div>

          <button
            type="submit"
            className="align-center p-2 h-10 my-4  shadow-sm text-white bg-purple-btn hover:bg-hover-purple rounded-full w-90"
          >
            Change Board
          </button>
        </div>
      </form>
    </div>
  );
};
