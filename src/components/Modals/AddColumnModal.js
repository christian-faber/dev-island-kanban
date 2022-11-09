import { useSelector, useDispatch } from "react-redux";
import clsx from "clsx";
import { addColumn } from "../../features/columnSlice";
import { closeColumnModal } from "../../features/modalSlice";

export const AddColumnModal = () => {
  const dispatch = useDispatch();
  const modalIsOpen = useSelector((state) => state.modal.columnOpen);
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const value = evt.target.elements.newColumn.value;
    const description = evt.target.elements.newDescription.value;
    if (!value || !description) return;
    dispatch(addColumn(value, description));

    evt.target.elements.newColumn.value = "";
  };
  return (
    <div
      className={clsx(
        { fixed: modalIsOpen, hidden: !modalIsOpen },
        "bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-10 flex justify-center align-center"
      )}
    >
      <form>
        <div className=" border bg-almost-white p-5 z-50 rounded-lg max-h-1/4 my-[10%]">
          <div className="flex justify-between text-black w-96">
            <h2>Add New Column</h2>
            <button onClick={() => dispatch(closeColumnModal())}>x</button>
          </div>

          <div className="my-4 flex flex-col">
            <p className="text-light-gray text-sm leading-8">Board</p>
            {/* dropdown in fragment below! */}

            <input
              name="newColumn"
              placeholder="Column Title"
              className="border w-96"
            ></input>
          </div>
          <div className="my-4">
            <p className="text-light-gray text-sm leading-8">Description</p>
            <textarea
              rows={8}
              name="newDescription"
              placeholder="Give some details of your category"
              className="border w-96"
            ></textarea>
          </div>

          <div className="my-4 flex flex-col">
            <span>
              <p className="text-light-gray text-sm leading-8">Board</p>
              {/* dropdown in fragment below! */}
              <input
                placeholder="dropdown coming soon!"
                className="border w-96"
              ></input>
            </span>
            <button
              type="submit"
              onClick={() => dispatch(closeColumnModal(), addColumn())}
              className="align-center h-10 my-4 border shadow-sm text-white bg-purple-btn hover:bg-hover-purple rounded-full w-90"
            >
              Create Column
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
