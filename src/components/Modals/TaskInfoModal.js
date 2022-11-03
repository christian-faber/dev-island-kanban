import initialdata from "../../data/initial-data";
import { SubtaskList } from "../SubtaskList";

export const TaskInfoModal = () => {
  const data = initialdata;
  const length = data.tasks.subtasks.length;
  return (
    <div>
      <h1>{data.tasks.title}</h1>
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
