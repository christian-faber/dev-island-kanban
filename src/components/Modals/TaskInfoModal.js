import initialdata from "../../data/initial-data";
import { SubtaskList } from "../SubtaskList";
import { useDispatch, useSelector } from "react-redux";
import { closeInfoModal } from "../../features/modalSlice";
// import { handleEditTask } from "../../features/taskSlice";
import clsx from "clsx";

export const TaskInfoModal = () => {
  const data = initialdata;
  const length = data.subtasks.length;
  const dispatch = useDispatch();
  const modalIsOpen = useSelector((state) => state.modal.infoOpen);
  return (
    <div
      className={clsx(
        { fixed: modalIsOpen, hidden: !modalIsOpen },
        "bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-10 flex justify-center align-center"
      )}
    >
      <form>
        <div className="border bg-almost-white p-5 z-50 rounded-lg max-h-1/4 my-[40%]">
          <div className="flex justify-between text-black w-96">
            <h2>Title: {data.tasks.title}</h2>
            <button
              onClick={() => {
                dispatch(closeInfoModal());
              }}
            >
              X
            </button>
          </div>
          <div>
            <p className="text-black my-4">
              Description: {data.tasks.description}
            </p>
          </div>
          <div className="my-4 flex flex-col">
            <p className="text-light-gray text-sm leading-8">
              Subtasks ({length} {length < 2 ? "subtask" : "subtasks"})
            </p>
            <SubtaskList />
          </div>
          <div>
            <p>Status</p>

            {/* Dropdown below */}
            <></>
          </div>
        </div>
      </form>
    </div>
  );
};
