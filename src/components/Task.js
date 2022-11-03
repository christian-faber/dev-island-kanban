import { Draggable } from "react-beautiful-dnd";
import { openTaskModal } from "../features/modalSlice";
import { useDispatch } from "react-redux";

export const Task = ({ task, index }) => {
  const length = task.subtasks.length;
  const dispatch = useDispatch();

  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <div
          className="m-5 gap-5 border-solid border-orange-700"
          snapshot={snapshot}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          onDoubleClick={() => {
            dispatch(openTaskModal());
          }}
        >
          <h4>{task.title}</h4>
          <p>
            {length} {length < 2 ? "subtask" : "subtasks"}
          </p>
        </div>
      )}
    </Draggable>
  );
};
