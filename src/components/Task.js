import { Draggable } from "react-beautiful-dnd";
import counterSlice from "../features/counter/counterSlice";

export const Task = ({ task, index }) => {
  const length = task.subtasks.length;

  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <div
          snapshot={snapshot}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <h4>{task.content}</h4>
          <p>
            {length} {length < 2 ? "subtask" : "subtasks"}
          </p>
        </div>
      )}
    </Draggable>
  );
};
