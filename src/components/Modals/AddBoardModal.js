import { useSelector, useDispatch } from "react-redux";
import clsx from "clsx";
import { addBoard } from "../../features/boardSlice";
import { closeBoardModal } from "../../features/modalSlice";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

export const AddBoardModal = () => {
  const menuRef = useRef();
  const dispatch = useDispatch();
  const modalIsOpen = useSelector((state) => state.modal.boardOpen);
  const navigate = useNavigate();
  const handleClickOutside = (evt) => {
    if (!menuRef.current.contains(evt.target)) {
      dispatch(closeBoardModal());
    }
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const title = evt.target.elements.newBoard.value;
    if (!title) return;
    dispatch(addBoard(title));
    dispatch(closeBoardModal());
    navigate(`/${title}`);
    evt.target.elements.newBoard.value = "";
  };

  return (
    <div
      onClick={handleClickOutside}
      className={clsx(
        { fixed: modalIsOpen, hidden: !modalIsOpen },
        "bg-gray-600 z-10 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center align-center"
      )}
    >
      <form onSubmit={handleSubmit} ref={menuRef}>
        <div className=" dark:bg-[#2B2C37] bg-almost-white p-5  rounded-lg max-h-1/4 my-[10%] z-12">
          <div className="dark:text-white font-bold flex justify-between text-black">
            <h2>Add New Board</h2>
            <button onClick={() => dispatch(closeBoardModal())}>x</button>
          </div>
          <div className="my-4 flex flex-col">
            <p className="dark:text-white  text-sm leading-8">Board name</p>
            <input
              name="newBoard"
              placeholder=""
              className="w-60 text:black dark:text-white p-2 rounded border dark:bg-[#2B2C37]"
            ></input>
          </div>

          <button
            type="submit"
            className="align-center p-2 h-10 my-4  shadow-sm text-white bg-purple-btn hover:bg-hover-purple rounded-full w-90"
          >
            Create new board
          </button>
        </div>
      </form>
    </div>
  );
};
