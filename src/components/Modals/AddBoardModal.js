import { useSelector, useDispatch } from "react-redux";
import clsx from "clsx";
import { addBoard } from "../../features/boardSlice";
import { closeBoardModal } from "../../features/modalSlice";

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
        "bg-gray-600  bg-opacity-50 overflow-y-auto h-full w-full z-10 flex justify-center align-center"
      )}
    >
      <form onSubmit={handleSubmit}>
        <div className=" dark:bg-[#2B2C37] bg-almost-white p-5  rounded-lg max-h-1/4 my-[10%]">
          <div className="dark:text-white font-bold flex justify-between text-black ">
            <h2>Add New Board</h2>
            <button onClick={() => dispatch(closeBoardModal())}>x</button>
          </div>
          <div className="my-4 flex flex-col">
            <p className="dark:text-white text-sm leading-8">Board name</p>
            <input
              name="newBoard"
              placeholder=""
              className="border rounded dark:bg-[#2B2C37] "
            ></input>
          </div>
          <div className="my-4">
            <p className="dark:text-white  text-sm leading-8">Columns</p>
            <textarea
              name="columns"
              className="border dark:bg-[#2B2C37] "
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
            className="align-center p-2 h-10 my-4  shadow-sm text-white bg-purple-btn hover:bg-hover-purple rounded-full w-90"
          >
            Create new board
          </button>
        </div>
      </form>
    </div>
  );
};
