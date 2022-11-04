import initialdata from "../../data/initial-data";
import { SubtaskList } from "../SubtaskList";
import { useDispatch } from "react-redux";
import { closeInfoModal } from "../../features/modalSlice";

export const TaskInfoModal = () => {
  // TODO: replace with the slice data
  const data = initialdata;
  const length = data.tasks.subtasks.length;
  const { dispatch } = useDispatch();

  return (
    <div>
      <div>
        <h1>{data.tasks.title}</h1>
        <button
          onClick={() => {
            dispatch(closeInfoModal());
          }}
        >
          X
        </button>
      </div>
      <p>{data.tasks.description}</p>
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
  );
};
