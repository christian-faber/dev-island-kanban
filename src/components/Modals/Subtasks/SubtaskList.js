import { useSelector } from "react-redux";
import { Subtask } from "./Subtask";

export const SubtaskList = () => {
  const subtasks = useSelector((state) => state.subtask);

  return (
    <ul className="mt-4">
      {!subtasks?.length && <div>Nothing to do here ¯\_(ツ)_/¯</div>}
      {subtasks?.map((s) => (
        <Subtask subtask={s} key={s.id} />
      ))}
    </ul>
  );
};
