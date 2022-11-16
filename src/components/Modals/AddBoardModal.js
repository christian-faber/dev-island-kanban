import { useSelector, useDispatch } from "react-redux";
import clsx from "clsx";
import { addBoard } from "../../features/boardSlice";
import { closeBoardModal } from "../../features/modalSlice";
import { Dropdown } from "./Dropdown";

// Title
// Columns
// Description

export const AddBoardModal = () => {
  const dispatch = useDispatch();
  const modalIsOpen = useSelector((state) => state.modal.boardOpen);
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const title = evt.target.elements.newBoard.value;
    if (!title) return;
    dispatch(addBoard(title));
    dispatch(closeBoardModal());

    evt.target.elements.newBoard.value = "";
  };
  return (
    <div
      className={clsx(
        { fixed: modalIsOpen, hidden: !modalIsOpen },
        "bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-10 flex justify-center align-center"
      )}
    >
      <form onSubmit={handleSubmit}>
        <div className="relative z-50 bg-almost-white dark:bg-[#2B2C37] p-5  rounded-lg max-h-1/4 my-[10%]">
          <div className="flex justify-between text-black pr-2  items-center ">
            <h2 className="font-bold text-lg dark:text-white">Add New Board</h2>
            <button onClick={() => dispatch(closeBoardModal())}>x</button>
          </div>
          <div className="my-4 flex flex-col">
            <p className="text-light-gray text-sm leading-8">Board name</p>
            <input
              name="newBoard"
              placeholder=""
              className="border w-96 rounded"
            ></input>
          </div>
          <div className="my-4">
            <p className="text-light-gray text-sm leading-8">Columns</p>
            <textarea
              name="columns"
              placeholder="columns here"
              className="border w-96"
            ></textarea>
          </div>
          <div className="flex flex-col">
            <button
              type="submit"
              className="align-center p-2 h-10 my-4 border shadow-sm text-white bg-purple-btn hover:bg-hover-purple rounded-full w-90"
            >
              + Add new column
            </button>
            <button
              type="submit"
              className="align-center p-2 h-10 my-4 border shadow-sm text-white bg-purple-btn hover:bg-hover-purple rounded-full w-90"
            >
              Create Board
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
