import { useSelector, useDispatch } from "react-redux";
import clsx from "clsx";
import { addBoard } from "../../features/boardSlice";
import { closeBoardModal } from "../../features/modalSlice";
import { Dropdown } from "./ColumnDropdown";

// Title
// Columns
// Description

export const AddBoardModal = () => {
  const dispatch = useDispatch();
  const modalIsOpen = useSelector((state) => state.modal.boardOpen);
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const title = evt.target.elements.newBoard.value;
    const description = evt.target.elements.newDescription.value;
    if (!title || !description) return;
    dispatch(addBoard(title, description));
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
        <div className=" border bg-almost-white p-5 z-50 rounded-lg max-h-1/4 my-[10%]">
          <div className="flex justify-between text-black w-96">
            <h2>Add New Board</h2>
            <button onClick={() => dispatch(closeBoardModal())}>x</button>
          </div>
          <div className="my-4 flex flex-col">
            <p className="text-light-gray text-sm leading-8">Board Title</p>
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
            onClick={(handleSubmit) => {
              dispatch(closeBoardModal(), addBoard());
            }}
            className="align-center p-2 h-10 my-4 border shadow-sm text-white bg-purple-btn hover:bg-hover-purple rounded-full w-90"
          >
            Create Board
          </button>
        </div>
      </form>
    </div>
  );
};
