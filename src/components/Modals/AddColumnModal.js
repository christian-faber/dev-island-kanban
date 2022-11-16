import React, { useSelector, useDispatch } from "react-redux";
import clsx from "clsx";
import { addColumn } from "../../features/columnSlice";
import { closeColumnModal } from "../../features/modalSlice";

//new column which appears on board is just a tiny modal
//that has a text area that takes a "column name" with a purple add btn
export const AddColumnModal = () => {
  const dispatch = useDispatch();

  const modalIsOpen = useSelector((state) => state.modal.columnOpen);
  const handleSubmit = (evt) => {
    evt.preventDefault();

    const title = evt.target.elements.newColumn.value;
    const description = evt.target.elements.newDescription.value;
    if (!title) return;
    dispatch(addColumn({ title, description }));
    //grab state
    dispatch(closeColumnModal());
    evt.target.elements.newColumn.value = "";
  };
  return (
    <div
      className={clsx(
        { fixed: modalIsOpen, hidden: !modalIsOpen },
        " bg-gray-600  bg-opacity-50 h-full w-full z-10 flex justify-center pt-48"
      )}
    >
      <form onSubmit={handleSubmit}>
        <div className="  dark:bg-[#2B2C37] relative bg-almost-white p-5  rounded-lg max-h-1/4 my-[10%]">
          <div className="flex justify-between text-black w-96">
            <h2 className="dark:text-white">Column Name</h2>
            <button onClick={() => dispatch(closeColumnModal())}>x</button>
          </div>
          <div className=" dark:text-white my-4">
            <input className="dark:bg-[#2B2C37] border rounded w-96"></input>
          </div>
          <div className="flex justify-center">
            <button className="rounded align-center p-2  shadow-sm text-white bg-purple-btn hover:bg-hover-purple  w-28">
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
