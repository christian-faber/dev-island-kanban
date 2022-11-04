import { useDispatch, useSelector } from "react-redux";
import { closeTaskModal } from "../../features/modalSlice";
import { handleAddTask } from "../../features/taskSlice";
import clsx from "clsx";

export const AddTaskModal = () => {
  const dispatch = useDispatch();
  const modalIsOpen = useSelector((state) => state.modal.taskOpen);
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const value = evt.target.elements.newTask.value;
    const description = evt.target.elements.newDescription.value;
    if (!value || !description) return;
    dispatch(handleAddTask(value, description));

    evt.target.elements.newTask.value = "";
  };
  <div
    className={clsx(
      { fixed: modalIsOpen, hidden: !modalIsOpen },
      "inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-10"
    )}
  >
    <div className="border bg-almost-white p-5 absolute m-auto z-50 rounded-lg">
      <div className="flex justify-between text-black w-96">
        <h2>Add New Task</h2>
        <button onClick={() => dispatch(closeTaskModal())}>X</button>
      </div>
      <form on onSubmit={handleSubmit}>
        <div className="my-4">
          <p className="text-light-gray text-sm">title</p>
          <input name="newTask" className="border w-96"></input>
        </div>
        <div>
          <p>Description</p>
          <input name="newDescription" className="border w-96"></input>
        </div>
        <div className="my-4">
          <p>subtasks</p>
          <span>
            <input></input>
            <button src="/" alt="X"></button>
          </span>
          <span>
            <input></input>
            <button src="/" alt="X"></button>
          </span>
          <button>+ Add New Subtask</button>
        </div>
        <div className="my-4">
          <span>
            <p>Status</p>
            {/* dropdown in fragment below! */}
            <></>
          </span>
          <button type="submit">Create Task</button>
        </div>
      </form>
    </div>
  </div>;
};
