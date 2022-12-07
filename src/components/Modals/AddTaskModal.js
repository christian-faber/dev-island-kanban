import { useDispatch, useSelector } from "react-redux";
import { closeTaskModal } from "../../features/modalSlice";
import { addTask } from "../../features/taskSlice";
import { Dropdown } from "./Dropdown";
import clsx from "clsx";
import { useRef, useState } from "react";
import { v4 } from "uuid";
import { addTaskToColumn } from "../../features/columnSlice";
import { addSubtask } from "../../features/subtaskSlice";
import { useColumn } from "../../app/hooks/useColumn";
import { AddSubtask } from "./Subtasks/AddSubtasks";

//need to add active ring/border of purple when clicked inside of textarea
//need to add validation with danger/red ring/border
//validation - title and description can't be empty

export const AddTaskModal = () => {
  const [c, setColumn] = useState("");
  const dispatch = useDispatch();
  const modalIsOpen = useSelector((state) => state.modal.taskOpen);
  const column = useColumn();
  const subtask = useSelector((state) => state.subtask);
  const handleClickOutside = (evt) => {
    if (!menuRef.current.contains(evt.target)) {
      dispatch(closeTaskModal());
    }
  };
  const menuRef = useRef();
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const title = evt.target.elements.newTask.value;
    const description = evt.target.elements.newDescription.value;
    const columnId = evt.target.elements.column.value;
    const subtasksTitle = evt.target.elements.subtask.value;
    if (!title) return;
    const taskId = v4();
    dispatch(addTask({ title, description, id: taskId, columnId: columnId }));
    // dispatch(addTaskToColumn({ columnId: columnId, taskId: taskId }));
    dispatch(closeTaskModal());
    dispatch(addSubtask({ subtasksTitle }));
    evt.target.elements.newTask.value = "";
  };

  return (
    <div
      onClick={handleClickOutside}
      className={clsx(
        { fixed: modalIsOpen, hidden: !modalIsOpen },
        "bg-gray-600 bg-opacity-50 z-10 overflow-y-auto h-full w-full  flex justify-center align-center"
      )}
    >
      <form ref={menuRef} className="w-72" onSubmit={handleSubmit}>
        <div className=" bg-almost-white dark:bg-[#2B2C37] p-5 rounded-lg max-h-1/4 my-[10%]  ">
          <div className="flex text-black w-20">
            <h2 className="absolute font-bold text-lg dark:text-white">
              Add new task
            </h2>
            <button
              className="dark:text-white absolute pl-60"
              onClick={() => dispatch(closeTaskModal())}
            >
              X
            </button>
          </div>
          {/* <form on onSubmit={handleSubmit}> */}
          <div className="my-4">
            <p className="p-2 border-rounded text-light-gray dark:text-white">
              Title
            </p>
            <input
              name="newTask"
              placeholder="enter task here"
              type="text"
              required
              className="w-full text:black dark:text-white p-2 rounded border dark:bg-[#2B2C37]"
            ></input>
          </div>
          <div className="flex flex-col ">
            <p className="text-light-gray dark:text-white p-2 border-rounded">
              Description
            </p>
            <textarea
              rows={2}
              name="newDescription"
              placeholder="enter details here"
              className="text:black dark:text-white p-2 rounded border dark:bg-[#2B2C37]"
            ></textarea>
          </div>
          <div className=" flex flex-col pt-2">
            <p className="dark:text-white text-light-gray">Subtasks</p>
            <span>
              <AddSubtask />
              {/* <button src="/" alt="X"></button> */}
            </span>
            {/* <span>{subtasks}</span> */}
            <button
              type="submit"
              className="align-center h-10 my-4 shadow-sm text-indigo-700 font-semibold bg-slate-200  hover:bg-medium-gray rounded-full"
            >
              + Add new Subtask
            </button>
          </div>

          <div className="my-4 dark:text-white">
            <span>
              <p className="text-[#828FA3] text-sm font-semibold dark:text-white ">
                Status
              </p>
              <Dropdown name="column" handleColumn={setColumn} />
            </span>
            <button
              className="mt-6 w-full font-semibold bg-[#635FC7] py-2 rounded-full text-white"
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
