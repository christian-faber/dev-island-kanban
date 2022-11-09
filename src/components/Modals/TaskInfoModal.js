import initialdata from "../../data/initial-data";
import { SubtaskList } from "../SubtaskList";
import { useDispatch, useSelector } from "react-redux";
import { closeInfoModal } from "../../features/modalSlice";
// import { handleEditTask } from "../../features/taskSlice";
import clsx from "clsx";

export const TaskInfoModal = () => {
  const data = initialdata;
  const length = data.subtasks.length;
  const { dispatch } = useDispatch();
  const modalIsOpen = useSelector((state) => state.modal.infoOpen);
  return (
    <div
      className={clsx(
        { fixed: modalIsOpen, hidden: !modalIsOpen },
        "inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-10"
      )}
    >
      <div className="w-70 h-70">
        <div>
          <h1>{data.title}</h1>
          <button
            onClick={() => {
              dispatch(closeInfoModal());
            }}
          >
            X
          </button>
        </div>
        <p>{data.description}</p>
        <div>
          <p>
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
    </div>
  );
};
