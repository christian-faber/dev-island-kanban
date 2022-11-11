import { useDispatch, useSelector } from "react-redux";
import { closeTaskModal } from "../../features/modalSlice";
import { addTask } from "../../features/taskSlice";

import { Dropdown } from "./Dropdown";

import clsx from "clsx";

export const AddTaskModal = () => {
  const dispatch = useDispatch();
  const modalIsOpen = useSelector((state) => state.modal.taskOpen);
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const value = evt.target.elements.newTask.value;
    const description = evt.target.elements.newDescription.value;
    if (!value || !description) return;
    dispatch(addTask(value, description));

    evt.target.elements.newTask.value = "";
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
            <h2>Add New Task</h2>
            <button onClick={() => dispatch(closeTaskModal())}>X</button>
          </div>
          {/* <form on onSubmit={handleSubmit}> */}
          <div className="my-4">
            <p className="text-light-gray text-sm">Task</p>
            <input
              name="newTask"
              placeholder="Task Title"
              className="border w-96"
            ></input>
          </div>
          <div className="my-4 flex flex-col">
            <p className="text-light-gray text-sm leading-8">Description</p>
            <textarea
              rows={8}
              name="newDescription"
              placeholder="Give some details of your task"
              className="border w-96"
            ></textarea>
          </div>
          <div className="my-4 flex flex-col">
            <p>subtasks</p>
            <span>
              <input></input>
              <button src="/" alt="X"></button>
            </span>
            <span>
              <input></input>
              <button src="/" alt="X"></button>
            </span>
            <button
              type="submit"
              onClick={() => dispatch(addTask())}
              className="align-center h-10 my-4 border shadow-sm text-white bg-purple-btn hover:bg-hover-purple rounded-full w-90"
            >
              + Add New Subtask
            </button>
          </div>

          <div className="my-4">
            <span>
              <p>Status</p>
              <Dropdown />
            </span>
            <button
              onClick={() => {
                dispatch(addTask());
              }}
              type="submit"
            >
              Create Task
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
