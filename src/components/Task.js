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
          className="bg-white w-60 h-min shadow-lg p-2 m-5 gap-5 border-solid"
          snapshot={snapshot}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          onDoubleClick={() => {
            dispatch(openTaskModal());
          }}
        >
          <h1>{task.title}</h1>
          <p>
            {length} {length < 2 ? "subtask" : "subtasks"}
          </p>
        </div>
      )}
    </Draggable>
  );
};
